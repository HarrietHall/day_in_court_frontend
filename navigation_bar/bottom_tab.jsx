import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


import { AntDesign } from "@expo/vector-icons";

function BottomTabs() {
  const navigation = useNavigation();

  const [currentScreen, setCurrentScreen] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const currentRoute = navigation.getCurrentRoute();
      const screenName = currentRoute.name;
      setCurrentScreen(screenName);
    });

    return unsubscribe;
  }, [navigation]);

  const handleHomePress = () => {
    navigation.navigate("home");
  };

  const handleCasePress = () => {
    navigation.navigate("case_completed");
  };
    return (
 <View style={styles.lowerNavContainer}>
   <TouchableOpacity
        onPress={handleHomePress}
        activeOpacity={currentScreen === "Home" ? 1 : 0.5}
      >
        <AntDesign
          name="home"
          size={30}
          color={currentScreen === "home" ? "#5daa80" : "black"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleCasePress}
        activeOpacity={currentScreen === "case_completed" ? 1 : 0.5}
      >
        <AntDesign
          name="checksquareo"
          size={30}
          color={currentScreen === "case_completed" ? "#5daa80" : "black"}
        /></TouchableOpacity>
        </View>
      );
    }
    


export default BottomTabs


const styles = StyleSheet.create({
    lowerNavContainer: {

            position: "absolute",
        bottom: 0,
        zIndex: 1000,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: 60,
        backgroundColor: '#d7ceb2',
       
    }
})


