import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Tile from './Tile';

const tiles = [
  {
    id: "google",
    uri: "https://google.com",
  },
  {
    id: "expo",
    uri: "https://expo.dev",
  },
  {
    id: "facebook",
    uri: "https://facebook.com",
  },
  {
    id: "instagram",
    uri: "https://www.instagram.com/",
  },
  {
    id: "reanimated",
    uri: "https://docs.swmansion.com/react-native-reanimated/",
  },
  {
    id: "github",
    uri: "https://github.com",
  },
  {
    id: "rnnavigation",
    uri: "https://reactnavigation.org/",
  },
  {
    id: "stackoverflow",
    uri: "https://stackoverflow.com/",
  },
  {
    id: "youtube",
    uri: "https://youtube.com/",
  },
];

export default function DragEffects() {
  return (
    <SafeAreaView>
      <View>
        <Text>Drag Effects</Text>
      </View>
    </SafeAreaView>
  );
}
