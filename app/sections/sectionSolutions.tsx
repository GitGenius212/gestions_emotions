import { icons } from '@/constants/icons';
import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, Pressable, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

import TextArea from "@/components/TextArea";
import {solutions_datas } from '../AccèsAuxDonnées/DataBidons/DataBidonSolutionData';
import SolutionData from '../Domaine/Classes/SolutionData';
import SolutionProps from '../Domaine/props/SolutionProps';
import { getAllSolutions, removeSolution, storeSolution, putSolution } from '../AccèsAuxDonnées/DatabaseStorage/DataSolutionDataBD';



const compass = <FontAwesome name="compass" size={24}/>







const Solution = ({item, onPress, backgroundColor, textColor, removeItem, putItem, setIsFocused}: SolutionProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item_solution, {backgroundColor}]}>
  <View style={styles.description_solution}>
    <Text style={{opacity:0.4}}>{new Date(item.createdAt?.toString() ?? "").toDateString()} 
      - {new Date(item.createdAt?.toString() ?? "").toLocaleTimeString()}</Text>
    <TextInput multiline onFocus={() => setIsFocused(true)} onEndEditing={() => setIsFocused(false)} onChangeText={(text) =>  putItem(text, item)} 
    style={[{color: textColor}, styles.description_solution_text]}>{item.description}</TextInput>
  </View>

  <View>
      <Text onPress={() =>  removeItem(item.id ?? 0)} style={[{ color: 'white' }, styles.close_button]}>X</Text>
  </View>
    
  </TouchableOpacity>
  );

const SectionSolutions = () => {
    
    

    const [selectedId_solution, setSelectedId_solution] = useState<number[]>();
    const [descriptionSolution, setDescriptionSolution] = React.useState('');
    const [solutions, setSolutions] = useState(solutions_datas);
    const [isInputFocused, setIsInputFocused] = useState(false);

    useEffect(() => {
  const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
    setIsInputFocused(false);
    Keyboard.dismiss();
  });

    // Nettoyage à la destruction du composant
    return () => {
      keyboardHideListener.remove();
    };
  }, []);


  useEffect(() => {

    async function getAllSolutionsFromBD() {
      const result = await Promise.resolve(getAllSolutions());
      console.log(result);
      return result;
    }

    getAllSolutionsFromBD().then((value) => {
      const listSolutions = value;
      const solutionIdsSelected  : number[]= [];
      for(let s of listSolutions) {
        if(s.isSelected) {
          solutionIdsSelected.push(s.id ?? 0);
        }

      }
      setSelectedId_solution(solutionIdsSelected);
      setSolutions(listSolutions);
    });





  const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
    setIsInputFocused(true);

  });

    // Nettoyage à la destruction du composant
    return () => {
      keyboardShowListener.remove();
    };
  }, []);

  
      
    //Independant statements
  function getNumberMarginBottom(length: number) : number{
    if(length === 0) {
      return 330;
    } else if(length === 1 ) {
      return 240;
    } else if(length === 2) {
      return 165;
    } else if(length === 3) {
      return 100
    } else {
      return 50;
    }
  }

    const statements: number = isInputFocused ? 340 : getNumberMarginBottom(solutions.length);

    function setIsFocused(p: boolean) {
        setIsInputFocused(p);
    }
      
      const removeItem = async (p_id: number) => {
        
        //Update the state of the solutions in FrontEnd
        setSolutions(solutions.filter(item => item.id !== p_id));
        if(selectedId_solution?.includes(p_id)) {
          const listSelectedSolution = selectedId_solution.filter((id:number) => id != p_id);
          setSelectedId_solution(listSelectedSolution);
        }
        
        //Remove the solution in the backend
        await Promise.resolve(removeSolution(p_id));
        
      };

      const addItem = async (description: string) => {
        //Create an object SolutionData with this description
        let newSolution : SolutionData = {
          description, 
          isSelected: false
        }
        //Add this new solution to the list
        let solution_added = await Promise.resolve(storeSolution(newSolution));
        
        //Update the state of the solutions list
        if(solutions[0] === solution_added) {
          const new_list = solutions.toSpliced(0, 1, solution_added);
          setSolutions(new_list);
           
        } else {
          const new_list = solutions.toSpliced(0, 0, solution_added);
          setSolutions(new_list);
          
          
        }
         
      }

      const putItem = (text: string, item: SolutionData, isSelectedSol?: boolean) => {
       
       //Déclaration de variables
       let updated_solution : SolutionData = {
          description: text, 
          id: item.id, 
          createdAt: item.createdAt, 
          isSelected: isSelectedSol
        
        }
        console.log("updated_solution => ", updated_solution);

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
            backgroundColor = '#e3e3e3';  //gray
            color = '#C84630'; //orange
          }  else {
            backgroundColor = '#D4A0A7'; //pink
            color = '#C84630';  //orange
          }
      
          if(selectedId_solution?.includes(item.id)) {
            backgroundColor = '#898989';  //full gray
            color = 'white';
          }
        }
        
    
        
        
    
        return (
          <Solution
            item={item}
            onPress={() => {
                if (selectedId_solution?.includes(item.id ?? 0)) {
                  //Delete the id from the list 
                  const list = selectedId_solution.filter((id:number) => id != item.id);
                  setSelectedId_solution(list);
                  console.log("list => ", list);
                  console.log("descriptionSolution => ", item.description);
                  putItem(item.description, item, !selectedId_solution?.includes(item.id ?? 0));

          } else {
            //Add the id in the selectedId_solution list
            const list = selectedId_solution?.toSpliced(0, 0, item.id ?? 0);
            setSelectedId_solution(list);
            console.log("list => ", list);
            console.log("descriptionSolution => ", item.description);
            putItem(item.description, item, !selectedId_solution?.includes(item.id ?? 0));

            
          }
              }
            }
            backgroundColor={backgroundColor}
            textColor={color}
            removeItem={removeItem}
            putItem={putItem}
            setIsFocused={setIsFocused}
          />
        );
      };

  return (
    <Pressable onPress={() => {
      setIsFocused(false);
      Keyboard.dismiss();
    }
    }>
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
    </Pressable>

  )
}

export default SectionSolutions


