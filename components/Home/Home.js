import { View, Text, ScrollView, Image, Pressable, Alert } from "react-native";
import { homeStyle } from "../../Styles/HomeStyle";

export default function HomeScreen({ navigation }) {
  const onPressItem = (id, name) => {
    navigation.navigate("Detail", { id: id, name: name });
  };
  return (
    <ScrollView style={homeStyle.container}>
      <View>
        <Text style={homeStyle.textHeader}>Attractions</Text>
      </View>

      <View style={homeStyle.card}>
        <Pressable onPress={() => onPressItem(1, "Phi Phi Islands")}>
          <Image
            source={require("../../assets/attractions/1.jpg")}
            style={homeStyle.image}
          />

          <Text style={homeStyle.imageTextHeader}>Phi Phi Islands</Text>
          <Text style={homeStyle.textDetail}>
            Phi Phi Islands are a group of islands in Thailand between the large
            island of Phuket and the Malacca Coastal Strait of Thailand.
          </Text>
        </Pressable>
      </View>

      <View style={homeStyle.card}>
        <Pressable onPress={() => onPressItem(2, "Eiffel Tower")}>
          <Image
            source={require("../../assets/attractions/2.jpg")}
            style={homeStyle.image}
          />
          <Text style={homeStyle.imageTextHeader}>Eiffel Tower</Text>
          <Text style={homeStyle.textDetail}>
            Eiffel Tower is one of the most famous structures in the world.
            Eiffel Tower is named after a leading French architect and engineer.
            It was built as a symbol of the World Fair in 1889.
          </Text>
        </Pressable>
      </View>

      <View style={homeStyle.card}>
        <Pressable onPress={() => onPressItem(3, "Times Square")}>
          <Image
            source={require("../../assets/attractions/3.jpg")}
            style={homeStyle.image}
          />
          <Text style={homeStyle.imageTextHeader}>Times Square</Text>
          <Text style={homeStyle.textDetail}>
            Times Square has become a global landmark and has become a symbol of
            New York City. This is a result of Times Square being a modern,
            futuristic venue, with huge advertising screens dotting its
            surroundings.
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
