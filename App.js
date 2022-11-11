import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home.js";
import EditScreen from "./Screens/Edit.js";
import Settings from "./Screens/Settings.js";
import Add from "./Screens/Add.js";
import Login from "./Screens/Login.js";


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#5a86fd" },
          headerTintColor: "black",
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerBackVisible: false, headerShadowVisible: false}} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Add Chat" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
