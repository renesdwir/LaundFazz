import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./src/screens/Home";
import StackNav from "./src/stacks/StackNav";
import History from "./src/screens/History";
import TabsNav from "./src/tabs/TabsNav";
import Login from "./src/screens/Login";
import Action from "./src/screens/Action";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import io from "socket.io-client";
import Chat from "./src/screens/Chat";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TabsNav"
            component={TabsNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Action"
            component={Action}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
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
