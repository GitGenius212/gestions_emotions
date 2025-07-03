import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from '@/app/styles';
import CustomCheckbox from './CustomCheckbox';
import { FontAwesome } from '@expo/vector-icons';
import PenseeProps from '@/app/Domaine/props/PenseeProps';
import { icons } from '@/constants/icons';
import TextArea from './TextArea';


const tachometer = <FontAwesome name="tachometer" size={24}/>

const Formulaire = ({pensee, elementsProps, position} : PenseeProps) => {
  //Functions
  
  return (
    <View style={{marginBottom:10}}>
            <Text style={{marginBottom:10}}>
              <Text style={[styles.h1, {textDecorationLine:"underline"}]}>Penséé #{position} </Text>
              <Text style={styles.h1}>:</Text>
              <Text style={{fontSize:24, color:"rgba(255,255,255, 1.0)",}}> {pensee?.date.toTimeString().slice(0,9)}</Text>
            </Text>
            <View style={{backgroundColor: "#ffffff", borderRadius: 10, marginBottom:20, padding:20}}>

              <TextArea placeholder='Élément déclencheur' 
              description={pensee?.element_declencheur ?? ""}
              onChangeDescription={ (text : string) => {
                console.log(text);
                }
              }
              icons={icons.element_dec}/>

                <TextArea 
                placeholder='Pensée négative'
                description={pensee?.interpretation ?? ""}
                onChangeDescription={ (text:string) => {
                  console.log(text);
                }
                  
                }
                
                icons={icons.pensee_negative}
                />


                <Text style={styles.h1}>{tachometer} Émotions </Text>

                <CustomCheckbox 
                  checked={elementsProps.isSelected_peur_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedPeurAvant(elementsProps.isSelected_peur_avant);
                      console.log("Peur avant => ", !elementsProps.isSelected_peur_avant);
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_honte_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedHonteAvant(!elementsProps.isSelected_honte_avant);
                      console.log("Honte avant => ", !elementsProps.isSelected_honte_avant);
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_colère_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedColèreAvant(!elementsProps.isSelected_colère_avant);
                      console.log("Colère avant => ", !elementsProps.isSelected_colère_avant);
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_joie_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedJoieAvant(!elementsProps.isSelected_joie_avant);
                      console.log("Joie avant => ", !elementsProps.isSelected_joie_avant);
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_tristesse_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedTristesseAvant(!elementsProps.isSelected_tristesse_avant);
                      console.log("Tristesse avant => ", !elementsProps.isSelected_tristesse_avant);
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_frustration_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedFrustrationAvant(!elementsProps.isSelected_frustration_avant);
                      console.log("Frustration avant => ", !elementsProps.isSelected_frustration_avant);
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={elementsProps.isSelected_dégoût_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedDégoûtAvant(!elementsProps.isSelected_dégoût_avant);
                      console.log("Dégoût avant => ", !elementsProps.isSelected_dégoût_avant);
                    }
                  }
                    text="Dégoût"
                    size={24}
                /> 
                
            </View>

            <View style={{backgroundColor: "#ffffff", borderRadius: 10, padding:20, marginBottom:20 }}>

                <TextArea 
                placeholder='Contre-Pensée négative'
                description={pensee?.contre_pensee_negative ?? ""}
                onChangeDescription={ (text: string) => {
                    console.log(text);
                  }
                }
                icons={icons.pensee_negative}
                />

                <Text style={[styles.h1, {fontSize:22}]}>{tachometer} Après ma contre-pensée : </Text>

                
                <CustomCheckbox 
                  checked={elementsProps.isSelected_peur_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedPeurAprès(!elementsProps.isSelected_peur_après);
                      console.log("Peur après => ", !elementsProps.isSelected_peur_après);
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_honte_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedHonteAprès(!elementsProps.isSelected_honte_après);
                      console.log("Honte après => ", !elementsProps.isSelected_honte_après);
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_colère_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedColèreAprès(!elementsProps.isSelected_colère_après);
                      console.log("Colère après => ", !elementsProps.isSelected_colère_après);
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_joie_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedJoieAprès(!elementsProps.isSelected_joie_après);
                      console.log("Joie après => ", !elementsProps.isSelected_joie_après);
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_tristesse_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedTristesseAprès(!elementsProps.isSelected_tristesse_après);
                      console.log("Tristesse après => ", !elementsProps.isSelected_tristesse_après);
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_frustration_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedFrustrationAprès(!elementsProps.isSelected_frustration_après);
                      console.log("Frustration après => ", !elementsProps.isSelected_frustration_après);
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={elementsProps.isSelected_dégoût_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedDégoûtAprès(!elementsProps.isSelected_dégoût_après);
                      console.log("Dégoût après => ", !elementsProps.isSelected_dégoût_après);
                    }
                  }
                    text="Dégoût"
                    size={24}
                /> 

            </View>

            <TouchableHighlight 
            onPress={() => console.log("Button 'Ajouter' pressed")}
            underlayColor='#912937'
            style={styles.button}>
              <View>
                <Text style={styles.button_text}>Ajouter</Text>
              </View>
            </TouchableHighlight>

        </View>
  )
}

export default Formulaire