
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import SplashScreen from "./components/SplashScreen.js";
import HomeScreen from "./components/Home/Home.js";
import DetailScreen from "./components/Home/Detail.js";
import Attractions from "./components/Home/Attractions.js"
import Login from './components/Auth/Login.js'
import Profile from './components/Auth/Profile.js'

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
          options={{ title:"Home" , headerShown:false} }
        />
        <Stack.Screen
          name="Attractions"
          component={Attractions}
          options={{ title:"Attractions"} }
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title:"Detail" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title:"Login"} }
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title:"Profile"} }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
