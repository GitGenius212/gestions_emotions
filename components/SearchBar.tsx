import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import styles from '@/app/styles'
import { icons } from '@/constants/icons'

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({placeholder, onPress}: Props) => {
  return (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:styles.dark_200.color, 
        paddingHorizontal: 10,
        borderRadius: 9999,
        paddingVertical: 9,
    }}>
      <Image source={icons.search} style={{
        width: 20,
        height: 20,
        
        
      }} resizeMode='contain' tintColor='#ab8bff' />

        <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        placeholderTextColor="#ab8bff"
        style={{
          flex: 1,
          color: "#ffffff",
          marginLeft: 10,
          
        }}
        />

    </View>
  )
}

export default SearchBar