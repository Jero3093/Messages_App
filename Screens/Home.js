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
} from "react-native";

const UserImage = { uri: "https://reactjs.org/logo-og.png" }; //User Picture

export default function HomeScreen({ navigation }) {
  const [messages, setmessages] = useState([
    {
      img: {
        uri: "https://i.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8",
      },
      name: "Gaston Collazo",
      MessagesHour: "8:30",
      Description: "Hello World",
    },
    {
      img: {
        uri: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
      },
      name: "Juan Pablo Stekl",
      MessagesHour: "10:10",
      Description: "World Hello",
    },
    {
      img: {
        uri: "https://i.picsum.photos/id/807/200/300.jpg?hmac=9ZZk1Nj28qIecGuVvozSN7I4LW0zotTPqeYfdGR3YdE",
      },
      name: "Seba Salgado",
      MessagesHour: "5:23",
      Description: "Hello Hello",
    },
    {
      img: {
        uri: "https://i.picsum.photos/id/249/200/300.jpg?hmac=HXJz3fKmXquFNHrfyd1yRHUYx9SheA_j2gbbya_4mlA",
      },
      name: "Mati Fernandez",
      MessagesHour: "2:30",
      Description: "Hello World 2",
    },
    {
      img: {
        uri: "https://i.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8",
      },
      name: "Gaston Collazo",
      MessagesHour: "8:30",
      Description: "Hello World",
    },
    {
      img: {
        uri: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
      },
      name: "Juan Pablo Stekl",
      MessagesHour: "10:10",
      Description: "World Hello",
    },
    {
      img: {
        uri: "https://i.picsum.photos/id/807/200/300.jpg?hmac=9ZZk1Nj28qIecGuVvozSN7I4LW0zotTPqeYfdGR3YdE",
      },
      name: "Seba Salgado",
      MessagesHour: "5:23",
      Description: "Hello Hello",
    },
    {
      img: {
        uri: "https://i.picsum.photos/id/249/200/300.jpg?hmac=HXJz3fKmXquFNHrfyd1yRHUYx9SheA_j2gbbya_4mlA",
      },
      name: "Mati Fernandez",
      MessagesHour: "2:30",
      Description: "Hello World 2",
    },
    {
      img: {
        uri: "https://i.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8",
      },
      name: "Gaston Collazo",
      MessagesHour: "8:30",
      Description: "Hello World",
    },
    {
      img: {
        uri: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
      },
      name: "Juan Pablo Stekl",
      MessagesHour: "10:10",
      Description: "World Hello",
    },
    {
      img: {
        uri: "https://i.picsum.photos/id/807/200/300.jpg?hmac=9ZZk1Nj28qIecGuVvozSN7I4LW0zotTPqeYfdGR3YdE",
      },
      name: "Seba Salgado",
      MessagesHour: "5:23",
      Description: "Hello Hello",
    },
    {
      img: {
        uri: "https://i.picsum.photos/id/249/200/300.jpg?hmac=HXJz3fKmXquFNHrfyd1yRHUYx9SheA_j2gbbya_4mlA",
      },
      name: "Mati Fernandez",
      MessagesHour: "2:30",
      Description: "Hello World 2",
    },
  ]); //JSON Messages

  const ListMessages = ({ messages }) => {
    return (
      <View style={styles.ListMessages}>
        <Image
          source={messages?.img}
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
        <TouchableOpacity onPress={() => navigation.navigate("Add Chat")}>
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
    backgroundColor: "transparent",
  },
  TopBarContainer: {
    position: "absolute",
    backgroundColor: "#5a86fd",
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
    backgroundColor: "#fff",
    height: "90%",
  },
  ListMessages: {
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
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
