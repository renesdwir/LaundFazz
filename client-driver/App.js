
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './src/screens/Home'
import StackNav from './src/stacks/StackNav'
import History from './src/screens/History'
import TabsNav from './src/tabs/TabsNav';
import Login from './src/screens/Login';
import Action from './src/screens/Action';

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="TabsNav" component={TabsNav} options={{ headerShown: false }} />
        <Stack.Screen name="Action" component={Action} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
