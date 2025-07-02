import React, { useState } from 'react';
import { LogBox, ScrollView } from "react-native";


//Sections
import { getPenseeByDate } from './AccèsAuxDonnées/DataBidons/DataBidonPenseeData';
import PenseeData from './Domaine/Classes/PenseeData';
import SectionDate from "./sections/sectionDate";
import SectionPensees from "./sections/sectionPensees";
import SectionSolutions from "./sections/sectionSolutions";



export default function Index() {
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, []);

//Déclaration de variables==========================================================================
const [pensee, setPensee] = useState(getPenseeByDate(new Date()));
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


//Functions====================================================================================================

//SetTextAreas of SectionPensee
function setElementDéclencheurText(p_element_dec: string) {
  setElement_dec(p_element_dec);
}

function setInterpretationText(p_interprétation: string) {
  setInterprétation(p_interprétation);  
}

function setContrePenséNégativeText(p_contre_pensee_negative: string) {
  setContre_pensee_negative(p_contre_pensee_negative);
}

//Checkbox of SectionPensee
function setArrayEmotionAvant(newArrayEmotionsAvant: string[]) {
  setListEmotions_avant(newArrayEmotionsAvant);   
}

function setArrayEmotionAprès(newArrayEmotionsAprès: string[]) {
  setListEmotions_apres(newArrayEmotionsAprès);   
}


//Mise à jour des états des émotions d'avant la contre-pensée négative
function setIsSelectedPeurAvant(p_bool: boolean) {
  setIsSelected_peur_avant(p_bool);
}

function setIsSelectedHonteAvant(p_bool: boolean) {
  setIsSelected_honte_avant(p_bool);
}

function setIsSelectedColèreAvant(p_bool: boolean) {
  setIsSelected_colère_avant(p_bool);
}

function setIsSelectedJoieAvant(p_bool: boolean) {
  setIsSelected_joie_avant(p_bool);
}

function setIsSelectedTristesseAvant(p_bool: boolean) {
  setIsSelected_tristesse_avant(p_bool);
}

function setIsSelectedFrustrationAvant(p_bool: boolean) {
  setIsSelected_frustration_avant(p_bool);
}

function setIsSelectedDégoûtAvant(p_bool: boolean) {
  setIsSelected_dégoût_avant(p_bool);
}

//Mise à jour des états des émotions d'après la contre-pensée négative
function setIsSelectedPeurAprès(p_bool: boolean) {
  setIsSelected_peur_après(p_bool);
}

function setIsSelectedHonteAprès(p_bool: boolean) {
  setIsSelected_honte_après(p_bool);
}

function setIsSelectedColèreAprès(p_bool: boolean) {
  setIsSelected_colère_après(p_bool);
}

function setIsSelectedJoieAprès(p_bool: boolean) {
  setIsSelected_joie_après(p_bool);
}

function setIsSelectedTristesseAprès(p_bool: boolean) {
  setIsSelected_tristesse_après(p_bool);
}

function setIsSelectedFrustrationAprès(p_bool: boolean) {
  setIsSelected_frustration_après(p_bool);
}

function setIsSelectedDégoûtAprès(p_bool: boolean) {
  setIsSelected_dégoût_après(p_bool);
}


//Obtenir la pensée par date
function getPensee(penseeFoundByDate: PenseeData) {
  setPensee(penseeFoundByDate);  //On met à jour l'objet penséee dans le formulaire
  setEmotions(penseeFoundByDate); //On met à l'état des émotions avant ou après

  //On met à jour les TextAreas du formulaire
  setElement_dec(penseeFoundByDate.element_declencheur);
  setInterprétation(penseeFoundByDate.interpretation);
  setContre_pensee_negative(penseeFoundByDate.contre_pensee_negative);

  //On met à jour les listes des émotions avant et après à ajouter ou à supprimer
  setListEmotions_apres(penseeFoundByDate.emotions_apres);
  setListEmotions_avant(penseeFoundByDate.emotions_avant);
}

//On met à jour les états des émotions avant et après
function setEmotions(penseeFoundByDate : PenseeData) {
  
    //Émotions avant
    getEmotionsAvant(penseeFoundByDate);
    //Émotions après
    getEmotionsAprès(penseeFoundByDate);
        
      
}

