import { View, Text, ScrollView, Image, Button, Linking } from "react-native";
import { detailStyle } from "../../Styles/DetailStyle";
import data from "../../mock/attractions.json";
import { useCallback } from "react";

export default function DetailScreen({ navigation, route }) {
  // console.log("🚀 ~ DetailScreen ~ route:", (route.params.id)-1)

  let d = data.find((o) => o.id === route.params.id);
  // console.log("🚀 ~ DetailScreen ~ d:", d);

  const openMap  = useCallback(async () => {
    const uri = await Linking.openURL('http://maps.google.com/maps?q=' + d.latitude + ',' + d.longitude)
  })

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        {/* ใช้ได้ทั้ง 2 เเบบเเล้วเเต่ชอบ */}
        <Image source={{ uri: d.coverimage }} style={detailStyle.image} />

        <Text style={detailStyle.imageTextHeader}>
          {data[route.params.id - 1].name}
        </Text>
        <Text style={detailStyle.textDetail}>
          {data[route.params.id - 1].detail}
        </Text>
        
        <Button style={detailStyle.button} title="Map" onPress={openMap} />
      </View>
    </ScrollView>
  );
}
