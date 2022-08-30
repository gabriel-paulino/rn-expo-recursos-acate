import { useState } from "react";

import { View } from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { ILocalization } from "../../types";

import styles from "./style";

export default function Maps() {
  const [find, setFind] = useState<ILocalization>({
    latitude: -27.5448985,
    longitude: -48.5023547,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={find}
      ></MapView>
    </View>
  );
}
