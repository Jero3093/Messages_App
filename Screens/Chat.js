import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Chat({ navigation }) {
  const [msg, setmsg] = useState([]); //Messages Values

  const [textInput, settextInput] = useState(); //Text Input Values

  const UserImg = {
    uri: "https://i.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8",
  }; //User Image

  const TopBarContainer = () => {
    return (
      <View style={styles.TopBarContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Entypo name="chevron-thin-left" size={35} />
        </TouchableOpacity>
        <View style={styles.TopBarContent}>
          <Image source={UserImg} style={styles.TopBarImg} />
          <Text style={{ fontSize: 25 }} numberOfLines={1}>
            Gaston Collazo
          </Text>
        </View>
        <View style={styles.TopBarButtons}>
          <Entypo name="camera" size={25} style={styles.TopBarIcon} />
          <Entypo name="phone" size={25} />
        </View>
      </View>
    );
  }; //Top Bar Container

  const ListChatMessages = ({ msg }) => {
    return (
      <View style={styles.ChatMsg}>
        <Text style={styles.ChatMsgText}>{msg?.content}</Text>
      </View>
    );
  }; //List Chat Messages Container

  const AddMsg = () => {
    if (textInput == "") {
      Alert.alert("Error al Enviar", "Escriba el Mensaje");
    } else {
      const newMsg = {
        content: textInput,
      };
      setmsg([...msg, newMsg]);
      settextInput("");
    }
  }; //Add Messages to Chat

  return (
    <KeyboardAvoidingView style={styles.container} behavior={"height"}>
      <TopBarContainer />
      <View style={styles.FlatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={msg}
          renderItem={({ item }) => <ListChatMessages msg={item} />}
        />
      </View>
      <View style={styles.Footer}>
        <TextInput
          placeholder="Write Here"
          style={styles.FooterInput}
          value={textInput}
          onChangeText={(text) => settextInput(text)}
        />
        <TouchableOpacity onPress={AddMsg}>
          <Entypo name="upload" color={"white"} size={25} />
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
  TopBarContainer: {
    backgroundColor: "#5a86fd",
    width: "100%",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 35,
    justifyContent: "space-around",
    marginBottom: 5,
  },
  TopBarImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  TopBarContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  TopBarButtons: {
    flexDirection: "row",
  },
  TopBarIcon: {
    marginRight: 15,
  },
  ListChatMsg: {
    width: "100%",
  },
  Footer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#5a86fd",
    width: "100%",
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 10,
  },
  FooterInput: {
    borderWidth: 2,
    width: "65%",
    height: 40,
    borderRadius: "50%",
    padding: 10,
    backgroundColor: "#fff",
  },
  FlatListContainer: {
    width: "100%",
    height: "78%",
  },
  ChatMsg: {
    backgroundColor: "#67FF8E",
    marginBottom: 10,
    padding: 10,
    borderRadius: "10%",
    marginLeft: "auto",
    alignContent: "stretch",
  },
  ChatMsgText: {
    fontSize: 16,
  },
}); //StyleSheet
