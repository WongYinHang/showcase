import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Setting a timer for a long period of time'])
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterSrceen'
import HomeScreen from './screens/HomeScreen'
import AddChatScreen from './screens/AddChatScreen'
import ChatScreen from './screens/ChatScreen'
export default function App() {

  const Stack = createStackNavigator();
  const globalScreenOption = {

    headerStyle: { backgroundColor: '#2C6BED' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',

  }
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOption}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChatScreen" component={AddChatScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
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
