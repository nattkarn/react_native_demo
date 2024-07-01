import { View, Text, Image, Pressable, Alert } from "react-native"
import {splashStyle} from '../Styles/SplashStyle'

const logo = require("../assets/catLogo.png")

export default function SplashScreen({ navigation }) {
    const onPress = () =>{
        navigation.navigate('Home')
    }
    
    return (
        <Pressable onPress={onPress}>
            <View style={splashStyle.splash}>
                <View style={splashStyle.splashLogo}>
                    <Image source={logo} style = {splashStyle.splashImage}></Image>
                </View>
                <View style={splashStyle.splashContent}>
                    <Text style={splashStyle.splashText}>Cat Coder</Text>
                </View>
            </View>
        </Pressable>
    )
}



  <Text>I'm pressable!</Text>


