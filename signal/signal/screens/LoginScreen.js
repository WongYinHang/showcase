import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from "expo-status-bar"
import { Button, Input, Image } from 'react-native-elements'
import { auth } from '../firebase'
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error))
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: "center",
        })

    }, [navigation])
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Home")
            }
        })
        return unsubscribe;
    }, [])
    return (
        <KeyboardAvoidingView style={styles.container} >
            <StatusBar style="light" />

            <Image
                source={{
                    uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
                }}
                style={{ width: 200, height: 200 }}

            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" type="password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />


            </View>

            <Button style={styles.button} onPress={signIn} title="Login" />
            <Button style={styles.button} onPress={() => navigation.navigate("Register")} type="outline" title="Register" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
export default LoginScreen
