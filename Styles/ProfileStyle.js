import { StyleSheet } from "react-native";

export const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    marginTop: 60,
    backgroundColor:"#131414"
  },
  TextHeader: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight:'bold',
    color:'white'
  },
  TextContainer: {
    padding: 40,
  },
  TextData: {
    marginTop:15,
    fontSize:13,
    fontWeight:'bold',
    color:'white'
  },
  ImageProfile: {
    marginTop: 10,
    marginBottom: 20,
    width: 150,
    height: 150,
    alignSelf: "center",
  },
});
