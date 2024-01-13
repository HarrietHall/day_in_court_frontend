import React from "react";
import BottomTabs from "./navigation_bar/bottom_tab";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home";
import { PaperProvider } from "react-native-paper";
import CourtFormScreen from "./screens/court_form_screen";
import CourtScreen from "./screens/court_completed_screen";
import CaseCompletedScreen from "./screens/case_completed_screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.container}>
          <PaperProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="home"
                screenOptions={({ route }) => ({
                  headerShown: false,
                  animationEnabled: false,
                })}
              >
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen
                  name="court_details"
                  component={CourtFormScreen}
                />
                <Stack.Screen name="court_completed" component={CourtScreen} />
                <Stack.Screen
                  name="case_completed"
                  component={CaseCompletedScreen}
                />
              </Stack.Navigator>
              <BottomTabs />
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
