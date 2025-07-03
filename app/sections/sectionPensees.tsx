import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';


import Formulaire from '@/components/Formulaire';
import PenseeProps from '../Domaine/props/PenseeProps';



const tachometer = <FontAwesome name="tachometer" size={24}/>


const SectionPensees = ({pensee, elementsProps, listPenseesSameDate} : PenseeProps) => {

    

    

  return (
    <View style={{flex: 1, backgroundColor:"#94DDBC", padding:15}}>
       {/* Pour chaque pensee dans penseesAvecMêmeDate*/}
         {/* Afficher le formulaire en lui donnant la pensée en question*/}
         
         {listPenseesSameDate?.map((penseeItem, index) => {
          console.log();
          console.log("listPenseesSameDate => ", listPenseesSameDate);
          console.log("===========================================");
          console.log("PenseeItem: ", penseeItem);
            return (
              <Formulaire 
              key={penseeItem.id}
              elementsProps={elementsProps}
              index={index +1}
              pensee={penseeItem}
              />
            )
         })}
        
        
          
    </View>
  )
}

export default SectionPensees