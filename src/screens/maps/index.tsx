import { useState } from "react";

import { View, Text } from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

import { Svg, Image as ImageSvg } from "react-native-svg";

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
      >
        <Marker
          image={require("../../assets/pin.png")}
          coordinate={{
            latitude: find.latitude,
            longitude: find.longitude,
          }}
        >
          <Callout>
            <View>
              <Text style={styles.textCallout}>Acate</Text>
              <Svg width={160} height={40}>
                <ImageSvg
                  width={"100%"}
                  height={"100%"}
                  href={require("../../assets/acate.png")}
                />
              </Svg>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}
