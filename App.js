import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import Page1Navigationn from "./Lab5/Page1Navigationn";
import Page2 from "./Lab5/Page2";
import bai1 from "./ClassEx/bai1";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={bai1}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Screen2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
    // {/* <View style={styles.container}>
    //       {/* <CountNumber></CountNumber>
    //       <CountNumberFunction x={10}></CountNumberFunction> */}
    //       {/* <LoginScreen></LoginScreen> */}
    //       {/* <MayTinh></MayTinh> */}
    //       {/* <StackScreen></StackScreen> */}
    //       <StatusBar style="auto" />
    //     </View> */}
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
