import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "src/screens/home";
import CameraScreen from "src/screens/camera";
import Maps from "src/screens/maps";

const { Navigator, Screen } = createStackNavigator();

//TODO: Criar constantes de routeName

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Camera" component={CameraScreen} />
        <Screen name="Maps" component={Maps} />
      </Navigator>
    </NavigationContainer>
  );
}
