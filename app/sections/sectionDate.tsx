import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { PropsWithChildren, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import styles from '../styles';


export const CustomText = ({ children }: PropsWithChildren) => <Text style={[styles.aujourdhui]}>{children}</Text>;

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

 const SectionDate = () => {

  const [date, setDate] = useState(new Date());
  const [isToday, setIsToday] = useState(false);  

  
  

  return (
    <View style={{paddingHorizontal: 30, paddingTop:75}}>
      <View style={{position:'absolute', right:45, top:55}}>
        <TouchableOpacity onPress={() => console.log("Choose a date")}>
            <FontAwesome name="calendar" size={24} color="#03045E" />
        </TouchableOpacity>
        
      </View>

      <Calendar style={{marginTop:15}} 
      markedDates={{
        [date.toISOString().split('T')[0]]: {selected: true, selectedColor: '#94DDBC'},
       
      }}
      enableSwipeMonths={true}
        onDayPress={day => {
          setDate(new Date(day.dateString));
          console.log('selected day', day);
        }}
      />

      
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
    
        <TouchableOpacity onPress={() => console.log("Aller à hier")}>
          <Text style={{fontSize:50, color:"#03045E"}}>&larr;</Text>
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: "center"}}>

            <Text style={{fontSize: 24, fontWeight: "bold", marginTop: 10}}>Date</Text>

            <Text style={{fontSize: 18, marginBottom: 10,}}>{date.toISOString().split('T')[0]}</Text>

            <CustomText>Aujourd'hui</CustomText>

        </View>

        <TouchableOpacity onPress={() => console.log("Aller à demain")}>
          <Text  style={{fontSize:50, color:"#03045E"}}>&rarr;</Text>
        </TouchableOpacity>
        
      </View>
    </View>
    
  )
}

export default SectionDate