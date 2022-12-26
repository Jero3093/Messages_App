import React, { useState, useEffect } from "react";
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
import { Entypo } from "@expo/vector-icons"; //Expo Icons
import { AntDesign } from "@expo/vector-icons"; //Expo Icons
import { UserData } from "../data.js"; //Users JSON

export default function Chat({ route, navigation }) {
  const { UserId } = route.params; //Serach the ID of the User from the JSON

  const [User, setUser] = useState({}); //User State

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromJson();
    }); //Get the data from the JSON once

    return unsubscribe;
  }, [navigation]);

  const getDataFromJson = async () => {
    for (let index = 0; index < UserData.length; index++) {
      if (UserData[index].id === UserId) {
        setUser(UserData[index]);
        return;
      }
    }
  }; //Search for an specific ID then update the product states

  const [msg, setmsg] = useState([]); //Messages Values

  const [textInput, settextInput] = useState(); //Text Input Values

  const TopBarContainer = () => {
    return (
      <View style={styles.TopBarContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Entypo name="chevron-thin-left" size={35} />
        </TouchableOpacity>
        <View style={styles.TopBarContent}>
          <Image source={User.img} style={styles.TopBarImg} />
          <Text style={{ fontSize: 25 }} numberOfLines={1}>
            {User?.name}
          </Text>
        </View>
        <View style={styles.TopBarButtons}>
          <Entypo name="camera" size={25} style={styles.TopBarIcon} />
          <Entypo name="phone" size={25} />
        </View>
      </View>
    );
  }; //TopBar Container

  const ListChatMessages = ({ msg }) => {
    return (
      <>
        <View style={styles.ChatMsg}>
          <Text style={styles.ChatMsgText}>{msg?.content}</Text>
        </View>
        <View style={styles.ChatMsgOther}>
          <Text style={styles.ChatMsgText}>{User.Description}</Text>
        </View>
      </>
    );
  }; //List Chat Messages Container

  const AddMsg = () => {
    if (textInput === "") {
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
          <AntDesign name="arrowup" size={35} color="#fff" />
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
  Footer: {
    backgroundColor: "#5a86fd",
    width: "100%",
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 10,
    marginTop: "auto",
  },
  FooterInput: {
    backgroundColor: "#fff",
    borderWidth: 2,
    width: "65%",
    height: 40,
    padding: 10,
    borderRadius: 15,
  },
  FlatListContainer: {
    width: "100%",
    height: "88%",
  },
  ChatMsg: {
    backgroundColor: "#67FF8E",
    maxWidth: 310,
    padding: 10,
    marginBottom: 10,
    marginLeft: "auto",
    alignContent: "stretch",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ChatMsgText: {
    fontSize: 16,
  },
  ChatMsgOther: {
    backgroundColor: "grey",
    maxWidth: 310,
    padding: 10,
    marginBottom: 10,
    marginRight: "auto",
    alignContent: "stretch",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
  },
}); //StyleSheet
