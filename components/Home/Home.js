import { View, Text, ScrollView, Image, Pressable, Alert } from "react-native";
import { homeStyle } from "../../Styles/HomeStyle";
import data from "../../mock/attractions.json";

export default function HomeScreen({ navigation }) {
  const onPressItem = (id, name) => {
    navigation.navigate("Detail", { id: id, name: name });
  };

  return (
    <ScrollView style={homeStyle.container}>
      {/* Loop ค่าจาก json */}
      {data.map((d) => (
        <View style={homeStyle.card} key={d.id}>
          <Pressable onPress={() => onPressItem(d.id, d.name.toString())}>
            <Image
              source={ {uri: d.coverimage} }
              style={homeStyle.image}
            />

            <Text style={homeStyle.imageTextHeader}>{d.name}</Text>
            <Text style={homeStyle.textDetail}>{d.detail}</Text>
          </Pressable>
        </View>
      ))}
      <View>
        <Text style={homeStyle.textHeader}>Attractions</Text>
      </View>
    </ScrollView>
  );
}
