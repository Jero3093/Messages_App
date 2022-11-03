import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home.js";
import EditScreen from "./Screens/Edit.js";
import Settings from "./Screens/Settings.js";
import Add from "./Screens/Add.js";
import User from "./Screens/User.js";


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#00B6C8' }, headerTintColor: 'black'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Add Chat" component={Add} />
        <Stack.Screen name="Edit User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
