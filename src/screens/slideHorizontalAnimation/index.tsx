import { View, ScrollView, StyleSheet, Dimensions } from "react-native";

import Animeted, {
  useSharedValue,
  interpolateColor,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import Products from "./Products";
import Card, { CARD_HEIGHT } from "./Card";
import Cards from "./components/Cards";

import { products } from "./Model";

const { width } = Dimensions.get("window");

const snapToOffset = [0, CARD_HEIGHT];

export default function SlideHorizontalAnimation() {
  const translateX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const style = useAnimatedStyle(() => {
    const backgroundColor: string = interpolateColor(
      translateX.value,
      products.map((_, i) => width * i),
      products.map((product) => product.secondaryColor)
    );
    return { flex: 1, backgroundColor };
  });

  return (
    <Animeted.View style={style}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToOffsets={snapToOffset}
        snapToEnd={false}
        decelerationRate="fast"
      >
        <View style={styles.slider}>
          <Animeted.ScrollView
            onScroll={onScroll}
            scrollEventThrottle={16}
            decelerationRate="fast"
            snapToInterval={width}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </Animeted.ScrollView>
          <Products x={translateX} />
        </View>
        <Cards />
      </ScrollView>
    </Animeted.View>
  );
}

const styles = StyleSheet.create({
  slider: {
    height: CARD_HEIGHT - 10,
  },
});
