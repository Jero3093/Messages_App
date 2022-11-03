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
  KeyboardAvoidingView,
} from "react-native";

export default function Add({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.InputContainer}>
        <TextInput placeholder="Nombre" style={styles.input} />
        <TextInput placeholder="Codigo de Usuario" style={styles.input} />
        <TouchableOpacity title="Add to Chats" style={styles.button}>
          <Text style={styles.buttonText}>Add to Chats</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  ); //APP Container
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  InputContainer: {
    alignItems: "center",
  },
  input: {
    backgroundColor: "#D6D6D6",
    width: "80%",
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    width: "70%",
    height: 50,
    marginTop: 10,
    backgroundColor: "#00B6C8",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
}); //StyleSheet
