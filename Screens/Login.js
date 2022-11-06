import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TopImage = {
  uri: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
}; //Top Container Image

export default function Login({ navigation }) {
  const [Email, setEmail] = useState(""); //Emails

  const [Password, setPassword] = useState(""); //Passwords

  return (
    <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
      <View style={styles.TopContainer}>
        <Image source={TopImage} style={{ width: 100, height: 100 }} />
      </View>
      <View style={styles.LoginContainer}>
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
            secureTextEntry={true}
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
      </View>
    </KeyboardAvoidingView>
  ); //APP Container
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  TopContainer: {
    width: "100%",
    height: "30%",
    position: "absolute",
    top: 0,
    backgroundColor: "#5a86fd",
    borderBottomEndRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  LoginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  InputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#12121212",
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  ButtonContainer: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#5a86fd",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutLine: {
    backgroundColor: "#fff",
    marginTop: 5,
    borderColor: "#00FF7C",
    borderWidth: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonOutLineText: {
    color: "#00FF7C",
    fontWeight: "bold",
    fontSize: 16,
  },
}); //StyleSheet
