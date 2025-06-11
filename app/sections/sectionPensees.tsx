import { View, Text, TouchableHighlight } from 'react-native'
import React, {useState} from 'react'
import styles from '../styles'
import { icons } from '@/constants/icons';
import { FontAwesome } from '@expo/vector-icons';

import TextArea from "@/components/TextArea";
import CustomCheckbox from "@/components/CustomCheckbox"


const tachometer = <FontAwesome name="tachometer" size={24}/>

const SectionPensees = () => {

    //Selection des émotions aux débuts, avant
      const [isSelected_peur_avant, setIsSelected_peur_avant] = useState(false);
      React.useEffect(() => {
      console.log('::Peur_avant::', isSelected_peur_avant);
      }, [isSelected_peur_avant]);
    
      const [isSelected_honte_avant, setIsSelected_honte_avant] = useState(false);
      React.useEffect(() => {
      console.log('::Honte_avant::', isSelected_honte_avant);
      }, [isSelected_honte_avant]);
    
      const [isSelected_colère_avant, setIsSelected_colère_avant] = useState(false);
      React.useEffect(() => {
      console.log('::Colère_avant::', isSelected_colère_avant);
      }, [isSelected_colère_avant]);
    
      const [isSelected_joie_avant, setIsSelected_joie_avant] = useState(false);
      React.useEffect(() => {
      console.log('::Joie_avant::', isSelected_joie_avant);
      }, [isSelected_joie_avant]);
    
      const [isSelected_tristesse_avant, setIsSelected_tristesse_avant] = useState(false);
      React.useEffect(() => {
      console.log('::Tristesse_avant::', isSelected_tristesse_avant);
      }, [isSelected_tristesse_avant]);
    
      const [isSelected_frustration_avant, setIsSelected_frustration_avant] = useState(false);
      React.useEffect(() => {
      console.log('::Frustration_avant::', isSelected_frustration_avant);
      }, [isSelected_frustration_avant]);
    
      const [isSelected_dégoût_avant, setIsSelected_dégoût_avant] = useState(false);
      React.useEffect(() => {
      console.log('::Dégoût_avant::', isSelected_dégoût_avant);
      }, [isSelected_dégoût_avant]);
    
      //Selection des émotions à la fin, après
      const [isSelected_peur_après, setIsSelected_peur_après] = useState(false);
      React.useEffect(() => {
      console.log('::Peur_après::', isSelected_peur_après);
      }, [isSelected_peur_après]);
    
      const [isSelected_honte_après, setIsSelected_honte_après] = useState(false);
      React.useEffect(() => {
      console.log('::Honte_après::', isSelected_honte_après);
      }, [isSelected_honte_après]);
    
      const [isSelected_colère_après, setIsSelected_colère_après] = useState(false);
      React.useEffect(() => {
      console.log('::Colère_après::', isSelected_colère_après);
      }, [isSelected_colère_après]);
    
      const [isSelected_joie_après, setIsSelected_joie_après] = useState(false);
      React.useEffect(() => {
      console.log('::Joie_après::', isSelected_joie_après);
      }, [isSelected_joie_après]);
    
      const [isSelected_tristesse_après, setIsSelected_tristesse_après] = useState(false);
      React.useEffect(() => {
      console.log('::Tristesse_après::', isSelected_tristesse_après);
      }, [isSelected_tristesse_après]);
    
      const [isSelected_frustration_après, setIsSelected_frustration_après] = useState(false);
      React.useEffect(() => {
      console.log('::Frustration_après::', isSelected_frustration_après);
      }, [isSelected_frustration_après]);
    
      const [isSelected_dégoût_après, setIsSelected_dégoût_après] = useState(false);
      React.useEffect(() => {
      console.log('::Dégoût_après::', isSelected_dégoût_après);
      }, [isSelected_dégoût_après]);

  return (
    <View style={{flex: 1, backgroundColor:"#94DDBC", padding:15}}>


            <Text style={[styles.h1, {textDecorationLine:"underline"}]}>Penséé #1</Text>
            <View style={{backgroundColor: "#ffffff", borderRadius: 10, marginBottom:20, padding:20}}>

              <TextArea placeholder='Élément déclencheur' 
              onPress={() => console.log("TextInput Pressed")}
                icons={icons.element_dec}/>

                <TextArea 
                placeholder='Pensée négative'
                onPress={() => console.log("TextInput Pressed")}
                icons={icons.pensee_negative}
                />


                <Text style={styles.h1}>{tachometer} Émotions </Text>

                <CustomCheckbox 
                  checked={isSelected_peur_avant} 
                  onPress={ () => { 
                      setIsSelected_peur_avant(!isSelected_peur_avant)
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_honte_avant} 
                  onPress={ () => { 
                      setIsSelected_honte_avant(!isSelected_honte_avant)
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_colère_avant} 
                  onPress={ () => { 
                      setIsSelected_colère_avant(!isSelected_colère_avant)
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_joie_avant} 
                  onPress={ () => { 
                      setIsSelected_joie_avant(!isSelected_joie_avant)
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_tristesse_avant} 
                  onPress={ () => { 
                      setIsSelected_tristesse_avant(!isSelected_tristesse_avant)
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_frustration_avant} 
                  onPress={ () => { 
                      setIsSelected_frustration_avant(!isSelected_frustration_avant)
                    }
                  }
                    text="Frutration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={isSelected_dégoût_avant} 
                  onPress={ () => { 
                      setIsSelected_dégoût_avant(!isSelected_dégoût_avant)
                    }
                  }
                    text="Dégoût"
                    size={24}
                /> 
                
            </View>

            <View style={{backgroundColor: "#ffffff", borderRadius: 10, padding:20, marginBottom:20 }}>

                <TextArea 
                placeholder='Contre-Pensée négative'
                onPress={() => console.log("TextInput Pressed")}
                icons={icons.pensee_negative}
                />

                <Text style={[styles.h1, {fontSize:22}]}>{tachometer} Après ma contre-pensée : </Text>

                
                <CustomCheckbox 
                  checked={isSelected_peur_après} 
                  onPress={ () => { 
                      setIsSelected_peur_après(!isSelected_peur_après)
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_honte_après} 
                  onPress={ () => { 
                      setIsSelected_honte_après(!isSelected_honte_après)
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_colère_après} 
                  onPress={ () => { 
                      setIsSelected_colère_après(!isSelected_colère_après)
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_joie_après} 
                  onPress={ () => { 
                      setIsSelected_joie_après(!isSelected_joie_après)
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_tristesse_après} 
                  onPress={ () => { 
                      setIsSelected_tristesse_après(!isSelected_tristesse_après)
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_frustration_après} 
                  onPress={ () => { 
                      setIsSelected_frustration_après(!isSelected_frustration_après)
                    }
                  }
                    text="Frutration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={isSelected_dégoût_après} 
                  onPress={ () => { 
                      setIsSelected_dégoût_après(!isSelected_dégoût_après)
                    }
                  }
                    text="Dégoût"
                    size={24}
                /> 

            </View>

            <TouchableHighlight 
            onPress={() => console.log('Button Pressed')}
            underlayColor='#912937'
            style={styles.button}>
              <View>
                <Text style={styles.button_text}>Ajouter</Text>
              </View>
            </TouchableHighlight>

            
          
      </View>
  )
}

export default SectionPensees