import React from 'react';
import {TextInput, View } from 'react-native';

interface Props {
  placeholder: string;
  onPress?: () => void;
  icons?: any;
  description: string;
  onChangeDescription : any;
  padding_left: number
}

const TextArea = ({placeholder, onPress, icons, padding_left, description, onChangeDescription}: Props) => {
  return (
    <View 
    style={{
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius:10, 
        borderWidth: 1,
        borderColor: '#CCCCCC',
        marginBottom:20
        
        
    }}
    >
      <View style={{
        position: 'absolute',
        top:9, 
        left: 5, 
        zIndex: -1,
        paddingBottom: 10,
      
      }}>
        {icons}
      </View>
      

      <TextInput 
        onPress={onPress}
        value={description}
        placeholder={placeholder}
        placeholderTextColor='#757575'
        onChangeText={onChangeDescription}
        multiline
        numberOfLines={4}
      style={{
        color: '#000000', // corrected color for text
        fontSize: 16,
        height: 150,
        paddingTop: 10,
        textIndent: '25px',
        width: '100%',
        borderRadius: 10,
        paddingLeft:10,
      }}
      />
    </View>
  )
}

export default TextArea