//On met à jour les états des émotions avant en boolean
function getEmotionsAvant(penseeFoundByDate : PenseeData) {
  if(penseeFoundByDate.emotions_avant.includes("Peur")) {
        setIsSelected_peur_avant(true);
    } else {
        setIsSelected_peur_avant(false);
      }

    if (penseeFoundByDate.emotions_avant.includes("Honte")) {
        setIsSelected_honte_avant(true);
    } else {
        setIsSelected_honte_avant(false);
      }

    if (penseeFoundByDate.emotions_avant.includes("Colère")) {
        setIsSelected_colère_avant(true);
    } else {
        setIsSelected_colère_avant(false);
      }

    if(penseeFoundByDate.emotions_avant.includes("Joie")) {
        setIsSelected_joie_avant(true);
    } else {
        setIsSelected_joie_avant(false);
      }

    if (penseeFoundByDate.emotions_avant.includes("Tristesse")) {
        setIsSelected_tristesse_avant(true);
    } else {
        setIsSelected_tristesse_avant(false);
      }

    if (penseeFoundByDate.emotions_avant.includes("Frustration")) {
      setIsSelected_frustration_avant(true);
    } else {
        setIsSelected_frustration_avant(false);
      }

    if (penseeFoundByDate.emotions_avant.includes("Dégoût")) {
        setIsSelected_dégoût_avant(true);
    } else {
        setIsSelected_dégoût_avant(false);
      }

}

//On met à jour les états des émotions après en boolean
function getEmotionsAprès(penseeFoundByDate : PenseeData) {
  if(penseeFoundByDate.emotions_apres.includes("Peur")) {
      setIsSelected_peur_après(true);
    } else {
        setIsSelected_peur_après(false);
      }

    if (penseeFoundByDate.emotions_apres.includes("Honte")) {
        setIsSelected_honte_après(true);
    } else {
        setIsSelected_honte_après(false);
      }

    if (penseeFoundByDate.emotions_apres.includes("Colère")) {
        setIsSelected_colère_après(true);
    } else {
        setIsSelected_colère_après(false);
        }

    if(penseeFoundByDate.emotions_apres.includes("Joie")) {
        setIsSelected_joie_après(true);
    } else {
        setIsSelected_joie_après(false);
    }

    if (penseeFoundByDate.emotions_apres.includes("Tristesse")) {
          setIsSelected_tristesse_après(true);
    } else {
          setIsSelected_tristesse_après(false);
        }
    if (penseeFoundByDate.emotions_apres.includes("Frustration")) {
        setIsSelected_frustration_après(true);
    } else {
        setIsSelected_frustration_après(false);
      }
    if (penseeFoundByDate.emotions_apres.includes("Dégoût")) {
        setIsSelected_dégoût_après(true);
    } else {
        setIsSelected_dégoût_après(false);
      }
}


  return (
    <ScrollView 
    keyboardShouldPersistTaps='always'
    style={{flex:1, backgroundColor:'white'}} showsVerticalScrollIndicator={false}>


      {/*Section de la date*/}
      <SectionDate 
      getPensee={getPensee}
      />

      {/*Section des pensées*/}
      <SectionPensees 
      pensee={pensee}
      elementsProps= {{
          isSelected_peur_avant,  
          isSelected_honte_avant,
          isSelected_colère_avant,
          isSelected_joie_avant,
          isSelected_tristesse_avant,
          isSelected_frustration_avant,
          isSelected_dégoût_avant,
          isSelected_peur_après,
          isSelected_honte_après,
          isSelected_colère_après,
          isSelected_joie_après,
          isSelected_tristesse_après,
          isSelected_frustration_après,
          isSelected_dégoût_après,
          element_dec, 
          interprétation,
          contre_pensee_negative,
          listEmotions_apres, 
          listEmotions_avant,
          setArrayEmotionAvant, 
          setArrayEmotionAprès,
          setIsSelectedPeurAvant,
          setIsSelectedHonteAvant,
          setIsSelectedColèreAvant,
          setIsSelectedJoieAvant,
          setIsSelectedTristesseAvant,
          setIsSelectedFrustrationAvant,
          setIsSelectedDégoûtAvant,
          setIsSelectedPeurAprès,
          setIsSelectedHonteAprès,
          setIsSelectedColèreAprès,
          setIsSelectedJoieAprès,
          setIsSelectedTristesseAprès,
          setIsSelectedFrustrationAprès,
          setIsSelectedDégoûtAprès, 
          setElementDéclencheurText,
          setInterpretationText,
          setContrePenséNégativeText

        
      }}
      />

      {/*Section des solutions*/}
      <SectionSolutions />


    </ScrollView>
  );
}
