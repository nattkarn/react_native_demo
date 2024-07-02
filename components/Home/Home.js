import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { homeStyle } from "../../Styles/HomeStyle";

import React, { useEffect, useState } from "react";

export default function HomeScreen({ navigation }) {
  const onPressItem = (id, name) => {
    navigation.navigate("Detail", { id: id, name: name });
  };

  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const getAttractions = async () => {
    try {
      const response = await fetch(
        "https://www.melivecode.com/api/attractions"
      );
      const json = await response.json();
      // console.log("🚀 ~ getAttractions ~ json:", json)
      setItems(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAttractions();
  }, []);

  return (
    <View style={homeStyle.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          <Text style={homeStyle.textHeader}>Attractions</Text>
          {items.map((d) => (
            <View style={homeStyle.card} key={d.id}>
              <Pressable onPress={() => onPressItem(d.id, d.name.toString())}>
                <Image source={{ uri: d.coverimage }} style={homeStyle.image} />
                <Text style={homeStyle.imageTextHeader}>{d.name}</Text>
                <Text style={homeStyle.textDetail}>{d.detail}</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
