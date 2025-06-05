import TextArea from "@/components/TextArea";
import { icons } from '@/constants/icons';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, View } from "react-native";

import CustomCheckbox from "@/components/CustomCheckbox";
import styles from "./styles";

const compass = <FontAwesome name="compass" size={24}/>
const tachometer = <FontAwesome name="tachometer" size={24}/>

export default function Index() {
  const [isSelected, setIsSelected] = useState(false);

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
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Frutration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Dégoût"
                    size={24}
                /> 
                
            </View>

            <View style={{backgroundColor: "#ffffff", borderRadius: 10, padding:20 }}>

                <TextArea 
                placeholder='Contre-Pensée négative'
                onPress={() => console.log("TextInput Pressed")}
                icons={icons.pensee_negative}
                />

                <Text style={styles.h1}>{tachometer} Émotions </Text>

                
                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Peur"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Honte"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Colère"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Joie"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Tristessse"
                    size={24}
                /> 

                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Frutration"
                    size={24}
                /> 


                <CustomCheckbox 
                  checked={isSelected} 
                  onPress={ () => { 
                      setIsSelected(!isSelected)
                      console.log('::LocalChecked::', isSelected);
                    }
                  }
                    text="Dégoût"
                    size={24}
                /> 

            </View>
          
      </View>

        {/*Section des solutions*/}
        <View 
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
           
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

                

        </View>


    </ScrollView>
  );
}
