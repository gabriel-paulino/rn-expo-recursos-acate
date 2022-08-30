import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";

import Home from "./screens/home";
import CameraScreen from "./screens/camera";
import Maps from "./screens/maps";

export default function BottomNavigaton() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#08d130'
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{
            tabBarLabel: "Camera",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="camera" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={Maps}
          options={{
            tabBarLabel: "Maps",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="map" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
