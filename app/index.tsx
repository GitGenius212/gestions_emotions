import React, { useState } from 'react';
import { LogBox, ScrollView } from "react-native";


//Sections
import { getPenseeWithSameDate } from './AccèsAuxDonnées/DataBidons/DataBidonPenseeData';
import PenseeData from './Domaine/Classes/PenseeData';
import SectionDate from "./sections/sectionDate";
import SectionPensees from "./sections/sectionPensees";
import SectionSolutions from "./sections/sectionSolutions";



export default function Index() {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, []);

//Déclaration de variables==========================================================================
const [listPenseeSameDate, setListPenseeSameDate] = useState(getPenseeWithSameDate(new Date()));





//Functions====================================================================================================
//Setting the states of the variables




//Obtenir la pensée par date
function getPensees(penseesFoundByDate: PenseeData[]) {
  setListPenseeSameDate(penseesFoundByDate);
  
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
      listPenseesSameDate={listPenseeSameDate}
      
      />

      {/*Section des solutions*/}
      <SectionSolutions />


    </ScrollView>
  );
}
