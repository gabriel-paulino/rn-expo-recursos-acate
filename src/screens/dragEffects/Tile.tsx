import { View, Text, StyleSheet } from "react-native";

import { WebView } from "react-native-webview";

interface TileProps {
  id: string;
  uri: string;
  onLongPress: () => void;
}

export default function Tile({ id, uri, onLongPress }: TileProps) {
  return (
    <View pointerEvents="none">
      <WebView source={{ uri }} />
    </View>
  );
}
