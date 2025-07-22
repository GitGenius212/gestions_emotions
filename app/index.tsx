import React, { useState } from 'react';
import { LogBox, ScrollView } from "react-native";


//Sections
import PenseeData from './Domaine/Classes/PenseeData';
import SectionDate from "./sections/sectionDate";
import SectionPensees from "./sections/sectionPensees";
import SectionSolutions from "./sections/sectionSolutions";
import { clearPenseesEmpty, getPenseesWithSameDate } from './AccèsAuxDonnées/DatabaseStorage/DatatPenseesDataBD';



export default function Index() {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    

    async function getPenseesFromBD() {
          await clearPenseesEmpty();
          const result = await Promise.resolve(getPenseesWithSameDate(new Date()));
          return result;
    }
    
        getPenseesFromBD().then((value) => {
          const listPensees = value;

          //Convert string to date
          for(let p of listPensees) {
            p.date = new Date(p.date);
          }


          setListPenseesSameDate(listPensees);
        });

}, []);

//Déclaration de variables==========================================================================
const list_pensee_by_default : PenseeData[] = [];
const [listPenseesSameDate, setListPenseesSameDate] = useState(list_pensee_by_default);





//Functions====================================================================================================
//Setting the states of the variables


//Obtenir la pensée par date
function getPensees(penseesFoundByDate: PenseeData[]) {
  //Convert the date in string to Date
  for(let pensee of penseesFoundByDate) {
    pensee.date = new Date(pensee.date);
  }
  setListPenseesSameDate(penseesFoundByDate);
  
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
