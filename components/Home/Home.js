import { View, Text, ScrollView, Pressable } from "react-native";
import { homeStyle } from "../../Styles/HomeStyle";

import { Avatar } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const onPressAttractions = () => {
    navigation.navigate("Attractions");
  };

  const onPressLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={homeStyle.container}>
      <ScrollView>
        <Text style={homeStyle.textHeader}>Home</Text>
        <View style={homeStyle.containerGrid}>
          <Pressable onPress={() => onPressAttractions()}>
            <Avatar.Icon size={150} icon="airplane-takeoff" />
          </Pressable>
          <Pressable onPress={() => onPressLogin()}>
            <Avatar.Icon size={150} icon="login" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
