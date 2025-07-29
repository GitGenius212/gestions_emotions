import React, { useState } from 'react';
import { LogBox, ScrollView } from "react-native";


//Sections
import { clearPenseesEmpty, getPenseesWithSameDate } from './AccèsAuxDonnées/DatabaseStorage/DatatPenseesDataBD';
import PenseeData from './Domaine/Classes/PenseeData';
import { getDateFromLocaleDate } from '@/app/functions';
import SectionDate from "./sections/sectionDate";
import SectionPensees from "./sections/sectionPensees";
import SectionSolutions from "./sections/sectionSolutions";



export default function Index() {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    

    async function getPenseesFromBD() {
          await clearPenseesEmpty();
          const result = await Promise.resolve(getPenseesWithSameDate(getDateFromLocaleDate()));
          return result;
    }
    
        getPenseesFromBD().then((value) => {
          const listPensees = value;

          //Convert string to date
          for(let p of listPensees) {
            p.date = new Date(p.date);
            console.log(`Pensee date: ${p.date}`);
          }


          setListPenseesSameDate(listPensees);
        });

}, []);

//Déclaration de variables==========================================================================
const list_pensee_by_default : PenseeData[] = [];
const [listPenseesSameDate, setListPenseesSameDate] = useState(list_pensee_by_default);

// Effet pour surveiller les changements de la liste des pensées
React.useEffect(() => {
  console.log("=== listPenseesSameDate a changé ===");
  console.log("Nouvelle liste:", listPenseesSameDate);
  console.log("Nombre de pensées:", listPenseesSameDate.length);
}, [listPenseesSameDate]);



//Functions====================================================================================================
//Setting the states of the variables


//Obtenir la pensée par date
function getPensees(penseesFoundByDate: PenseeData[]) {
  // Créer une nouvelle copie de l'array pour forcer la mise à jour du state
  const newPenseesList = [...penseesFoundByDate];
  
  //Convert the date in string to Date
  for(let pensee of newPenseesList) {
    pensee.date = new Date(pensee.date);
  }
  
    // Forcer une mise à jour complète du state
  setListPenseesSameDate([]);
  setTimeout(() => {
    setListPenseesSameDate(newPenseesList);
  }, 0);
  
}






  return (
    <ScrollView 
    keyboardShouldPersistTaps='always'
    style={{flex:1, backgroundColor:'white'}} showsVerticalScrollIndicator={false}>


      {/*Section de la date*/}
      <SectionDate 
      getPensees={getPensees}
      />

      {/*Section des pensées*/}
      <SectionPensees 
      listPenseesSameDate={listPenseesSameDate}
      getPensees={getPensees}
      
      />

      {/*Section des solutions*/}
      <SectionSolutions />


    </ScrollView>
  );
}
