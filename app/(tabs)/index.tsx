import { Link } from "expo-router";
import { Text, View } from "react-native";
import styles from "../styles";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text 
      style={[styles.accent, {fontSize: 50}, {fontWeight: 'bold'}]}>
        Welcome</Text>
        
        
    </View>
  );
} 



