import { icons } from '@/constants/icons';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

import TextArea from "@/components/TextArea";
import { addSolution, putSolution, removeSolution, solutions_datas } from '../AccèsAuxDonnées/DataBidon';
import { SolutionData } from '../Domaine/Classes/SolutionData';



const compass = <FontAwesome name="compass" size={24}/>




type SolutionProps = {
  item: SolutionData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  removeItem : (id:number) => void;
  putItem : (text:string, item: SolutionData) => void;
};


const Solution = ({item, onPress, backgroundColor, textColor, removeItem, putItem}: SolutionProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item_solution, {backgroundColor}]}>
  <View style={styles.description_solution}>
    <Text style={{opacity:0.4}}>{item.createdAt?.toDateString()} - {item.createdAt?.toLocaleTimeString()}</Text>
    <TextInput multiline  onChangeText={(text) =>  putItem(text, item)} 
    style={[{color: textColor}, styles.description_solution_text]}>{item.description}</TextInput>
  </View>

  <View>
      <Text onPress={() =>  removeItem(item.id ?? 0)} style={[{ color: 'white' }, styles.close_button]}>X</Text>
  </View>
    
  </TouchableOpacity>
  );

const SectionSolutions = () => {
    
    

    const [selectedId_solution, setSelectedId_solution] = useState<number>();
    const [descriptionSolution, setDescriptionSolution] = React.useState('');
    const [solutions, setSolutions] = useState(solutions_datas);
      
    //Independant statements
  function getNumberMarginBottom(length?: number) : number{
    console.log("We are updating a solution");
    if(length == undefined) {
      if(solutions.length === 0) {
        return 330;
      } else if(solutions.length === 1 ) {
        return 240;
      } else if(solutions.length === 2) {
        return 165;
      } else if(solutions.length === 3) {
        return 100;
      } else {
        return 50;
    }
  } else {
      return 340;
    }
    
  }

    const statements: number = getNumberMarginBottom();
      
      const removeItem = (id: number) => {
        
        setSolutions(solutions.filter(item => item.id !== id));
        if(id == selectedId_solution) setSelectedId_solution(undefined);
        
        removeSolution(id);
        
      };

      const addItem = (description: string) => {
        //Create an object SolutionData with this description
        let newSolution : SolutionData = {
          description
        }
        //Add this new solution to the list
        let solution_added = addSolution(newSolution);

        
        //Update the solutions list
        if(solutions[0] === solution_added) {
          const new_list = solutions.toSpliced(0, 1, solution_added);
          setSolutions(new_list);
           
        } else {
          const new_list = solutions.toSpliced(0, 0, solution_added);
          setSolutions(new_list);
          
          
        }
         
      }

      const putItem = (text: string, item: SolutionData) => {
       
       //Déclaration de variables
       let updated_solution : SolutionData = {
          description: text, 
          id: item.id, 
          createdAt: item.createdAt

        }
        const indexItem = solutions.indexOf(item);

        //Traitements
        const updated_list_solutions = solutions.toSpliced(indexItem, 1, updated_solution);
        setSolutions(updated_list_solutions);
        putSolution(updated_solution);
      }
    
      const renderItem = ({item}: {item: SolutionData}) => {
        
        let backgroundColor = '';
        let color = '';
        if(item.id != null) {
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
            putItem={putItem}
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
                  description={descriptionSolution}
                  onChangeDescription={setDescriptionSolution}
                  placeholder='Solutions'
                  onPress={() => console.log("TextInput Pressed")}
                  icons={icons.solution}
            />


            <TouchableHighlight 
              onPress={() => addItem(descriptionSolution)}
              underlayColor='#912937'
              style={styles.button}>
                <View>
                  <Text style={styles.button_text}>Ajouter</Text>
                </View>
              </TouchableHighlight>  

              <FlatList
                  style={{
                    marginTop: 20, 
                    flex:0, 
                    marginBottom:statements, 
                    borderRadius: 20
                  }}

                data={solutions}
                renderItem={renderItem}
                keyExtractor={item => item.id != null ? item.id.toString() : (solutions.length + 1 ).toString()}
                extraData={selectedId_solution}
              />    

      </View>
  )
}

export default SectionSolutions


