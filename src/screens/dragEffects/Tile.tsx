import { View, StyleSheet } from "react-native";

import { WebView } from "react-native-webview";

import { SIZE, MARGIN } from "./Config";

interface TileProps {
  id: string;
  uri: string;
  onLongPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    overflow: "hidden",
    borderRadius: MARGIN,
  },
  webView: {
    flex: 1,
    margin: MARGIN * 2,
  },
});

export default function Tile({ id, uri, onLongPress }: TileProps) {
  return (
    <View style={styles.container} pointerEvents="none">
      <WebView source={{ uri }} style={styles.webView} />
    </View>
  );
}
