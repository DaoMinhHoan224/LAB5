import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

export default function MayTinhF() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);
  const total1 = () => {
    setTotal(total1);
  };

  function addTogether() {
    setTotal(total);
    Alert.alert("Alert", "Tulos: " + total);
  }
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
          placeholder="0"
          style={{
            marginRight: 30,
            marginLeft: 30,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: "lightgray",
            height: 50,
            padding: 10,
          }}
          onChangeText={(v) => {
            setNumber1(Number.parseInt(v));
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
            placeholder="0"
            style={{
              flex: 1,
              marginRight: 10,

              borderRadius: 10,

              padding: 10,
            }}
            onChange={(e) => {
              setNumber2(Number.parseInt(e.nativeEvent.text));
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
            onPress={() => {}}
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
            onPress={() => {
              addTogether;
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Cancle</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ marginLeft: 150 }}>{total1}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
