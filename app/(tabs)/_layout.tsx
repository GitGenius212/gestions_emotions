import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import styles from '../styles'

const TabIcon = ({focused, icon, title} : any) => {
    if (focused) {
    return (
        <ImageBackground
            source={images.highlight}
            style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            marginTop:10,
            minHeight:62,
            minWidth:'300%',
            overflow:'hidden',
            borderRadius:50, 
            flexDirection:'row', 
            width: '100%',
                    }}
        >

            <Image source={icon} tintColor="#151312" 
                style={{width: 25, height: 25}} />

            <Text style={[styles.secondary, {marginLeft:5}]}>{title}</Text>

                        
                    
        </ImageBackground>
    )
}
return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:10, borderRadius:50,  width: '100%'}}>
        <Image source={icon} tintColor='#A8B5DB' style={{width: 25, height: 25}} />
    </View>
)
}


const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width:'100%', 
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }, 
            tabBarStyle : {
                backgroundColor:'#0f0D23', 
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height:52, 
                position:'absolute',
                overflow:'hidden',
                borderWidth: 1,
                borderColor: '#0f0D23',
            }
        }}>

        <Tabs.Screen 
            name='index'
            options={{
                title:'Home', 
                headerShown:false, 
                tabBarIcon : ({focused}) => (
                    
                    <TabIcon 
                        focused={focused} 
                        icon={icons.home} 
                        title="Home"/>
                    
                )
            }}
        />

        <Tabs.Screen 
            name='saved'
            options={{
                title:'Saved', 
                headerShown:false, 
                tabBarIcon : ({focused}) => (
                    
                    <TabIcon 
                        focused={focused} 
                        icon={icons.save} 
                        title="Saved"/>
                    
                )
            }}
        />

        <Tabs.Screen 
            name='search'
            options={{
                title:'Search', 
                headerShown:false, 
                tabBarIcon : ({focused}) => (
                    
                    <TabIcon 
                        focused={focused} 
                        icon={icons.search} 
                        title="Search"/>
                    
                )
            }}
        />

        <Tabs.Screen 
            name='profile'
            options={{
                title:'Profile', 
                headerShown:false, 
                tabBarIcon : ({focused}) => (
                    
                    <TabIcon 
                        focused={focused} 
                        icon={icons.person} 
                        title="Profile"/>
                    
                )
            }}
        />


    </Tabs>
  )
}

export default _layout