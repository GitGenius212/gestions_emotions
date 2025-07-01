import { icons } from '@/constants/icons';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from '../styles';

import CustomCheckbox from "@/components/CustomCheckbox";
import TextArea from "@/components/TextArea";
import { updatePensee } from '../AccèsAuxDonnées/DataBidons/DataBidonPenseeData';
import PenseeDataOptions from '../Domaine/Classes/PenseeDataOptions';
import PenseeProps from '../Domaine/props/PenseeProps';



const tachometer = <FontAwesome name="tachometer" size={24}/>


const SectionPensees = ({pensee, elementsProps} : PenseeProps) => {

    const [listEmotions_avant, setListEmotions_avant] = useState(pensee?.emotions_avant);
    const [listEmotions_apres, setListEmotions_apres] = useState(pensee?.emotions_apres);

    const updateEmotionsAvant = (emotion:string, selected : boolean) => {
      //Déclaration de variables
      const newArrayEmotionsAvant  = [...(listEmotions_avant as string[])];
      //Traitements
      console.log("========================");
      console.log(emotion, "selected => ", selected);
      if(selected) {
        newArrayEmotionsAvant.push(emotion);
        setListEmotions_avant(newArrayEmotionsAvant);
        console.log(`New Array Emotion Avant  => ${newArrayEmotionsAvant}`);
        
      } else {
        newArrayEmotionsAvant.splice(newArrayEmotionsAvant.indexOf(emotion), 1);
        setListEmotions_avant(newArrayEmotionsAvant);
        console.log(`New Array Emotion Avant  => ${newArrayEmotionsAvant}`);
        
        }

    }

    const updateEmotionsAprès = (emotion:string, selected : boolean) => {
      //Déclaration de variables
      const newArrayEmotionsAprès  = [...(listEmotions_apres as string[] )];

      //Traitements
      console.log("========================");
      console.log(emotion, "selected => ", selected);
      if(selected) {
        newArrayEmotionsAprès.push(emotion);
        setListEmotions_apres(newArrayEmotionsAprès);
        console.log(`New Array Emotion Après  => ${newArrayEmotionsAprès}`);

      } else {
        newArrayEmotionsAprès.splice(newArrayEmotionsAprès.indexOf(emotion), 1);
        setListEmotions_apres(newArrayEmotionsAprès);
        console.log(`New Array Emotion Après  => ${newArrayEmotionsAprès}`);
        }

    }

    const putPensee = ({p_element_dec_text, p_interprétation_text, p_contre_pensee_negative_text,
      p_emotion_avant, p_emotion_apres} : {p_element_dec_text? : string, p_interprétation_text?: string, p_contre_pensee_negative_text?: string,
      p_emotion_avant?: string, p_emotion_apres?: string}
    ) => {
      //Déclaration des variables
      let penseeObject : PenseeDataOptions = {id: pensee?.id};

      //Traitements
      if(p_element_dec_text != undefined) {
        penseeObject.element_declencheur = p_element_dec_text;
        console.log("The élément décheur is changed to ", penseeObject);
        updatePensee(penseeObject);


      } else if (p_interprétation_text != undefined) {
          penseeObject.interpretation = p_interprétation_text;
          console.log("The interprétation is changed to ", penseeObject);
          updatePensee(penseeObject);

        } else if (p_contre_pensee_negative_text != undefined) {
          penseeObject.contre_pensee_negative = p_contre_pensee_negative_text;
          console.log("The contre-pensée négative is changed to ", penseeObject);
          updatePensee(penseeObject);

        } else if (p_emotion_avant != undefined) {
          console.log("The emotion avant selected to update is ", p_emotion_avant); 
          console.log("The listEmotions_avant is ", listEmotions_avant);

        } else if (p_emotion_apres != undefined) {
          console.log("The emotion après selected to update is ", p_emotion_apres);
          console.log("The listEmotions_après is ", listEmotions_apres);
        }

        
      
    }
      

  return (
    <View style={{flex: 1, backgroundColor:"#94DDBC", padding:15}}>


            <Text style={{marginBottom:10}}>
              <Text style={[styles.h1, {textDecorationLine:"underline"}]}>Penséé #1 </Text>
              <Text style={styles.h1}>:</Text>
              <Text style={{fontSize:24, color:"rgba(255,255,255, 1.0)",}}> {pensee?.date.toTimeString().slice(0,9)}</Text>
            </Text>
            <View style={{backgroundColor: "#ffffff", borderRadius: 10, marginBottom:20, padding:20}}>

              <TextArea placeholder='Élément déclencheur' 
              description={elementsProps.element_dec}
              onChangeDescription={ (text : string) => {
                putPensee({p_element_dec_text: text});
                elementsProps.setElementDéclencheurText(text);
                }
              }
              icons={icons.element_dec}/>

                <TextArea 
                placeholder='Pensée négative'
                description={elementsProps.interprétation}
                onChangeDescription={ (text:string) => {
                  putPensee({p_interprétation_text: text});
                  elementsProps.setInterpretationText(text);
                }
                  
                }
                
                icons={icons.pensee_negative}
                />


                <Text style={styles.h1}>{tachometer} Émotions </Text>

                <CustomCheckbox 
                  checked={elementsProps.isSelected_peur_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedPeurAvant(!elementsProps.isSelected_peur_avant);
                      updateEmotionsAvant("Peur", !elementsProps.isSelected_peur_avant);
                      putPensee({p_emotion_avant: "Peur"});
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_honte_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedHonteAvant(!elementsProps.isSelected_honte_avant);
                      updateEmotionsAvant("Honte", !elementsProps.isSelected_honte_avant);
                      putPensee({p_emotion_avant: "Honte"});
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_colère_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedColèreAvant(!elementsProps.isSelected_colère_avant);
                      updateEmotionsAvant("Colère", !elementsProps.isSelected_colère_avant);
                      putPensee({p_emotion_avant: "Colère"});
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_joie_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedJoieAvant(!elementsProps.isSelected_joie_avant);
                      updateEmotionsAvant("Joie", !elementsProps.isSelected_joie_avant);
                      putPensee({p_emotion_avant: "Joie"});
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_tristesse_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedTristesseAvant(!elementsProps.isSelected_tristesse_avant);
                      updateEmotionsAvant("Tristesse", !elementsProps.isSelected_tristesse_avant);
                      putPensee({p_emotion_avant: "Tristesse"});
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_frustration_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedFrustrationAvant(!elementsProps.isSelected_frustration_avant);
                      updateEmotionsAvant("Frustration", !elementsProps.isSelected_frustration_avant);
                      putPensee({p_emotion_avant: "Frustration"});
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={elementsProps.isSelected_dégoût_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedDégoûtAvant(!elementsProps.isSelected_dégoût_avant);
                      updateEmotionsAvant("Dégoût", !elementsProps.isSelected_dégoût_avant);
                      putPensee({p_emotion_avant: "Dégoût"});
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
                onChangeDescription={ (text: string) => {
                    putPensee({p_contre_pensee_negative_text: text});
                    elementsProps.setContrePenséNégativeText(text);
                  }
                }
                icons={icons.pensee_negative}
                />

                <Text style={[styles.h1, {fontSize:22}]}>{tachometer} Après ma contre-pensée : </Text>

                
                <CustomCheckbox 
                  checked={elementsProps.isSelected_peur_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedPeurAprès(!elementsProps.isSelected_peur_après);
                      updateEmotionsAprès("Peur", !elementsProps.isSelected_peur_après);
                      putPensee({p_emotion_apres: "Peur"});
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_honte_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedHonteAprès(!elementsProps.isSelected_honte_après);
                      updateEmotionsAprès("Honte", !elementsProps.isSelected_honte_après);
                      putPensee({p_emotion_apres: "Honte"});
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_colère_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedColèreAprès(!elementsProps.isSelected_colère_après);
                      updateEmotionsAprès("Colère", !elementsProps.isSelected_colère_après);
                      putPensee({p_emotion_apres: "Colère"});
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_joie_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedJoieAprès(!elementsProps.isSelected_joie_après);
                      updateEmotionsAprès("Joie", !elementsProps.isSelected_joie_après);
                      putPensee({p_emotion_apres: "Joie"});
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_tristesse_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedTristesseAprès(!elementsProps.isSelected_tristesse_après);
                      updateEmotionsAprès("Tristesse", !elementsProps.isSelected_tristesse_après);
                      putPensee({p_emotion_apres: "Tristesse"});
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_frustration_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedFrustrationAprès(!elementsProps.isSelected_frustration_après);
                      updateEmotionsAprès("Frustration", !elementsProps.isSelected_frustration_après);
                      putPensee({p_emotion_apres: "Frustration"});
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={elementsProps.isSelected_dégoût_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedDégoûtAprès(!elementsProps.isSelected_dégoût_après);
                      updateEmotionsAprès("Dégoût", !elementsProps.isSelected_dégoût_après);
                      putPensee({p_emotion_apres: "Dégoût"});
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