import { View, Text, StyleSheet, Dimensions } from "react-native";

import Button from "./components/Button";
import CardHeader from "./components/CardHeader";

import { IProduct } from "./Model";

interface ICardProps {
  product: IProduct;
}

const { width  } = Dimensions.get("window");
export const CARD_HEIGHT = width * 1.25;

export default function Card({
  product: { title, subtitle, mainColor, secondaryColor },
}: ICardProps) {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 16,
          margin: 32,
          flex: 1,
          backgroundColor: mainColor,
          padding: 16,
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Button label="Saiba mais" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height: CARD_HEIGHT,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#432406",
    marginBottom: 16,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#432406",
  },
});
