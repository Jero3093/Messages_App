import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
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
      name: "Resatablecer Notificaciónes",
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
  };

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
      <TouchableOpacity onPress={() => navigation.navigate("Edit User")}>
        <View style={styles.SettingsUserContainer}>
          <Text style={styles.SettingsUser}>Configurar Usuario</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView> //APP Container
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8FD2D8",
  },
  SettingsName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  Setting: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8FD2D8",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 20,
  },
  SettingsUserContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8FD2D8",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 20,
    marginTop: 35,
  },
  SettingsUser: {
    fontSize: 18,
    fontWeight: "bold",
  },
}); //StyleSheet
