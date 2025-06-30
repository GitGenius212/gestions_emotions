import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { getPenseeByDate } from '../AccèsAuxDonnées/DataBidons/DataBidonPenseeData';
import { CustomTextProps } from '../Domaine/props/CustomTextProps';
import { PenseeProps } from '../Domaine/props/PenseeProps';



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

 const SectionDate = ({getPensee} : PenseeProps) => {

  const [date, setDate] = useState(new Date());
  const [isToday, setIsToday] = useState(true);  
  const [isPressedCalendar, setIsPressedCalendar] = useState(false);

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

  function getPenseeByCurrentDate(p_date: Date) {
    const penseeTrouvee = getPenseeByDate(p_date);
    if(penseeTrouvee != undefined && getPensee != undefined) {
      getPensee(penseeTrouvee);  
      
    }
   
  }

  function modificationIsToday(p_date : string) {
    //Déclaration de variables
    let dateObtained = JSON.parse(JSON.stringify(p_date));
    dateObtained = new Date(dateObtained);

    //Traitements
    if(new Date().toISOString().split('T')[0] == p_date) {
        setIsToday(true);
    } else {
        setIsToday(false);
    }

    getPenseeByCurrentDate(dateObtained);

  }
  
  const gotoYesterday = () => {
    let y = JSON.parse(JSON.stringify(date));  //Copy date
    y = new Date(y);
    y.setDate(y.getDate() -1);
    setDate(y);
    modificationIsToday(y.toISOString().split('T')[0]);
  }

  const gotoTomorrow = () => {
    let t = JSON.parse(JSON.stringify(date));  //Copy date
    t = new Date(t);
    t.setDate(t.getDate() + 1);
    setDate(t);
    modificationIsToday(t.toISOString().split('T')[0]);
  }

  return (
    <View style={{paddingHorizontal: 30, paddingTop:75}}>
      <View style={{position:'absolute', right:20, top:50}}>
        <TouchableOpacity
        style={{
          backgroundColor:isPressedCalendar ? 'rgba(3,4, 64, 0.8)' : 'white', 
          padding:5, 
          borderRadius:60
        }}
        onPress={() => setIsPressedCalendar(!isPressedCalendar)}>
            <FontAwesome name="calendar" size={24} color={isPressedCalendar ? 'white' : "#03045E"} />
        </TouchableOpacity>
        
      </View>

      <Calendar  style={{marginTop:15, display:isPressedCalendar ? 'flex' : 'none'}}
      initialDate={date.toISOString().split('T')[0]}
      theme={{
        arrowColor:'#03045E',
        textMonthFontSize:24,  
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#C84630',
        dayTextColor: '#2d4150',
        
      }}
      markedDates={{
        [date.toISOString().split('T')[0]]: {selected: true, selectedColor: '#94DDBC'},
       
      }}
      enableSwipeMonths={true}
        onDayPress={day => {
          setDate(new Date(day.dateString));
          modificationIsToday(day.dateString);
          
        }}
      />

      
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
    
        <View style={{marginLeft:20}}>
          <TouchableOpacity onPress={() => {
            gotoYesterday()
          }
        }>
          <Text style={{fontSize:50, color:"#03045E"}}>&larr;</Text>
        </TouchableOpacity>
        </View>
        

        <View style={{ flex: 1, alignItems: "center"}}>

            <Text style={{fontSize: 24, fontWeight: "bold", marginTop: 10}}>Date</Text>

            <Text style={{fontSize: 18, marginBottom: isToday? 5 : 15}}>{date.toISOString().split('T')[0]}</Text>

            <CustomText 
            style_aujourdhui={style.aujourdhui}
            >Aujourd'hui</CustomText>

        </View>

        <View style={{marginRight:20}}>
          <TouchableOpacity onPress={() => {
            gotoTomorrow();
          }
        }>
          <Text  style={{fontSize:50, color:"#03045E"}}>&rarr;</Text>
        </TouchableOpacity>

        </View>
        
        
      </View>
    </View>
    
  )
}

export default SectionDate