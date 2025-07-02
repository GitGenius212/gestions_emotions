import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';


import PenseeProps from '../Domaine/props/PenseeProps';
import Formulaire from '@/components/Formulaire';



const tachometer = <FontAwesome name="tachometer" size={24}/>


const SectionPensees = ({pensee, elementsProps} : PenseeProps) => {

    

    

  return (
    <View style={{flex: 1, backgroundColor:"#94DDBC", padding:15}}>

        <Formulaire 
        elementsProps={elementsProps}
        pensee={pensee}
        />
        
          
    </View>
  )
}

export default SectionPensees