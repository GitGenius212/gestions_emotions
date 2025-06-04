import { StyleSheet, Text, View } from "react-native";
import styles from "./styles.css";
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
      style={[styles.primary, styles.accent, {fontSize: 50}, {fontWeight: 'bold'}]}>
        Welcome</Text>
    </View>
  );
} 



