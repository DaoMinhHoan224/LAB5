import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { Component } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class Notifications extends Component {
  render() {
    return (
      <View>
        <Text>Notifications</Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("fsdf");
          }}
          style={{
            height: 20,
            width: 20,
            marginLeft: 30,
            tintColor: "blue",
            marginTop: 30,
          }}
        >
          <Image
            style={{
              height: 20,
              width: 20,
              marginLeft: 30,
              tintColor: "blue",
              marginBottom: 20,
            }}
            source={require("../ImageResources/507257.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
