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
import UserImg from "../assets/UserIMG.png";
import { UserData } from "../data.js";

export default function HomeScreen({ navigation }) {
  const ListMessages = ({ UserData }) => {
    return (
      <TouchableOpacity
        style={styles.ListMessages}
        onPress={() => navigation.navigate("Chat", {UserId: UserData.id})}
      >
        <Image
          source={UserData?.img}
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
              {UserData?.name}
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: "black",
              }}
            >
              {UserData?.MessagesHour}
            </Text>
          </View>
          <View style={styles.DescriptionMessage}>
            <Icon name="done" size={18} />
            <Text style={{ fontSize: 15 }} numberOfLines={1}>
              {UserData?.Description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }; //ListMessages

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.TopBarContainer}>
        <Image source={UserImg} style={styles.TopBarImg} />
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Icon name="settings" size={40} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Add Contact")}>
          <Icon name="add" size={40} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
          <Icon name="edit" size={40} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={styles.FlatList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={UserData}
          renderItem={({ item }) => (
            <ListMessages UserData={item} key={item.id} />
          )}
        />
      </View>
    </SafeAreaView>
  ); //APP Container
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  TopBarContainer: {
    flex: 1,
    backgroundColor: "#5a86fd",
    position: "absolute",
    top: 0,
    width: "100%",
    height: 160,
    paddingTop: 50,
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
