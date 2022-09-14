import { View, StyleSheet, Dimensions, Image } from "react-native";

import Animeted, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

import { products } from "./Model";

interface IProductsProps {
  x: Animeted.SharedValue<number>;
}

const { width } = Dimensions.get("window");
const SIZE = 200;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Products({ x }: IProductsProps) {
  return (
    <View style={styles.container} pointerEvents="none">
      {products.map((product, index) => {
        const style = useAnimatedStyle(() => {
          const translateX = interpolate(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [width / 2, 0, -width / 2]
          );
          const scale = interpolate(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.61, 1, 0.61]
          );
          return {
            transform: [{ translateX }, { scale }],
          };
        });
        return (
          <Animeted.View key={index} style={[styles.container, style]}>
            <Image
              source={product.picture}
              style={{
                marginTop: 50,
                width: SIZE,
                height: SIZE * product.ratio,
              }}
            />
          </Animeted.View>
        );
      })}
    </View>
  );
}
