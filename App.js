import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const globalOptions = {
  headerStyle: { backgroundColor: "#899499" },
  headerTitleStyle: { color: "white" },
  headerTintColor:"white"
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalOptions}>
        <Stack.Screen
          options={{
            title: "Login",
          }}
          name="Login"
          component={LoginScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{
            title: "Register",
          }}
          name="Register"
          component={RegisterScreen}
          
          ></Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
