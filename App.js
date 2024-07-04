
import { StyleSheet, Text, View,  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./components/SplashScreen.js";
import HomeScreen from "./components/Home/Home.js";
import DetailScreen from "./components/Home/Detail.js";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title:"Welcome" , headerShown:false} }
          
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title:"Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
