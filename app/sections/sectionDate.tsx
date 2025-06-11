import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles'

const sectionDate = () => {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30,paddingTop: 25,}}>
    
        <Text style={{fontSize:50, color:"#03045E"}}>&larr;</Text>

        <View style={{ flex: 1, alignItems: "center"}}>

            <Text style={{fontSize: 24, fontWeight: "bold", marginTop: 10}}>Date</Text>

            <Text style={{fontSize: 18, marginBottom: 10,}}>2025-06-05</Text>

            <Text style={[styles.aujourdhui]}>Aujourd'hui</Text>

        </View>

        <Text style={{fontSize:50, color:"#03045E"}}>&rarr;</Text>
      </View>
  )
}

export default sectionDate