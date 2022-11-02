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
  TextInput,
  Button,
} from "react-native";

export default function Add({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput placeholder="Nombre" style={styles.input} />
      </View>
      <Button title="button" />
    </SafeAreaView>
  ); //APP Container
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6D6D6",
  },
  input: {
    backgroundColor: "red",
    width: 190,
    height: 50,
    margin: 10,
    borderWidth: 1,
  },
}); //StyleSheet
