import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Action from "../screens/Action"
import Chat from "../screens/Chat";
import Home from "../screens/Home"
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (

        <Stack.Navigator >
            {/* <Stack.Screen name="Chat" component={Chat} /> */}
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Action" component={Action} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}