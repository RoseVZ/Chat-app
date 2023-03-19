import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Input, Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(" ");

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar style="light" />
      {/* <Text>Loginscreen</Text> */}
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/illustration-speech-bubble_53876-5625.jpg?w=1060&t=st=1679227138~exp=1679227738~hmac=51326d76423d368f1672323f154f76022a29595cc0ae5d24c7d97ffc4b60833b",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={{ height: 5 }}></View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChange={(x) => setEmail(x)}
        ></Input>
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChange={(x) => setPassword(x)}
        ></Input>
        <View style={{ height: 5 }}></View>
        <Button
          title="LOG IN"
          buttonStyle={{
            backgroundColor: "black",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: "bold" }}
        />
        <Button
          title="REGISTER"
          icon={{
            name: "user",
            type: "font-awesome",
            size: 15,
            color: "white",
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(111, 202, 186, 1)",
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
                  onPress={()=>navigation.navigate('Register')}
        />
      </View>
      <View style={{ height: 105 }}></View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputContainer: { width: 300 },
  buttonStyle: { backgroundColor: "#899499" },
});
export default LoginScreen;
