import React, { useState } from "react"; 
import { StatusBar } from "expo-status-bar";
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
} from "react-native";

const UserImage = { uri: "https://reactjs.org/logo-og.png" }; //User Picture

const PeopleImage = {
  uri: "https://i.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8",
}; //People Image

export default function HomeScreen({ navigation }) {
  const [messages, setmessages] = useState([
    {
      name: "Gaston Collazo",
      MessagesHour: "8:30",
      Description: "Hello World",
    },
    {
      name: "Juan Pablo Stekl",
      MessagesHour: "10:10",
      Description: "World Hello",
    },
    {
      name: "Seba Salgado",
      MessagesHour: "5:23",
      Description: "Hello Hello",
    },
    {
      name: "Mati Fernandez",
      MessagesHour: "2:30",
      Description: "Hello World 2",
    },
    {
      name: "Gaston Collazo",
      MessagesHour: "8:30",
      Description: "Hello World",
    },
    {
      name: "Juan Pablo Stekl",
      MessagesHour: "10:10",
      Description: "World Hello",
    },
    {
      name: "Seba Salgado",
      MessagesHour: "5:23",
      Description: "Hello Hello",
    },
    {
      name: "Mati Fernandez",
      MessagesHour: "2:30",
      Description: "Hello World 2",
    },
    {
      name: "Gaston Collazo",
      MessagesHour: "8:30",
      Description: "Hello World",
    },
    {
      name: "Juan Pablo Stekl",
      MessagesHour: "10:10",
      Description: "World Hello",
    },
    {
      name: "Seba Salgado",
      MessagesHour: "5:23",
      Description: "Hello Hello",
    },
    {
      name: "Mati Fernandez",
      MessagesHour: "2:30",
      Description: "Hello World 2",
    },
  ]); //JSON Messages

  const ListMessages = ({ messages }) => {
    return (
      <View style={styles.ListMessages}>
        <Image
          source={PeopleImage}
          style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }}
        />
        <View style={styles.Container}>
          <View style={styles.ContainerMessage}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "black",
                flex: 1,
              }}
              numberOfLines={1}
            >
              {messages?.name}
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: "black",
              }}
            >
              {messages?.MessagesHour}
            </Text>
          </View>
          <View style={styles.DescriptionMessage}>
            <Icon name="done" size={18} />
            <Text style={{ fontSize: 15 }} numberOfLines={1}>
              {messages?.Description}
            </Text>
          </View>
        </View>
      </View>
    );
  }; //ListMessages

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.TopBarContainer}>
        <Image source={UserImage} style={styles.TopBarImg} />
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Icon name="settings" size={40} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <Icon name="add" size={40} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
          <Icon name="edit" size={40} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={styles.FlatList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={messages}
          renderItem={({ item }) => <ListMessages messages={item} />}
        />
      </View>
    </SafeAreaView>
  ); //APP Container
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8FD2D8",
  },
  TopBarContainer: {
    position: "absolute",
    backgroundColor: "#00B6C8",
    top: 0,
    width: "100%",
    height: 120,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  TopBarImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  FlatList: {
    marginTop: 115,
    backgroundColor: "#8FD2D8",
    height: "85%",
  },
  ListMessages: {
    padding: 15,
    backgroundColor: "#8FD2D8",
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  Container: {
    flex: 1,
  },
  ContainerMessage: {
    flex: 1,
    flexDirection: "row",
  },
  DescriptionMessage: {
    flexDirection: "row",
  },
}); //StyleSheet
