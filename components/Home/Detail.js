import { View, Text, ScrollView, Image } from "react-native";
import { homeStyle } from "../../Styles/HomeStyle";


const images = {
    1: require("../../assets/attractions/1.jpg"),
    2: require("../../assets/attractions/2.jpg"),
    3: require("../../assets/attractions/3.jpg"),
}

export default function DetailScreen({ navigation, route }) {
  return (
    <View>
      <Image
        source={images[route.params.id]}
        style={homeStyle.image}
      />

      <Text style={homeStyle.imageTextHeader}>{route.params.name}</Text>
    </View>
  );
}
