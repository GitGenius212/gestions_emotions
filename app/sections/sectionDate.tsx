import { getDateFromLocaleDate } from '@/app/functions';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { getPenseesFillForm, getPenseesWithSameDate } from '../AccèsAuxDonnées/DatabaseStorage/DatatPenseesDataBD';
import CustomTextProps from '../Domaine/props/CustomTextProps';
import PenseeProps from '../Domaine/props/PenseeProps';




export const CustomText = ({ children, style_aujourdhui }: PropsWithChildren<CustomTextProps>) => <Text style={style_aujourdhui}>{children}</Text>;

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};

LocaleConfig.defaultLocale = 'fr';

 const SectionDate = ({getPensees} : PenseeProps) => {

  const [date, setDate] = useState(getDateFromLocaleDate());
  const [isToday, setIsToday] = useState(true);  
  const [isPressedCalendar, setIsPressedCalendar] = useState(false);
  const [markedDatesPenseesFill, setMarkedDatesPenseesFill] = useState({});
  let colorScheme = useColorScheme();



  useEffect(() => {
    const localDateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    fetchDates(localDateString);
  }, []);


    const fetchDates = async (selected_day: string) => {
      const listFetchedDates = await getPenseesFillForm();
      const markedDatesObject : Record<string, any> = {};
      
      for(let p of listFetchedDates) {
        let converted_date = new Date(p.date);
        // CORRECTION : Utiliser une méthode locale au lieu d'UTC
        const localDateString = `${converted_date.getFullYear()}-${String(converted_date.getMonth() + 1).padStart(2, '0')}-${String(converted_date.getDate()).padStart(2, '0')}`;
        markedDatesObject[localDateString] = {
          marked: true, 
          dotColor: '#94DDBC'
        };
        
      }

      markedDatesObject[selected_day] = {selected: true, selectedColor: '#94DDBC'};
      
      // Update the state with the new marked dates
      setMarkedDatesPenseesFill(markedDatesObject);
    };

 






  const style = StyleSheet.create({
    aujourdhui: {
      backgroundColor: "#E26878", 
      color: "white",
      paddingVertical: 15,
      paddingHorizontal: 32,
      textAlign: "center",
      fontSize: 16,
      borderRadius: 10,
      marginBottom: 15,
      display: isToday ? 'flex' : 'none'
      
      
    }
  });

  async function getPenseesByCurrentDate(p_date: Date) {
    //Déclaration de variables
    const penseesTrouvees = await getPenseesWithSameDate(p_date);
    //Traitements
    if(getPensees != undefined) {
      getPensees(penseesTrouvees);
      
    }
   
  }

  function modificationIsToday(p_date : string) {
    
    fetchDates(p_date);  //For marketDates
    
    // Extraire année, mois, jour de la chaîne YYYY-MM-DD
    const [year, month, day] = p_date.split('-').map(Number);
    // Créer une date locale à minuit (pas de conversion UTC)
    const dateObtained = new Date(year, month - 1, day, 0, 0, 0, 0);
    
    //Traitements
    const todayLocal = getDateFromLocaleDate();
    const todayString = `${todayLocal.getFullYear()}-${String(todayLocal.getMonth() + 1).padStart(2, '0')}-${String(todayLocal.getDate()).padStart(2, '0')}`;
    
    if(todayString == p_date) {
        setIsToday(true);
    } else {
        setIsToday(false);
    }

    getPenseesByCurrentDate(dateObtained);
    

  }
  
  const gotoYesterday = () => {
    let y = JSON.parse(JSON.stringify(date));  //Copy date
    y = new Date(y);
    y.setDate(y.getDate() -1);
    setDate(y);
    
    // CORRECTION : Utiliser une méthode locale au lieu d'UTC
    const localDateString = `${y.getFullYear()}-${String(y.getMonth() + 1).padStart(2, '0')}-${String(y.getDate()).padStart(2, '0')}`;
    modificationIsToday(localDateString);
  }

  const gotoTomorrow = () => {
    let t = JSON.parse(JSON.stringify(date));  //Copy date
    t = new Date(t);
    t.setDate(t.getDate() + 1);
    setDate(t);
    
    // CORRECTION : Utiliser une méthode locale au lieu d'UTC
    const localDateString = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
    modificationIsToday(localDateString);
  }

  function setBackgroundIcon() : string {
    if(colorScheme === 'dark') {
      return isPressedCalendar ? '#606b8c' : '#1D3D47';
    } else {
      return isPressedCalendar ? 'rgba(3,4, 64, 0.8)' : 'white'

    }
  }

  function setColorIcon() : string{
    if(colorScheme == 'dark') {
      return isPressedCalendar ? 'white' : '#606b8c';
    } else {
      return isPressedCalendar ? 'white' : "#03045E"

    }
  }

  return (
    <View style={{backgroundColor: (colorScheme === 'dark') ? '#1D3D47' : ''}}>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:35}}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: '#C84630', paddingTop:10}}>Journal du bien-être</Text>
        </View>
      <View style={{paddingHorizontal: 30, paddingTop:32}}>
        <View style={{position:'absolute', right:20, top:5}}>
          <TouchableOpacity
          style={{
            backgroundColor: setBackgroundIcon(), 
            padding:5, 
            borderRadius:60
          }}
          onPress={() => setIsPressedCalendar(!isPressedCalendar)}>
              <FontAwesome name="calendar" size={24} color={setColorIcon()} />
          </TouchableOpacity>
          
        </View>

        <Calendar  
        key={colorScheme}
        style={{marginTop:15, display:isPressedCalendar ? 'flex' : 'none', backgroundColor:(colorScheme === 'dark') ? '#1D3D47' : 'white'}}
            initialDate={`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`}
            theme={{
              arrowColor:(colorScheme === 'dark') ? '#606b8c' : '#03045E',
              textMonthFontSize:24,  
              calendarBackground: (colorScheme === 'dark') ? '#1D3D47' : 'white',
              textSectionTitleColor: (colorScheme === 'dark') ? 'white': '#b6c1cd',
              textDisabledColor: 'grey', 
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#C84630',
              dayTextColor: (colorScheme === 'dark') ? 'white': '#2d4150',
              monthTextColor: (colorScheme === 'dark') ? 'white' : 'black'
              
            }}
            markedDates= {
              markedDatesPenseesFill
            }

            
            enableSwipeMonths={true}
              onDayPress={day => {
                // CORRECTION : Créer une date locale au lieu d'UTC
                const [year, month, dayNum] = day.dateString.split('-').map(Number);
                const localDate = new Date(year, month - 1, dayNum, 0, 0, 0, 0);
                setDate(localDate);
                modificationIsToday(day.dateString);
                
                
              }}
          />

        
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      
          <View style={{marginLeft:20}}>
            <TouchableOpacity onPress={() => {
              gotoYesterday()
            }
          }>
            <Text style={{fontSize:50, color:(colorScheme === 'dark') ? '#606b8c': "#03045E"}}>&larr;</Text>
          </TouchableOpacity>
          </View>
          

          <View style={{ flex: 1, alignItems: "center"}}>

              <Text style={{fontSize: 24, fontWeight: "bold", marginTop: 10, color:(colorScheme === 'dark') ? 'white' : ''}}>Date</Text>

              <Text style={{fontSize: 18, marginBottom: isToday? 5 : 15, color:(colorScheme === 'dark') ? 'white' : ''}}>{`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`}</Text>

              <CustomText 
              style_aujourdhui={style.aujourdhui}
              >Aujourd'hui</CustomText>

          </View>

          <View style={{marginRight:20}}>
            <TouchableOpacity onPress={() => {
              gotoTomorrow();
            }
          }>
            <Text  style={{fontSize:50, color:(colorScheme === 'dark') ? '#606b8c':"#03045E"}}>&rarr;</Text>
          </TouchableOpacity>

          </View>
          
          
        </View>
      </View> 
    </View> //sectionDate
    
  )
}

export default SectionDate;