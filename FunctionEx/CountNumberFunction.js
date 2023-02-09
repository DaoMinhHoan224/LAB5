import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CountNumberFunction = (props) => {
  const [count, setCount] = useState(0);
  const nexthalder = () => {
    setCount(count + 1);
  };
  const prevhalder = () => {
    if (count != 0) setCount(count - 1);
  };

  const [count1, setCount1] = useState(0);
  const nexthalder1 = () => {
    setCount1(count1 + 1);
  };
  const prevhalder1 = () => {
    if (count1 != 0) setCount1(count1 - 1);
  };
  const [congSo, setTongso] = useState(0);

  const plus = () => {
    setTongso(count + count1);
  };

  const [first, setFirst] = useState(props.x);
  const first1 = () => {
    setFirst(first);
  };

  return (
    <View style={styles.contend}>
      <Text style={styles.text}>{count}</Text>
      <Text style={styles.text}>{count1}</Text>
      <Text style={styles.text}>
        {count} + {count1}
      </Text>
      <Text style={styles.text}>{congSo}</Text>
      <Text style={styles.text}>{first}</Text>
      <Button title="Plus" onPress={plus}></Button>
      <Button title="Next" onPress={nexthalder}></Button>
      <Button title="Prev" onPress={prevhalder}></Button>
      <Button title="Next1" onPress={nexthalder1}></Button>
      <Button title="Prev1" onPress={prevhalder1}></Button>
    </View>
  );
};

export default CountNumberFunction;

const styles = StyleSheet.create({
  contend: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginBottom: 20,
  },
});
