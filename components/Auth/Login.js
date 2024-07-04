import { View, Text, Image, Alert } from "react-native";
import { loginStyle } from "../../Styles/LoginStyle";

import { TextInput, Button } from "react-native-paper";
import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  // console.log("🚀 ~ HomeScreen ~ email:", email)
  const [passWord, setPassWord] = useState("");
  // console.log("🚀 ~ HomeScreen ~ passWord:", passWord)

  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onPressLogin = async () => {
    if (email != "" && passWord != "") {
      setLoading(true);
      try {
        const response = await fetch("https://www.melivecode.com/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: passWord,
            expiresIn: 60000,
          }),
        });
        const json = await response.json();
        // console.log("🚀 ~ onPressLogin ~ json:", json);
        if (json.status === "ok") {
          // Alert.alert(json.status, json.message)
          await AsyncStorage.setItem("@accessToken", json.accessToken);
          const accessToken = await AsyncStorage.getItem("@accessToken");
          //   console.log("🚀 ~ onPressLogin ~ accessToken:", accessToken)

          setItems(json);
          navigation.navigate('Profile')
        } else {
          Alert.alert(json.status, json.message);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("error", "Please Enter Email and Password");
    }
  };
  // console.log("🚀 ~ onPressLogin ~ email:", email)
  //   console.log("🚀 ~ onPressLogin ~ items:", items)

  return (
    <View style={loginStyle.container}>
      <Image
        source={require("../../assets/catLogo.png")}
        style={loginStyle.ImageLogo}
      />
      <Text style={loginStyle.textLogin}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={loginStyle.textInput}
      />
      <TextInput
        label="Password"
        value={passWord}
        onChangeText={(text) => setPassWord(text)}
        mode="outlined"
        secureTextEntry={secureTextEntry}
        right={
          <TextInput.Icon
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            icon={secureTextEntry ? "eye" : "eye-off"}
          />
        }
        style={loginStyle.textInput}
        // outlineColor={'white'}
        // activeOutlineColor={'white'}
      />

      <Button
        icon={"login"}
        mode={"contained"}
        onPress={() => onPressLogin()}
        style={loginStyle.button}
      >
        Login
      </Button>
    </View>
  );
}
