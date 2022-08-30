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
});
