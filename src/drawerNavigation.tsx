import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "src/screens/home";
import CameraScreen from "src/screens/camera";
import Maps from "src/screens/maps";
import NotificationsApp from "src/screens/notifications";
import SlideAnimation from "src/screens/slideAnimation";

import "react-native-gesture-handler";

export default function DrawerNavigaton() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Camera" component={CameraScreen} />
        <Drawer.Screen name="Maps" component={Maps} />
        <Drawer.Screen name="Notifications" component={NotificationsApp} />
        <Drawer.Screen name="SlideAnimation" component={SlideAnimation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
