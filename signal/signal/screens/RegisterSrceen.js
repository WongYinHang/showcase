import React from 'react'
import { View, KeyboardAvoidingView, StyleSheet, Image } from 'react-native'
import { StatusBar } from "expo-status-bar"
import { Input, Button, Text } from 'react-native-elements'
import { useState, useLayoutEffect } from 'react'
import { auth } from '../firebase'
const RegisterSrceen = ({ navigation }) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const SignUp = () => {
        console.log(email);
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageUrl || "https://cencup.com/wp-content/themes/cencup/images/bp_default_avatar.jpg",

                })
            })
            .catch((error) => alert(error.message));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
            headerTitleAlign: "center",
        })
    }, [navigation])

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style={{ marginBottom: 50 }} >Create your signal account!</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" autoFocus type="text" value={name} onChangeText={(text) => setName(text)} />
                <Input placeholder="Email" type="email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" type="password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
                <Input placeholder="Image Url" type="text" value={imageUrl} onChangeText={(text) => setImageUrl(text)} />

            </View>
            <Button containerStyle={styles.button} onPress={SignUp} title="Sign Up" />
        </KeyboardAvoidingView>
    )
}

export default RegisterSrceen

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
})
