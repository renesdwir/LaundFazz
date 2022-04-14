
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './src/screens/Home'
import StackNav from './src/stacks/StackNav'
import History from './src/screens/History'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#002851',
        tabBarInactiveTintColor: '#002851',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={'#002851'} />;

        },
        // tabBarStyle: {
        //   backgroundColor: 'black',
        //   borderTopColor: 'transparent'
        // }
      })} >
        <Tab.Screen name="Home" component={StackNav} options={{ headerShown: false }} />
        <Tab.Screen name="History" component={History} options={{ headerShown: false }} />
        {/* <Tab.Screen name="StackNav" component={StackNav} options={{ headerShown: false }} /> */}
      </Tab.Navigator>
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
