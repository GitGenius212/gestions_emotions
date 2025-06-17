import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
  placeholder: string;
  onPress?: () => void;
  icons?: any;
  description: string;
  onChangeDescription : any;
}

const TextArea = ({placeholder, onPress, icons, description, onChangeDescription}: Props) => {
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
      <Image source={icons} style={{
        width:20, 
        height:20,
        position: 'absolute',
        top:11, 
        left: 8,
        
        }} resizeMode='contain' />
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
          textAlignVertical: 'top', // ensures placeholder/text start at the top
          paddingTop: 10,
          width: '100%',
          borderRadius: 10,
          paddingLeft: 35,
        }}
      />
    </View>
  )
}

export default TextArea