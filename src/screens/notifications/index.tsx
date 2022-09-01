import { View, Text, Button } from "react-native";

import { useState, useEffect, useRef } from "react";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import styles from "./style";

//Escopo de outras funcionalidas que será invocada
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    handleShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowAlert: false,
  }),
});

export default function NotificationsApp() {
  const [expoToken, setExpoToken] = useState<string>("");
  const [notification, setNotification] = useState<boolean>(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    console.log("Notifications");
  }, []);

async function schedulePushNotification(){
  await Notifications.scheduleNotificationAsync({
    content: {
        title: "Olá",
        body: 'Isso é uma notificação',
        data: { result: 'Qualquer coisa'}
    },
    trigger:{ seconds: 5}
  })
};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Token: {expoToken ?? ""}</Text>
      <View style={styles.notificationContainer}>
        <Text>Title: </Text>
        <Text>Body: </Text>
        <Text>Data: </Text>
      </View>
      <Button
        title="Notifications"
        onPress={() => alert("Notifications")}
      ></Button>
    </View>
  );
}
