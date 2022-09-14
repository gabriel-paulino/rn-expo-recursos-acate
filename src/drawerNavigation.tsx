import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "src/screens/home";
import CameraScreen from "src/screens/camera";
import Maps from "src/screens/maps";
import NotificationsApp from "src/screens/notifications";
import SlideAnimation from "src/screens/slideAnimation";
import SlideHorizontalAnimation from "src/screens/slideHorizontalAnimation";

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
        <Drawer.Screen name="Slide Animation" component={SlideAnimation} />
        <Drawer.Screen name="Slide Horizontal Animation" component={SlideHorizontalAnimation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
