import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Linking,
  ActivityIndicator,
} from "react-native";
import { detailStyle } from "../../Styles/DetailStyle";
import React, { useEffect, useState, useCallback } from "react";

export default function DetailScreen({ navigation, route }) {
  const openMap = useCallback(async () => {
    if (items) {
      const uri = `http://maps.google.com/maps?q=${items.attraction.latitude},${items.attraction.longitude}`;
      await Linking.openURL(uri);
    }
  }, [items]);

  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState(null);

  const getAttractions = async () => {
    try {
      const response = await fetch(
        "https://www.melivecode.com/api/attractions/" + route.params.id
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

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ padding: 10 }}>
      <ScrollView>
        <Image source={{ uri: items.attraction.coverimage }} style={detailStyle.image} />
        <Text style={detailStyle.imageTextHeader}>
          {items.attraction.name}
        </Text>
        <Text style={detailStyle.textDetail}>
          {items.attraction.detail}
        </Text>
        <Button style={detailStyle.button} title="Map" onPress={openMap} />
      </ScrollView>
    </View>
  );
}
