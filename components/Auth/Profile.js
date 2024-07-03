import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { profileStyle } from "../../Styles/ProfileStyle";

import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const accessToken = await AsyncStorage.getItem("@accessToken");

    try {
      const response = await fetch("https://www.melivecode.com/api/auth/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });
      const json = await response.json();
      console.log("🚀 ~ fetchUser ~ json:", json);

      if (json.status === "ok") {
        setUser(json.user);
        setLoading(false);
      } else {
        Alert.alert(json.status, json.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [isLoading]);

  return (
    <View style={profileStyle.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          <Text style={profileStyle.TextHeader}>Profile</Text>
          <View style={profileStyle.ImageProfile}>
            <Image
              source={{ uri: user.avatar }}
              style={profileStyle.ImageProfile}
            />
          </View>

          <View style={profileStyle.TextContainer}>
            <Text style={profileStyle.TextData}>
              Name: {user.fname} {user.lname}
            </Text>
            <Text style={profileStyle.TextData}>Email: {user.email}</Text>
            <Text style={profileStyle.TextData}>Email: {user.avatar}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
