import { icons } from '@/constants/icons';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

import TextArea from "@/components/TextArea";
import { removeSolution, solutions_datas } from '../AccèsAuxDonnées/DataBidon';
import { SolutionData } from '../Domaine/Classes/SolutionData';



const compass = <FontAwesome name="compass" size={24}/>




type SolutionProps = {
  item: SolutionData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  removeItem : (id:number) => void;
};


const Solution = ({item, onPress, backgroundColor, textColor, removeItem}: SolutionProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item_solutoin, {backgroundColor}]}>
  <View style={styles.description_solution}>
    <Text style={{opacity:0.4}}>{item.createdAt.toDateString()} - {item.createdAt.toLocaleTimeString()}</Text>
    <Text style={[{color: textColor}, styles.description_solution_text]}>{item.description}</Text>
  </View>

  <View>
      <Text onPress={() =>  removeItem(item.id)} style={[{ color: 'white' }, styles.close_button]}>X</Text>
  </View>
    
  </TouchableOpacity>
  );

const SectionSolutions = () => {
    

    const [selectedId_solution, setSelectedId_solution] = useState<number>();
    
      const [solutions, setSolutions] = useState(solutions_datas);
      React.useEffect(() => {
      console.log('::Item supprimé::', solutions);
      }, [solutions]);
      
    
      
      const removeItem = (id: number) => {
        
        setSolutions(solutions.filter(item => item.id !== id));
        console.log('Button removeItem pressed');
        removeSolution(id);
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