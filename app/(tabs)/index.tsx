import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "../styles";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();
  return (
    <View style={{
      flex:1, 
      backgroundColor: styles.primary.color,
    }}>

      <Image source={images.bg} style={{
        position: "absolute",
        width: "100%",
        zIndex: 0,
      }}/>

      <ScrollView style={{
        flex: 1,
        paddingHorizontal: 5,
      }}  showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight:'100%', paddingBottom:10}} >
        <Image source={icons.logo} style={{
          width: 100,
          height: 80,
          marginTop: 50,
          marginBottom: 5,
          alignSelf: "center",
          marginHorizontal:'auto',
        }}/>

        <View style={{
          flex:1, 
          marginTop: 10
        }}>
          <SearchBar
          onPress={() => router.push('/search') }
            placeholder='Search for a movie'
        
          />
        </View>
      </ScrollView>

    </View>
  );
} 



