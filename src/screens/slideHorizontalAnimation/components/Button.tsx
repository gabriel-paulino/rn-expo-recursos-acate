import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

interface IButtonProps {
  label: string;
}

const width = Dimensions.get("window").width - 64 / 2;

export default function Button({ label }: IButtonProps) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#432406",
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 25,
    height: 54,
    width: width,
  },
  label: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
