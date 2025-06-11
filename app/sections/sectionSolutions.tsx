import { View, Text, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles';
import { icons } from '@/constants/icons';

import TextArea from "@/components/TextArea";



const compass = <FontAwesome name="compass" size={24}/>


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

const SectionSolutions = () => {
    

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
  )
}

export default SectionSolutions