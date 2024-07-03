import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { CommonActions } from '@react-navigation/native';
import { splashStyle } from '../Styles/SplashStyle';

const logo = require("../assets/catLogo.png");

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                })
            );
        }, 2000); // 2000 milliseconds = 2 seconds

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, [navigation]);
    
    return (
        <View style={splashStyle.splash}>
            <View style={splashStyle.splashLogo}>
                <Image source={logo} style={splashStyle.splashImage} />
            </View>
            <View style={splashStyle.splashContent}>
                <Text style={splashStyle.splashText}>Cat Coder</Text>
            </View>
        </View>
    );
}
