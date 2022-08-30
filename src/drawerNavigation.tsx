import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./screens/home";
import CameraScreen from "./screens/camera";
import Maps from "./screens/maps";

import "react-native-gesture-handler";

export default function DrawerNavigaton() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Camera" component={CameraScreen} />
        <Drawer.Screen name="Maps" component={Maps} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
