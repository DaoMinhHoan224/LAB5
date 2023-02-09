import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import Notifications from "./Notifications";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Notifications"
        component={Notifications}
      />
    </Stack.Navigator>
  );
}
export default class StackScreen extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack></MyStack>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
