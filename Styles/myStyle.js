import { StyleSheet } from "react-native";


export const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "colum",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontStyle: "italic",
  },
  splashImage: {
    width:250,
    height: 250
  },
  splash:{
    height:"100%",
    alignItems: 'center',
    backgroundColor:"#131414"
  },
  splashLogo:{
    justifyContent:"center",
    flex:0.95,

  },
  splashContent:{
    flex:0.05,
  },
  splashText:{
    color:"white",
    fontSize:30
  }
 
});