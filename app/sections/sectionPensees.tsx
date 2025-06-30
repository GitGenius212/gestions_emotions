import { icons } from '@/constants/icons';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from '../styles';

import CustomCheckbox from "@/components/CustomCheckbox";
import TextArea from "@/components/TextArea";
import { PenseeProps } from '../Domaine/props/PenseeProps';



const tachometer = <FontAwesome name="tachometer" size={24}/>


const SectionPensees = ({pensee, selectedEmotions} : PenseeProps) => {


    

      

  return (
    <View style={{flex: 1, backgroundColor:"#94DDBC", padding:15}}>


            <Text style={[styles.h1, {textDecorationLine:"underline"}]}>Penséé #1</Text>
            <View style={{backgroundColor: "#ffffff", borderRadius: 10, marginBottom:20, padding:20}}>

              <TextArea placeholder='Élément déclencheur' 
              description={pensee?.element_declencheur ?? ''}
              onChangeDescription=''
              onPress={() => console.log("TextInput Pressed")}
                icons={icons.element_dec}/>

                <TextArea 
                placeholder='Pensée négative'
                description={pensee?.interpretation ?? ''}
                onChangeDescription=''
                onPress={() => console.log("TextInput Pressed")}
                icons={icons.pensee_negative}
                />


                <Text style={styles.h1}>{tachometer} Émotions </Text>

                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_peur_avant} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedPeurAvant(!selectedEmotions.isSelected_peur_avant)
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_honte_avant} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedHonteAvant(!selectedEmotions.isSelected_honte_avant)
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_colère_avant} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedColèreAvant(!selectedEmotions.isSelected_colère_avant)
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_joie_avant} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedJoieAvant(!selectedEmotions.isSelected_joie_avant)
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_tristesse_avant} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedTristesseAvant(!selectedEmotions.isSelected_tristesse_avant)
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_frustration_avant} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedFrustrationAvant(!selectedEmotions.isSelected_frustration_avant)
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_dégoût_avant} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedDégoûtAvant(!selectedEmotions.isSelected_dégoût_avant)
                    }
                  }
                    text="Dégoût"
                    size={24}
                /> 
                
            </View>

            <View style={{backgroundColor: "#ffffff", borderRadius: 10, padding:20, marginBottom:20 }}>

                <TextArea 
                placeholder='Contre-Pensée négative'
                description={pensee?.contre_pensee_negative ?? ''}
                onChangeDescription=''
                onPress={() => console.log("TextInput Pressed")}
                icons={icons.pensee_negative}
                />

                <Text style={[styles.h1, {fontSize:22}]}>{tachometer} Après ma contre-pensée : </Text>

                
                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_peur_après} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedPeurAprès(!selectedEmotions.isSelected_peur_après)
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_honte_après} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedHonteAprès(!selectedEmotions.isSelected_honte_après)
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_colère_après} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedColèreAprès(!selectedEmotions.isSelected_colère_après)
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_joie_après} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedJoieAprès(!selectedEmotions.isSelected_joie_après)
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_tristesse_après} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedTristesseAprès(!selectedEmotions.isSelected_tristesse_après)
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_frustration_après} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedFrustrationAprès(!selectedEmotions.isSelected_frustration_après)
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={selectedEmotions.isSelected_dégoût_après} 
                  onPress={ () => { 
                      selectedEmotions.setIsSelectedDégoûtAprès(!selectedEmotions.isSelected_dégoût_après)
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