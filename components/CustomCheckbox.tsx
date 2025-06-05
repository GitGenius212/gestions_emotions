import React from "react";
import { TouchableOpacity, View, Text} from "react-native";

export default function CustomCheckbox({ checked, onPress, size = 24, text } : any) {
  return (
    <View style={{
        flexDirection:'row',
        marginBottom:10
    }}>
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: size,
        height: size,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {checked && (
        <View
          style={{
            width: size - 8,
            height: size - 8,
            backgroundColor: "#92BCEA",
            borderRadius: 7,
          }}
        />
      )}
    </TouchableOpacity>
    <Text
      style={{
        fontSize:16, 
        marginLeft:10
      }}
    >{text}</Text>
    </View>
  );
}