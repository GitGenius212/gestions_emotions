import { icons } from '@/constants/icons';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from '../styles';

import CustomCheckbox from "@/components/CustomCheckbox";
import TextArea from "@/components/TextArea";
import { PenseeProps } from '../Domaine/props/PenseeProps';



const tachometer = <FontAwesome name="tachometer" size={24}/>


const SectionPensees = ({pensee, elementsProps} : PenseeProps) => {


    
      

  return (
    <View style={{flex: 1, backgroundColor:"#94DDBC", padding:15}}>


            <Text style={{marginBottom:10}}>
              <Text style={[styles.h1, {textDecorationLine:"underline"}]}>Penséé #1 </Text>
              <Text style={styles.h1}>:</Text>
              <Text style={{fontSize:24, color:"rgba(255,255,255, 0.8)",}}> {pensee?.date.toTimeString().slice(0,9)}</Text>
            </Text>
            <View style={{backgroundColor: "#ffffff", borderRadius: 10, marginBottom:20, padding:20}}>

              <TextArea placeholder='Élément déclencheur' 
              description={elementsProps.element_dec}
              onChangeDescription={elementsProps.setElementDéclencheurText}
              onPress={() => console.log("TextInput Pressed")}
                icons={icons.element_dec}/>

                <TextArea 
                placeholder='Pensée négative'
                description={elementsProps.interprétation}
                onChangeDescription={elementsProps.setInterpretationText}
                onPress={() => console.log("TextInput Pressed")}
                icons={icons.pensee_negative}
                />


                <Text style={styles.h1}>{tachometer} Émotions </Text>

                <CustomCheckbox 
                  checked={elementsProps.isSelected_peur_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedPeurAvant(!elementsProps.isSelected_peur_avant)
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_honte_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedHonteAvant(!elementsProps.isSelected_honte_avant)
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_colère_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedColèreAvant(!elementsProps.isSelected_colère_avant)
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_joie_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedJoieAvant(!elementsProps.isSelected_joie_avant)
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_tristesse_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedTristesseAvant(!elementsProps.isSelected_tristesse_avant)
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_frustration_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedFrustrationAvant(!elementsProps.isSelected_frustration_avant)
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={elementsProps.isSelected_dégoût_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedDégoûtAvant(!elementsProps.isSelected_dégoût_avant)
                    }
                  }
                    text="Dégoût"
                    size={24}
                /> 
                
            </View>

            <View style={{backgroundColor: "#ffffff", borderRadius: 10, padding:20, marginBottom:20 }}>

                <TextArea 
                placeholder='Contre-Pensée négative'
                description={elementsProps.contre_pensee_negative}
                onChangeDescription={elementsProps.setContrePenséNégativeText}
                onPress={() => console.log("TextInput Pressed")}
                icons={icons.pensee_negative}
                />

                <Text style={[styles.h1, {fontSize:22}]}>{tachometer} Après ma contre-pensée : </Text>

                
                <CustomCheckbox 
                  checked={elementsProps.isSelected_peur_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedPeurAprès(!elementsProps.isSelected_peur_après)
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_honte_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedHonteAprès(!elementsProps.isSelected_honte_après)
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_colère_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedColèreAprès(!elementsProps.isSelected_colère_après)
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_joie_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedJoieAprès(!elementsProps.isSelected_joie_après)
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_tristesse_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedTristesseAprès(!elementsProps.isSelected_tristesse_après)
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_frustration_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedFrustrationAprès(!elementsProps.isSelected_frustration_après)
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={elementsProps.isSelected_dégoût_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedDégoûtAprès(!elementsProps.isSelected_dégoût_après)
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