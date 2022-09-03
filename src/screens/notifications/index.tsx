import { View, Text, Button, Platform } from "react-native";

import { useState, useEffect, useRef } from "react";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import styles from "./style";

//Escopo de outras funcionalidas que será invocada
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    handleShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});

export default function NotificationsApp() {
  const [expoToken, setExpoToken] = useState<string>("");
  const [notification, setNotification] = useState<any>(false);
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoToken(token ?? "")
    );
    notificationListener.current = Notifications.addNotificationReceivedListener(
      notification => {
        setNotification(notification)
      }
    )

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      response => console.log(response)
    )
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      }

  });

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Olá Acate",
        body: "Isso é uma notificação",
        sound: './assets/notifications.wav',
        data: { result: "Qualquer coisa" },
        vibrate: [0, 250, 250, 250],
      },
      trigger: { seconds: 3 },
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (existingStatus === "granted") {
        alert("Falha na notificação.");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;

    } else {
      alert("Use um dispositivo fisico para visualizar");
    }
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF23177C",
      });
    }

    return token;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Token: {expoToken ?? ""}</Text>
      <View style={styles.notificationContainer}>
        <Text>Title: { notification?.request?.content?.title ?? ''}</Text>
        <Text>Body: { notification?.request?.content?.body ?? ''}</Text>
        <Text>Data: { notification?.date ?? ''}</Text>
      </View>
      <Button
        title="Notifications"
        onPress={async () => {
          await schedulePushNotification();
        }}
      ></Button>
    </View>
  );
}
