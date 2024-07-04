import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  container: {
    flex:1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    marginTop:60,
    backgroundColor:"#131414"
  },
  ImageLogo:{
    justifyContent:'center',
    alignSelf:'center',
    height:150,
    width:150,
    margin:30
  },
  textLogin:{
    color:'white',
    alignSelf:'center',
    fontSize:20,
    fontWeight:'bold',
    margin:10
  },
  textInput:{
    color:'white',
    margin:5
  },
  button:{
    marginTop:10,
    alignSelf:'center',
    width:200,
  }
});
