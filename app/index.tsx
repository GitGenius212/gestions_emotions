import React from 'react';
import { LogBox, ScrollView } from "react-native";


//Sections
import SectionDate from "./sections/sectionDate";
import SectionPensees from "./sections/sectionPensees";
import SectionSolutions from "./sections/sectionSolutions";



export default function Index() {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])

  return (
    <ScrollView style={{flex:1, backgroundColor:'white'}} showsVerticalScrollIndicator={false}>


      {/*Section de la date*/}
      <SectionDate />

      {/*Section des pensées*/}
      <SectionPensees />

      {/*Section des solutions*/}
      <SectionSolutions />


    </ScrollView>
  );
}
