import TextArea from "@/components/TextArea";
import { icons } from '@/constants/icons';
import { ScrollView, Text, View } from "react-native";

import styles from "./styles";

export default function Index() {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>


      {/*Section de la date*/}
      <View style={{
        
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingTop: 25,
        
        
      }}>
        <Text style={{
          fontSize:50, 
          color:"#03045E", 
        }}>&larr;</Text>

          <View
            style={{
              flex: 1,
              alignItems: "center",
              
            }}
          >
            <Text style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 10,
            }}>Date</Text>

            <Text style={{
              fontSize: 18,
            marginBottom: 10,
            }}>2025-06-04</Text>

            <Text style={[styles.aujourdhui]}>Aujourd'hui</Text>
          </View>

              <Text style={{
          fontSize:50, 
          color:"#03045E", 
        }}>&rarr;</Text>
      </View>

        {/*Section des pensées*/}
        <View style={{
          flex: 1,
          backgroundColor:"#94DDBC", 
          padding:15, 
          
          
          }}>
            <ScrollView 
            contentContainerStyle={{padding: 20}}
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              borderRadius: 10,
            }}
            >
              <TextArea 
                placeholder='Élément déclencheur'
                onPress={() => console.log("TextInput Pressed")}
                icons={icons.element_dec}
                />

                <TextArea 
                placeholder='Pensée négative'
                onPress={() => console.log("TextInput Pressed")}
                icons={icons.pensee_negative}
                />

                
            </ScrollView>
          
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
          Solutions</Text>

        <TextArea 
                placeholder='Solutions'
                onPress={() => console.log("TextInput Pressed")}
                icons={icons.solution}
                />

        </View>


    </View>
  );
}
