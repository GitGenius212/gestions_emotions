import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';


import PenseeProps from '../Domaine/props/PenseeProps';
import Formulaire from '@/components/Formulaire';



const tachometer = <FontAwesome name="tachometer" size={24}/>


const SectionPensees = ({pensee, elementsProps} : PenseeProps) => {

    

    

  return (
    <View style={{flex: 1, backgroundColor:"#94DDBC", padding:15}}>
       {/* Pour chaque pensee dans penseesAvecMêmeDate*/}
         {/* Afficher le formulaire en lui donnant la pensée en question*/}
        <Formulaire 
        elementsProps={elementsProps}
        pensee={pensee}
        />
        
          
    </View>
  )
}

export default SectionPensees