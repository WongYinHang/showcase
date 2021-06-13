import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { LogBox } from 'react-native';

import { View, Text } from 'react-native'

import * as firebase from 'firebase'

import 'firebase/firestore';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer,
  applyMiddleware(thunk)

)



const firebaseConfig = {
  apiKey: "AIzaSyDBQx3pQI7DHjbDVvmJWCzGq73K3q8uIj0",
  authDomain: "instagram-phone.firebaseapp.com",
  projectId: "instagram-phone",
  storageBucket: "instagram-phone.appspot.com",
  messagingSenderId: "540692504996",
  appId: "1:540692504996:web:eedf61c4a58c0c1e752131",
  measurementId: "G-0VMER59NJ7"
};

if (firebase.apps.length === 0) {
  console.log("initializing firebase...");
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main'
import AddScreen from './components/main/Add'
import SaveScreen from './components/main/Save'
import CommentScreen from './components/main/Comment'
//LogBox.ignoreLogs(['Setting a timer for a long period of time'])
const Stack = createStackNavigator();


export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    console.log("Going to App page...");
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        console.log("No user logged in");
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation} />
            <Stack.Screen name="Save" component={SaveScreen} navigation={this.props.navigation} />
            <Stack.Screen name="Comment" component={CommentScreen} navigation={this.props.navigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App