import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from '@/app/styles';
import CustomCheckbox from './CustomCheckbox';
import { FontAwesome } from '@expo/vector-icons';
import PenseeProps from '@/app/Domaine/props/PenseeProps';
import { icons } from '@/constants/icons';
import TextArea from './TextArea';
import { updatePensee } from '@/app/AccèsAuxDonnées/DataBidons/DataBidonPenseeData';
import PenseeDataOptions from '@/app/Domaine/Classes/PenseeDataOptions';


const tachometer = <FontAwesome name="tachometer" size={24}/>

const Formulaire = ({pensee, elementsProps} : PenseeProps) => {
  //Functions
  const updateEmotionsAvant = (emotion:string, selected : boolean) : string[] => {
      //Déclaration de variables
      const newArrayEmotionsAvant  = elementsProps.listEmotions_avant ? elementsProps.listEmotions_avant.slice() : [];
      //Traitements
      if(selected) {
        newArrayEmotionsAvant.push(emotion);
        elementsProps.setArrayEmotionAvant(newArrayEmotionsAvant);
      } else {  
        const index = newArrayEmotionsAvant.indexOf(emotion);    
        newArrayEmotionsAvant.splice(index, 1);
        elementsProps.setArrayEmotionAvant(newArrayEmotionsAvant);
      }

        return newArrayEmotionsAvant;

    }

    const updateEmotionsAprès = (emotion:string, selected : boolean) : string[] => {
      //Déclaration de variables
      const newArrayEmotionsAprès  = elementsProps.listEmotions_apres ? elementsProps.listEmotions_apres.slice() : [];

      //Traitements
      if(selected) {
        newArrayEmotionsAprès.push(emotion);
        elementsProps.setArrayEmotionAprès(newArrayEmotionsAprès);
      } else {  
        const index = newArrayEmotionsAprès.indexOf(emotion);     
        newArrayEmotionsAprès.splice(index, 1);
        elementsProps.setArrayEmotionAprès(newArrayEmotionsAprès);
      }

        return newArrayEmotionsAprès;

    }

    const putPensee = ({p_element_dec_text, p_interprétation_text, p_contre_pensee_negative_text,
      p_emotion_avant, p_Isselected_emotion_avant, p_emotion_apres, p_Isselected_emotion_après} : {p_element_dec_text? : string, p_interprétation_text?: string, p_contre_pensee_negative_text?: string,
      p_emotion_avant?: string, p_Isselected_emotion_avant?: boolean, p_Isselected_emotion_après?:boolean, p_emotion_apres?: string}
    ) => {
      //Déclaration des variables
      let penseeObject : PenseeDataOptions = {id: pensee?.id};

      //Traitements
      if(p_element_dec_text != undefined) {
        penseeObject.element_declencheur = p_element_dec_text;


      } else if (p_interprétation_text != undefined) {
          penseeObject.interpretation = p_interprétation_text;
          

        } else if (p_contre_pensee_negative_text != undefined) {
          penseeObject.contre_pensee_negative = p_contre_pensee_negative_text;
          

        } else if (p_emotion_avant != undefined && p_Isselected_emotion_avant != undefined) {
          const arrayObtainedAvant = updateEmotionsAvant(p_emotion_avant, p_Isselected_emotion_avant);
          penseeObject.emotions_avant = arrayObtainedAvant;

        } else if (p_emotion_apres != undefined && p_Isselected_emotion_après != undefined) {
          const arrayObtainedAprès = updateEmotionsAprès(p_emotion_apres, p_Isselected_emotion_après);
          penseeObject.emotions_apres = arrayObtainedAprès;
          
        }

        updatePensee(penseeObject);
      
    }
  return (
    <View style={{marginBottom:10}}>
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
                      putPensee({p_emotion_avant: "Peur", p_Isselected_emotion_avant: !elementsProps.isSelected_peur_avant});
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_honte_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedHonteAvant(!elementsProps.isSelected_honte_avant);
                      putPensee({p_emotion_avant: "Honte", p_Isselected_emotion_avant: !elementsProps.isSelected_honte_avant});
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_colère_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedColèreAvant(!elementsProps.isSelected_colère_avant);
                      putPensee({p_emotion_avant: "Colère", p_Isselected_emotion_avant: !elementsProps.isSelected_colère_avant});
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_joie_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedJoieAvant(!elementsProps.isSelected_joie_avant);
                      putPensee({p_emotion_avant: "Joie", p_Isselected_emotion_avant: !elementsProps.isSelected_joie_avant});
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_tristesse_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedTristesseAvant(!elementsProps.isSelected_tristesse_avant);
                      putPensee({p_emotion_avant: "Tristesse", p_Isselected_emotion_avant: !elementsProps.isSelected_tristesse_avant});
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_frustration_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedFrustrationAvant(!elementsProps.isSelected_frustration_avant);
                      putPensee({p_emotion_avant: "Frustration", p_Isselected_emotion_avant: !elementsProps.isSelected_frustration_avant});
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={elementsProps.isSelected_dégoût_avant} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedDégoûtAvant(!elementsProps.isSelected_dégoût_avant);
                      putPensee({p_emotion_avant: "Dégoût", p_Isselected_emotion_avant: !elementsProps.isSelected_dégoût_avant});
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
                      putPensee({p_emotion_apres: "Peur", p_Isselected_emotion_après: !elementsProps.isSelected_peur_après});
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_honte_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedHonteAprès(!elementsProps.isSelected_honte_après);
                      putPensee({p_emotion_apres: "Honte", p_Isselected_emotion_après: !elementsProps.isSelected_honte_après});
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_colère_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedColèreAprès(!elementsProps.isSelected_colère_après);
                      putPensee({p_emotion_apres: "Colère", p_Isselected_emotion_après: !elementsProps.isSelected_colère_après});
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_joie_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedJoieAprès(!elementsProps.isSelected_joie_après);
                      putPensee({p_emotion_apres: "Joie", p_Isselected_emotion_après: !elementsProps.isSelected_joie_après});
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_tristesse_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedTristesseAprès(!elementsProps.isSelected_tristesse_après);
                      putPensee({p_emotion_apres: "Tristesse", p_Isselected_emotion_après: !elementsProps.isSelected_tristesse_après});
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={elementsProps.isSelected_frustration_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedFrustrationAprès(!elementsProps.isSelected_frustration_après);
                      putPensee({p_emotion_apres: "Frustration", p_Isselected_emotion_après: !elementsProps.isSelected_frustration_après});
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={elementsProps.isSelected_dégoût_après} 
                  onPress={ () => { 
                      elementsProps.setIsSelectedDégoûtAprès(!elementsProps.isSelected_dégoût_après);
                      putPensee({p_emotion_apres: "Dégoût", p_Isselected_emotion_après: !elementsProps.isSelected_dégoût_après});
                    }
                  }
                    text="Dégoût"
                    size={24}
                /> 

            </View>

            <TouchableHighlight 
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