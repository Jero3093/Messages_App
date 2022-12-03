import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
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
  Setting: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 20,
    marginVertical: 10,
  },
  SettingsName: {
    fontSize: 18,
    fontWeight: "bold",
  },
}); //StyleSheet
