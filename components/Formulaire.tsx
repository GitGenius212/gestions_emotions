import { addPensee, deletePenseeById, getPenseeWithSameDate, updatePensee } from '@/app/AccèsAuxDonnées/DataBidons/DataBidonPenseeData';
import PenseeDataOptions from '@/app/Domaine/Classes/PenseeDataOptions';
import PenseeProps from '@/app/Domaine/props/PenseeProps';
import styles from '@/app/styles';
import { icons } from '@/constants/icons';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import CustomCheckbox from './CustomCheckbox';
import TextArea from './TextArea';
import PenseeData from '@/app/Domaine/Classes/PenseeData';


const tachometer = <FontAwesome name="tachometer" size={24}/>

const Formulaire = ({pensee, position, getPensees} : PenseeProps) => {

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


//Functions
  const updateEmotionsAvant = (emotion:string, selected : boolean) : string[] => {
      //Déclaration de variables
      const newArrayEmotionsAvant  = listEmotions_avant ? listEmotions_avant.slice() : [];
      //Traitements
      if(selected) {
        newArrayEmotionsAvant.push(emotion);
        setListEmotions_avant(newArrayEmotionsAvant);
      } else {  
        const index = newArrayEmotionsAvant.indexOf(emotion);    
        newArrayEmotionsAvant.splice(index, 1);
        setListEmotions_avant(newArrayEmotionsAvant);
      }

        return newArrayEmotionsAvant;

    }

    const updateEmotionsAprès = (emotion:string, selected : boolean) : string[] => {
      //Déclaration de variables
      const newArrayEmotionsAprès  = listEmotions_apres ? listEmotions_apres.slice() : [];

      //Traitements
      if(selected) {
        newArrayEmotionsAprès.push(emotion);
        setListEmotions_apres(newArrayEmotionsAprès);
      } else {  
        const index = newArrayEmotionsAprès.indexOf(emotion);     
        newArrayEmotionsAprès.splice(index, 1);
        setListEmotions_apres(newArrayEmotionsAprès);
      }

        return newArrayEmotionsAprès;

    }

    const putPensee = ({p_element_dec_text, p_interprétation_text, p_contre_pensee_negative_text,
      p_emotion_avant, p_Isselected_emotion_avant, p_emotion_apres, p_Isselected_emotion_après} : {p_element_dec_text? : string, p_interprétation_text?: string, p_contre_pensee_negative_text?: string,
      p_emotion_avant?: string, p_Isselected_emotion_avant?: boolean, p_Isselected_emotion_après?:boolean, p_emotion_apres?: string}
    ) => {
      //Déclaration des variables
      const currentDate = pensee?.date;
      const isToday = currentDate?.toISOString().split('T')[0] == new Date().toISOString().split('T')[0];

      
      let penseeObject : PenseeDataOptions = (isToday && currentDate.toTimeString().slice(0,9) != "20:00:00") ? {id: pensee?.id} : {id: pensee?.id, date:new Date()};

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
              <Text style={[styles.h1, {textDecorationLine:"underline"}]}>Penséé #{position} </Text>
              <Text style={styles.h1}>:</Text>
              <Text style={{fontSize:24, color:"rgba(255,255,255, 1.0)",}}> {pensee?.date.toTimeString().slice(0,9)}</Text>
            </Text>
            <View style={{backgroundColor: "#ffffff", borderRadius: 10, marginBottom:20, padding:20}}>

              <TextArea placeholder='Élément déclencheur' 
              description={element_dec ?? ""}
              onChangeDescription={ (text : string) => {
                putPensee({p_element_dec_text: text});
                setElement_dec(text);
                
                }
              }
              icons={icons.element_dec}/>

                <TextArea 
                placeholder='Pensée négative'
                description={interprétation ?? ""}
                onChangeDescription={ (text:string) => {
                  putPensee({p_interprétation_text: text});
                  setInterprétation(text);
                  
                }
                  
                }
                
                icons={icons.pensee_negative}
                />


                <Text style={styles.h1}>{tachometer} Émotions </Text>

                <CustomCheckbox 
                  checked={isSelected_peur_avant} 
                  onPress={ () => { 
                      setIsSelected_peur_avant(!isSelected_peur_avant);
                      putPensee({p_emotion_avant: "Peur", p_Isselected_emotion_avant: !isSelected_peur_avant});
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_honte_avant} 
                  onPress={ () => { 
                      setIsSelected_honte_avant(!isSelected_honte_avant);
                      putPensee({p_emotion_avant: "Honte", p_Isselected_emotion_avant: !isSelected_honte_avant});
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_colère_avant} 
                  onPress={ () => { 
                      setIsSelected_colère_avant(!isSelected_colère_avant);
                      putPensee({p_emotion_avant: "Colère", p_Isselected_emotion_avant: !isSelected_colère_avant});
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_joie_avant} 
                  onPress={ () => { 
                      setIsSelected_joie_avant(!isSelected_joie_avant);
                      putPensee({p_emotion_avant: "Joie", p_Isselected_emotion_avant: !isSelected_joie_avant});
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_tristesse_avant} 
                  onPress={ () => { 
                      setIsSelected_tristesse_avant(!isSelected_tristesse_avant);
                      putPensee({p_emotion_avant: "Tristesse", p_Isselected_emotion_avant: !isSelected_tristesse_avant});
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_frustration_avant} 
                  onPress={ () => { 
                      setIsSelected_frustration_avant(!isSelected_frustration_avant);
                      putPensee({p_emotion_avant: "Frustration", p_Isselected_emotion_avant: !isSelected_frustration_avant});
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={isSelected_dégoût_avant} 
                  onPress={ () => { 
                      setIsSelected_dégoût_avant(!isSelected_dégoût_avant);
                      putPensee({p_emotion_avant: "Dégoût", p_Isselected_emotion_avant: !isSelected_dégoût_avant});
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
                  putPensee({p_contre_pensee_negative_text: text});
                  setContre_pensee_negative(text);
            
                  }
                }
                icons={icons.pensee_negative}
                />

                <Text style={[styles.h1, {fontSize:22}]}>{tachometer} Après ma contre-pensée : </Text>

                
                <CustomCheckbox 
                  checked={isSelected_peur_après} 
                  onPress={ () => { 
                      setIsSelected_peur_après(!isSelected_peur_après);
                      putPensee({p_emotion_apres: "Peur", p_Isselected_emotion_après: !isSelected_peur_après});
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_honte_après} 
                  onPress={ () => { 
                      setIsSelected_honte_après(!isSelected_honte_après);
                      putPensee({p_emotion_apres: "Honte", p_Isselected_emotion_après: !isSelected_honte_après});
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_colère_après} 
                  onPress={ () => { 
                      setIsSelected_colère_après(!isSelected_colère_après);
                      putPensee({p_emotion_apres: "Colère", p_Isselected_emotion_après: !isSelected_colère_après});
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_joie_après} 
                  onPress={ () => { 
                      setIsSelected_joie_après(!isSelected_joie_après);
                      putPensee({p_emotion_apres: "Joie", p_Isselected_emotion_après: !isSelected_joie_après});
                    
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_tristesse_après} 
                  onPress={ () => { 
                      setIsSelected_tristesse_après(!isSelected_tristesse_après);
                      putPensee({p_emotion_apres: "Tristesse", p_Isselected_emotion_après: !isSelected_tristesse_après});
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected_frustration_après} 
                  onPress={ () => { 
                      setIsSelected_frustration_après(!isSelected_frustration_après);
                      putPensee({p_emotion_apres: "Frustration", p_Isselected_emotion_après: !isSelected_frustration_après});
                    }
                  }
                    text="Frustration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={isSelected_dégoût_après} 
                  onPress={ () => { 
                      setIsSelected_dégoût_après(!isSelected_dégoût_après);
                      putPensee({p_emotion_apres: "Dégoût", p_Isselected_emotion_après: !isSelected_dégoût_après});
                    }
                  }
                    text="Dégoût"
                    size={24}
                /> 

            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <TouchableHighlight 
                onPress={() => {
                    const currentDate = pensee?.date;
                    const isToday = currentDate?.toISOString().split('T')[0] == new Date().toISOString().split('T')[0];
                
                
                    //Créer un nouvel objet avec la même date
                    const new_pensee : PenseeData = {
                      id : 0, 
                      element_declencheur : "", 
                      interpretation: "", 
                      date: isToday ? new Date() : new Date(currentDate?.toISOString().split('T')[0] ?? new Date()), 
                      emotions_avant: [], 
                      contre_pensee_negative : "", 
                      emotions_apres : [],
                    };

                    //Ajouter la pensee dans la base de données
                    addPensee(new_pensee);

                    //GetPenseesWithSameDate
                    const updated_list_pensees_same_date = getPenseeWithSameDate(currentDate ?? new Date());
                    
                    //Mettre à jour la liste des pensées contenant la même date
                    if(getPensees != undefined) {
                      getPensees(updated_list_pensees_same_date);
                    }

                  }
                }
                underlayColor='#912937'
                style={styles.button}>
                  <View>
                    <Text style={styles.button_text}>Ajouter</Text>
                  </View>
            </TouchableHighlight>

            <TouchableHighlight 
                onPress={() => {
                    //Déclaration de variables
                    const currentDate = pensee?.date;
                    const currentId = pensee?.id ?? 0;

                    //Supprimer la pensee dans la base de données
                    deletePenseeById(currentId);

                    //GetPenseesWithSameDate
                    const updated_list_pensees_same_date = getPenseeWithSameDate(currentDate ?? new Date());
                    
                    //Mettre à jour la liste des pensées contenant la même date
                    if(getPensees != undefined) {
                      getPensees(updated_list_pensees_same_date);
                    }
                    
                  }
                }
                underlayColor='#912937'
                style={[styles.button_delete_pensee, {
                  display: (position == 1) ? 'none' : 'flex'
                }]}>
                  <View>
                    <Text style={styles.button_text}>Supprimer</Text>
                  </View>
            </TouchableHighlight>

            </View>



        </View>
  )
}

export default Formulaire