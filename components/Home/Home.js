import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { homeStyle } from "../../Styles/HomeStyle";

import React, { useEffect, useState } from "react";

export default function HomeScreen({ navigation }) {
  const onPressItem = (id, name) => {
    navigation.navigate("Detail", { id: id, name: name });
  };

  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getAttractions = async (query = "") => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.melivecode.com/api/attractions?search=${query}`
      );
      const json = await response.json();
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

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    getAttractions(query);
  };

  return (
    <View style={homeStyle.container}>
      <Searchbar
        label="ค้นหาสถานที่"
        value={searchQuery}
        onChangeText={handleSearchChange}
        style={{ margin: 10 }}
      />
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
