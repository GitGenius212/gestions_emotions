import { View, Text, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren } from 'react'
import styles from '../styles'

export const CustomText = ({ children }: PropsWithChildren) => <Text style={[styles.aujourdhui]}>{children}</Text>;


 const SectionDate = () => {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30,paddingTop: 25,}}>
    
        <TouchableOpacity onPress={() => console.log("Aller à hier")}>
          <Text style={{fontSize:50, color:"#03045E"}}>&larr;</Text>
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: "center"}}>

            <Text style={{fontSize: 24, fontWeight: "bold", marginTop: 10}}>Date</Text>

            <Text style={{fontSize: 18, marginBottom: 10,}}>2025-06-05</Text>

            <CustomText>Aujourd'hui</CustomText>

        </View>

        <TouchableOpacity onPress={() => console.log("Aller à demain")}>
          <Text  style={{fontSize:50, color:"#03045E"}}>&rarr;</Text>
        </TouchableOpacity>
        
      </View>
  )
}

export default SectionDate