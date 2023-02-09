import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { Component } from "react";

export default class LoginScreen extends Component {
  state = {
    userName: "",
    passWord: "",
    isShow: true,
    bgr: "lightblue",
    showtext: true,
  };
  setPassWordVisibility = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#5BC0F8",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              height: 20,
              width: 20,
              marginLeft: 20,
              marginBottom: 30,
              tintColor: "white",
            }}
            source={require("../ImageResources/507257.png")}
          />
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
              marginLeft: 20,
            }}
          >
            Sign in
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            backgroundColor: "white",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginLeft: 30,
              marginTop: 30,
            }}
          >
            Welcome Back
          </Text>

          <Text
            style={{
              marginLeft: 30,
              color: "lightgray",
            }}
          >
            Hello there. Sign in to continue
          </Text>

          <Text
            style={{
              marginLeft: 30,
              marginTop: 30,
              color: "lightgray",
            }}
          >
            Username or email
          </Text>

          <TextInput
            placeholder="Enter your Usename or Email"
            style={{
              marginRight: 30,
              marginLeft: 30,
              borderRadius: 10,
              marginTop: 10,
              backgroundColor: "lightgray",
              height: 50,
              padding: 10,
            }}
            onChangeText={(user) => {
              this.setState({ userName: user });
            }}
          ></TextInput>

          <Text
            style={{
              marginLeft: 30,
              marginTop: 20,
              color: "lightgray",
            }}
          >
            Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderRadius: 10,
              marginLeft: 30,
              marginRight: 30,
              backgroundColor: "lightgray",
              height: 50,
            }}
          >
            <TextInput
              placeholder="Enter your Password"
              style={{
                flex: 1,
                marginRight: 10,

                borderRadius: 10,

                padding: 10,
              }}
              onChangeText={(pass) => {
                this.setState({ passWord: pass });
                if (this.state.passWord.length >= 4) {
                  this.setState({ bgr: "#5BC0F8" });
                } else {
                  this.setState({ bgr: "lightblue" });
                }
              }}
              secureTextEntry={this.state.isShow}
            ></TextInput>
            <TouchableOpacity onPress={this.setPassWordVisibility}>
              <Image
                style={{
                  marginRight: 20,
                  marginTop: 15,
                  height: 20,
                  width: 20,
                }}
                source={
                  this.state.isShow == false
                    ? require("../ImageResources/eyes.png")
                    : require("../ImageResources/2355322.png")
                }
              />
            </TouchableOpacity>
          </View>
          {}
          <Text
            style={{
              fontWeight: "bold",
              color: "blue",
              marginLeft: 30,
              marginTop: 20,
            }}
          >
            Forgot Password?
          </Text>

          <TouchableOpacity
            style={{
              height: 50,
              marginRight: 30,
              marginLeft: 30,
              marginTop: 20,
              backgroundColor: this.state.bgr,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              if (
                this.state.userName == "Minhhoan" &&
                this.state.passWord == "hoansieudeptrai"
              ) {
                Alert.alert("á đù");
              } else {
                // Alert.alert("Sai");
                const { navigation } = this.props;
                navigation.navigate("Notifications");
              }
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
