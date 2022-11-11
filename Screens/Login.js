import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../firebase";


const TopImage = {
  uri: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
}; //Top Container Image

export default function Login({ navigation }) {
  const [Email, setEmail] = useState(""); //Emails

  const [Password, setPassword] = useState(""); //Passwords

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((UserCredentials) => {
        const user = UserCredentials.user;
      });
      Alert.alert("Check","Register Success")
  }; //Funcion de Registro de Usuario

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(Email, Password).then((UserCredentials) => {
      const user = UserCredentials.user;
    });
  }; //Funcion de Login de Usuario

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
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
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
    borderColor: "#00CB3D",
    borderWidth: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonOutLineText: {
    color: "#00CB3D",
    fontWeight: "bold",
    fontSize: 16,
  },
}); //StyleSheet
