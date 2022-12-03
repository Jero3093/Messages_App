import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

export default function Add({ navigation }) {
  const authAdd = () => {
    if (authValue == "") {
      Alert.alert("Error", "Debe introducir un Codigo");
    } else {
      const values = {
        CodeValue: authValue,
      };
      setCodevalues([...Codevalues, values]);
      setauthValue("");
      Alert.alert("Exito", "El Contacto fue Agregado");
    }
  }; //Authentication to Add Contact

  const [authValue, setauthValue] = useState([]); //Authentication Values

  const [Codevalues, setCodevalues] = useState([]); //Contact Code Value

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="User Code"
          style={styles.input}
          value={authValue}
          onChangeText={(textCode) => setauthValue(textCode)}
        />
        <TouchableOpacity
          title="Add to Chats"
          style={styles.button}
          onPress={authAdd}
        >
          <Text style={styles.buttonText}>Add to Chats</Text>
        </TouchableOpacity>
          <Text style={styles.Code}>Your Code is: isn738fdn2</Text>
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
  buttonText: {
    fontSize: 16,
  },
  Code: {
    color: "blacK",
    fontSize: 20,
    marginTop: 35,
  },
}); //StyleSheet
