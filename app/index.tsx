import { Text, View } from "react-native";
import styles from "./styles";

export default function Index() {
  return (
    <View style={{flex: 1, backgroundColor: "#CAF0F8"}}>

  <View style={{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 30,
    boxSizing: "border-box",
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
    </View>
  );
}
