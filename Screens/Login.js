import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  const [Email, setEmail] = useState(""); //Emails

  const [Password, setPassword] = useState(""); //Passwords

  return (
    <KeyboardAvoidingView tyle={styles.container} behavior={"padding"}>
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="Email"
          value={Email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={Password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.button, styles.buttonOutLine]}
        >
          <Text style={styles.buttonOutLineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  ); //APP Container
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  InputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  ButtonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutLine: {
    backgroundColor: "#fff",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 16,
  },
  buttonOutLine: {
    color: "#0782F9",
    fontWeight: 700,
    fontSize: 16,
  },
}); //StyleSheet
