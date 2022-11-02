import { StatusBar } from "expo-status-bar";
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
} from "react-native";

export default function User({ navigation }) {
  return <SafeAreaView style={styles.container}></SafeAreaView>; //APP Container
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6D6D6",
  },
}); //StyleSheet