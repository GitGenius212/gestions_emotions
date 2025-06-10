import TextArea from "@/components/TextArea";
import { icons } from '@/constants/icons';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, LogBox, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

import CustomCheckbox from "@/components/CustomCheckbox";
import styles from "./styles";




const compass = <FontAwesome name="compass" size={24}/>
const tachometer = <FontAwesome name="tachometer" size={24}/>




type SolutionData = { 
  id: number;
  description: string;
};

const DATA: SolutionData[] = [
  {
    id: 1,
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
  },
  {
    id: 2,
    description: "Note tes pensées négatives et les émotions qu'elles suscitent.",
  },
  {
    id: 3,
    description: 'Identifie les émotions que tu ressens.',
  },
    {
    id: 4,
    description: 'Écris une contre-pensée pour chaque pensée négative. essens.',
  }, 
  
];



type SolutionProps = {
  item: SolutionData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  removeItem : (id:number) => void;
};


const Solution = ({item, onPress, backgroundColor, textColor, removeItem}: SolutionProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.solution_list, {backgroundColor}]}>
    <Text style={[styles.description_solution, {color: textColor}]}>{item.description}</Text>
    <Text onPress={() =>  removeItem(item.id)} style={[{ color: 'red' }, styles.close_button]}>X</Text>
  </TouchableOpacity>
  );


//Test FlatList

export default function Index() {

  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])

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


  //Test RenderItem for FlatList
  const [selectedId_solution, setSelectedId_solution] = useState<number>();

  const [solutions, setSolutions] = useState(DATA);
  React.useEffect(() => {
  console.log('::Item supprimé::', solutions);
  }, [solutions]);
  

  
  const removeItem = (id: number) => {
    
    setSolutions(solutions.filter(item => item.id !== id));
    console.log('Button removeItem pressed');
  };

  const renderItem = ({item}: {item: SolutionData}) => {
    
    let backgroundColor = '';
    let color = '';
    if (item.id % 2 === 0) {
      backgroundColor = '#e3e3e3';
      color = '#C84630';
    }  else {
      backgroundColor = '#D4A0A7';
      color = '#C84630';
    }

    if(item.id == selectedId_solution) {
      backgroundColor = '#898989';
      color = 'white';
    }

    
    

    return (
      <Solution
        item={item}
        onPress={() => {
            if (selectedId_solution === item.id) {
        setSelectedId_solution(undefined);
      } else {
        setSelectedId_solution(item.id);
      }
          }
        }
        backgroundColor={backgroundColor}
        textColor={color}
        removeItem={removeItem}
      />
    );
  };
  

  



  return (
    <ScrollView style={{flex:1, backgroundColor:'white'}} showsVerticalScrollIndicator={false}>


      {/*Section de la date*/}
      <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30,paddingTop: 25,}}>
    
        <Text style={{fontSize:50, color:"#03045E"}}>&larr;</Text>

        <View style={{ flex: 1, alignItems: "center"}}>

            <Text style={{fontSize: 24, fontWeight: "bold", marginTop: 10}}>Date</Text>

            <Text style={{fontSize: 18, marginBottom: 10,}}>2025-06-05</Text>

            <Text style={[styles.aujourdhui]}>Aujourd'hui</Text>

        </View>

        <Text style={{fontSize:50, color:"#03045E"}}>&rarr;</Text>
      </View>

      {/*Section des pensées*/}
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

        {/*Section des solutions*/}
        <View 
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
           
          backgroundColor:'beige'
        }}
        >
          <Text style={styles.h1}>
            {compass} Solutions
          </Text>

          <TextArea 
                placeholder='Solutions'
                onPress={() => console.log("TextInput Pressed")}
                icons={icons.solution}
          />


          <TouchableHighlight 
            onPress={() => console.log('Button Pressed')}
            underlayColor='#912937'
            style={styles.button}>
              <View>
                <Text style={styles.button_text}>Ajouter</Text>
              </View>
            </TouchableHighlight>  

            <FlatList
            style={{
              marginTop: 20, 
              marginBottom: 50, 
              borderRadius: 20
            }}

          data={solutions}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          extraData={selectedId_solution}
        />    

        </View>


    </ScrollView>
  );
}
