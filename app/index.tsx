import React, { useState } from 'react';
import { LogBox, ScrollView } from "react-native";


//Sections
import { getPenseesWithSameDate } from './AccèsAuxDonnées/DataBidons/DataBidonPenseeData';
import PenseeData from './Domaine/Classes/PenseeData';
import SectionDate from "./sections/sectionDate";
import SectionPensees from "./sections/sectionPensees";
import SectionSolutions from "./sections/sectionSolutions";



export default function Index() {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, []);

//Déclaration de variables==========================================================================
const [listPenseesSameDate, setListPenseesSameDate] = useState(getPenseesWithSameDate(new Date()));





//Functions====================================================================================================
//Setting the states of the variables


//Obtenir la pensée par date
function getPensees(penseesFoundByDate: PenseeData[]) {
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
