import { View, Text, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import styles from '@/app/styles';
import CustomCheckbox from './CustomCheckbox';
import { FontAwesome } from '@expo/vector-icons';
import PenseeProps from '@/app/Domaine/props/PenseeProps';
import { icons } from '@/constants/icons';
import TextArea from './TextArea';


const tachometer = <FontAwesome name="tachometer" size={24}/>

const Formulaire = ({pensee, position} : PenseeProps) => {
  //Déclaration de variables
    //Selection des émotions aux débuts, avant
const [isSelected_peur_avant, setIsSelected_peur_avant] = useState(pensee?.emotions_avant.find((e:string) => e == "Peur") != undefined);
const [isSelected_honte_avant, setIsSelected_honte_avant] = useState(pensee?.emotions_avant.find((e:string) => e == "Honte") != undefined);
const [isSelected_colère_avant, setIsSelected_colère_avant] = useState(pensee?.emotions_avant.find((e:string) => e == "Colère") != undefined);
const [isSelected_joie_avant, setIsSelected_joie_avant] = useState(pensee?.emotions_avant.find((e:string) => e == "Joie") != undefined);
const [isSelected_tristesse_avant, setIsSelected_tristesse_avant] = useState(pensee?.emotions_avant.find((e:string) => e == "Tristesse") != undefined);
const [isSelected_frustration_avant, setIsSelected_frustration_avant] = useState(pensee?.emotions_avant.find((e:string) => e == "Frustration") != undefined);
const [isSelected_dégoût_avant, setIsSelected_dégoût_avant] = useState(pensee?.emotions_avant.find((e:string) => e == "Dégoût") != undefined);
      
    
//Selection des émotions à la fin, après
const [isSelected_peur_après, setIsSelected_peur_après] = useState(pensee?.emotions_apres.find((e:string) => e == "Peur") != undefined);
const [isSelected_honte_après, setIsSelected_honte_après] = useState(pensee?.emotions_apres.find((e:string) => e == "Honte") != undefined);
const [isSelected_colère_après, setIsSelected_colère_après] = useState(pensee?.emotions_apres.find((e:string) => e == "Colère") != undefined);
const [isSelected_joie_après, setIsSelected_joie_après] = useState(pensee?.emotions_apres.find((e:string) => e == "Joie") != undefined);
const [isSelected_tristesse_après, setIsSelected_tristesse_après] = useState(pensee?.emotions_apres.find((e:string) => e == "Tristesse") != undefined); 
const [isSelected_frustration_après, setIsSelected_frustration_après] = useState(pensee?.emotions_apres.find((e:string) => e == "Frustration") != undefined);
const [isSelected_dégoût_après, setIsSelected_dégoût_après] = useState(pensee?.emotions_apres.find((e:string) => e == "Dégoût") != undefined);
      

//TextAreas of SectionPensee states
const [element_dec, setElement_dec] = useState(pensee?.element_declencheur); 
const [interprétation, setInterprétation] = useState(pensee?.interpretation); 
const [contre_pensee_negative, setContre_pensee_negative] = useState(pensee?.contre_pensee_negative);


//Checkbox of SectionPensee states en liste de string[]
const [listEmotions_avant, setListEmotions_avant] = useState(pensee?.emotions_avant);
const [listEmotions_apres, setListEmotions_apres] = useState(pensee?.emotions_apres);

    
  
  return (
    <View style={{marginBottom:10}}>
            <Text style={{marginBottom:10}}>
              <Text style={[styles.h1, {textDecorationLine:"underline"}]}>Penséé #{position} </Text>
              <Text style={styles.h1}>:</Text>
              <Text style={{fontSize:24, color:"rgba(255,255,255, 1.0)",}}> {pensee?.date.toTimeString().slice(0,9)}</Text>
            </Text>
            <View style={{backgroundColor: "#ffffff", borderRadius: 10, marginBottom:20, padding:20}}>

              <TextArea placeholder='Élément déclencheur' 
              description={element_dec ?? ""}
              onChangeDescription={ (text : string) => {
                setElement_dec(text);
                console.log(text);
                }
              }
              icons={icons.element_dec}/>

                <TextArea 
                placeholder='Pensée négative'
                description={interprétation ?? ""}
                onChangeDescription={ (text:string) => {
                  setInterprétation(text);
                  console.log(text);
                }
                  
                }
                
                icons={icons.pensee_negative}
                />


                <Text style={styles.h1}>{tachometer} Émotions </Text>

                <CustomCheckbox 
                  checked={isSelected_peur_avant} 
                  onPress={ () => { 
                      setIsSelected_peur_avant(!isSelected_peur_avant);
                      console.log("Peur avant => ", !isSelected_peur_avant);
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_honte_avant} 
                  onPress={ () => { 
                      setIsSelected_honte_avant(!isSelected_honte_avant);
                      console.log("Honte avant => ", !isSelected_honte_avant);
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_colère_avant} 
                  onPress={ () => { 
                      setIsSelected_colère_avant(!isSelected_colère_avant);
                      console.log("Colère avant => ", !isSelected_colère_avant);
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_joie_avant} 
                  onPress={ () => { 
                      setIsSelected_joie_avant(!isSelected_joie_avant);
                      console.log("Joie avant => ", !isSelected_joie_avant);
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_tristesse_avant} 
                  onPress={ () => { 
                      setIsSelected_tristesse_avant(!isSelected_tristesse_avant);
                      console.log("Tristesse avant => ", !isSelected_tristesse_avant);
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_frustration_avant} 
                  onPress={ () => { 
                      setIsSelected_frustration_avant(!isSelected_frustration_avant);
                      console.log("Frustration avant => ", !isSelected_frustration_avant);
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={isSelected_dégoût_avant} 
                  onPress={ () => { 
                      setIsSelected_dégoût_avant(!isSelected_dégoût_avant);
                      console.log("Dégoût avant => ", !isSelected_dégoût_avant);
                    }
                  }
                    text="Dégoût"
                    size={24}
                /> 
                
            </View>

            <View style={{backgroundColor: "#ffffff", borderRadius: 10, padding:20, marginBottom:20 }}>

                <TextArea 
                placeholder='Contre-Pensée négative'
                description={contre_pensee_negative ?? ""}
                onChangeDescription={ (text: string) => {
                  setContre_pensee_negative(text);
                    console.log(text);
                  }
                }
                icons={icons.pensee_negative}
                />

                <Text style={[styles.h1, {fontSize:22}]}>{tachometer} Après ma contre-pensée : </Text>

                
                <CustomCheckbox 
                  checked={isSelected_peur_après} 
                  onPress={ () => { 
                      setIsSelected_peur_après(!isSelected_peur_après);
                      console.log("Peur après => ", !isSelected_peur_après);
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_honte_après} 
                  onPress={ () => { 
                      setIsSelected_honte_après(!isSelected_honte_après);
                      console.log("Honte après => ", !isSelected_honte_après);
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_colère_après} 
                  onPress={ () => { 
                      setIsSelected_colère_après(!isSelected_colère_après);
                      console.log("Colère après => ", !isSelected_colère_après);
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_joie_après} 
                  onPress={ () => { 
                      setIsSelected_joie_après(!isSelected_joie_après);
                      console.log("Joie après => ", !isSelected_joie_après);
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_tristesse_après} 
                  onPress={ () => { 
                      setIsSelected_tristesse_après(!isSelected_tristesse_après);
                      console.log("Tristesse après => ", !isSelected_tristesse_après);
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_frustration_après} 
                  onPress={ () => { 
                      setIsSelected_frustration_après(!isSelected_frustration_après);
                      console.log("Frustration après => ", !isSelected_frustration_après);
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={isSelected_dégoût_après} 
                  onPress={ () => { 
                      setIsSelected_dégoût_après(!isSelected_dégoût_après);
                      console.log("Dégoût après => ", !isSelected_dégoût_après);
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