import React, { useState } from 'react';
import { LogBox, ScrollView } from "react-native";


//Sections
import SectionDate from "./sections/sectionDate";
import SectionPensees from "./sections/sectionPensees";
import SectionSolutions from "./sections/sectionSolutions";
import { pensée_datas } from './AccèsAuxDonnées/DataBidons/DataBidonPenseeData';
import { PenseeData } from './Domaine/Classes/PenseeData';



export default function Index() {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, []);

const [pensee, setPensee] = useState(pensée_datas[3]);

function updatePensee(penseeFoundByDate: PenseeData) {
  setPensee(penseeFoundByDate);
}

  return (
    <ScrollView 
    keyboardShouldPersistTaps='always'
    style={{flex:1, backgroundColor:'white'}} showsVerticalScrollIndicator={false}>


      {/*Section de la date*/}
      <SectionDate 
      pensee={pensee}
      updatePensee={updatePensee}
      />

      {/*Section des pensées*/}
      <SectionPensees 
      pensee={pensee}
      updatePensee={updatePensee}
      />

      {/*Section des solutions*/}
      <SectionSolutions />


    </ScrollView>
  );
}
