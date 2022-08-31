import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },
  map: {
    width: window.width,
    height: window.height,
  },
  logo: {
    width: 180,
    height: 20,
  },
  textCallout: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
