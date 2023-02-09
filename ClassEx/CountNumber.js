import { Text, StyleSheet, View, SafeAreaView, Button } from "react-native";
import React, { Component } from "react";

export default class CountNumber extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <SafeAreaView style={styles.contend}>
        <Text style={styles.text}>{this.state.count}</Text>
        <Text style={styles.text}>{this.props.x}</Text>
        <Button
          title="next"
          onPress={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        ></Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contend: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    flex: 1,
    fontSize: 30,
    color: "purple",
    marginTop: 50,
  },

  button: {
    marginBottom: 40,
    borderRadius: 50,
  },
});
