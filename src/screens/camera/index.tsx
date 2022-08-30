import { useState } from "react";

import { View, Text, TouchableOpacity, Modal, Button } from "react-native";

import { Camera, CameraType } from "expo-camera";

import styles from "./style";

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return (
      <View>
        <Text>Câmera sem permissão.</Text>
      </View>
    );
  }

  if (!permission?.granted ?? true) {
    return (
      <View style={styles.container}>
        <Modal animationType="slide">
          <Text>É necessário permitir acesso aos recursos do dispositivo.</Text>
          <Button title="Permitir" onPress={requestPermission}></Button>
        </Modal>
      </View>
    );
  }

  function handleChangeCamera() {
    let newType = type === CameraType.back ? CameraType.front : CameraType.back;
    setType(newType);
  }

  return (
    <View style={styles.container}>
      <Camera type={type} style={styles.camera}>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={handleChangeCamera}>
            <Text style={styles.buttonText}>Mudar câmera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
