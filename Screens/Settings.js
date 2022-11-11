import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert,
  Modal,
  Switch,
} from "react-native";

export default function Settings({ navigation }) {
  const [Setting, setSetting] = useState([
    {
      name: "Desactivar Notificaciónes",
    },
    {
      name: "Silenciar Notificaciónes",
    },
    {
      name: "Ocultar Notificaciónes",
    },
    {
      name: "Sonido",
    },
    {
      name: "Notificaciónes de Reacción",
    },
    {
      name: "Previsulizar",
    },
    {
      name: "Restablecer Notificaciónes",
    },
  ]); //JSON Settings

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const ListSettings = ({ Setting }) => {
    return (
      <View style={styles.Setting}>
        <Text style={styles.SettingsName}>{Setting?.name}</Text>
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  }; //ListMessages

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="auto" />
      <View style={styles.SettinsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Setting}
          renderItem={({ item }) => <ListSettings Setting={item} />}
        />
      </View>
    </SafeAreaView> //APP Container
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  SettingsName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  Setting: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 20,
  },
  LogOutContainer: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "red",
    width: "80%",
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 120,
    alignItems: "center",
  },
  LogOutText: {
    color: "red",
    fontSize: 20,
    fontWeight: "700",
  },
}); //StyleSheet
