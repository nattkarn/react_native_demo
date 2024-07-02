import { StyleSheet } from "react-native";

export const detailStyle = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },
  textHeader:{
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold'
  },
  image: {
    width: "100%",
    height: 333,
  },
  imageTextHeader:{
    fontSize:20,
    fontWeight:'bold',
  },
  imageText:{
    fontSize:20,
    marginTop:10
  },
  textDetail:{
    fontSize:13,
    paddingBottom:15
  },
  button:{
    paddingVertical:10,
    color: 'red'
  }
});
