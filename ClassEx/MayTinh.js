import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { Component } from "react";

export default class MayTinh extends Component {
  constructor(props) {
    super(props);
    this.state = { Num1: 0, Num2: 0 };
  }
  Sum = () => {
    this.setState({
      result: parseInt(this.state.Num1) + parseInt(this.state.Num2),
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 3,
            backgroundColor: "white",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 150,
          }}
        >
          <TextInput
            ref={(input) => {
              this.textInput = input;
            }}
            placeholder="Nhập số"
            style={{
              marginRight: 30,
              marginLeft: 30,
              borderRadius: 10,
              marginTop: 10,
              backgroundColor: "lightgray",
              height: 50,
              padding: 10,
            }}
            onChangeText={(Num1) => {
              this.setState({ Num1 });
            }}
          ></TextInput>

          <View
            style={{
              flexDirection: "row",
              borderRadius: 10,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 30,
              backgroundColor: "lightgray",
              height: 50,
            }}
          >
            <TextInput
              ref={(input) => {
                this.textInput = input;
              }}
              placeholder="Nhập số"
              style={{
                flex: 1,
                marginRight: 10,

                borderRadius: 10,

                padding: 10,
              }}
              onChangeText={(Num2) => {
                this.setState({ Num2 });
              }}
            ></TextInput>
          </View>

          <View style={{}}>
            <TouchableOpacity
              style={{
                height: 50,
                marginRight: 180,
                marginLeft: 30,
                marginTop: 20,
                backgroundColor: "blue",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={this.Sum}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Tính</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 50,
                marginRight: 30,
                marginLeft: 190,
                marginBottom: 100,
                backgroundColor: "blue",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={this.textInput.clear()}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Cancle</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ marginLeft: 150 }}>{this.state.result}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
