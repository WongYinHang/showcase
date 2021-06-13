import React, { useLayoutEffect, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import CustomListItem from '../components/CustomListItem'
import { auth, db } from '../firebase'

const Homescreen = ({ navigation }) => {
    const [chats, setChats] = useState([]);


    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
        return unsubscribe
    }, [])

    const signOut = () => {
        console.log("object");
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
    }
    useLayoutEffect(() => {
        const unsubscribe =
            navigation.setOptions({
                title: "Signal",
                headerStyle: { backgroundColor: '#fff' },
                headerTitleStyle: { color: "black" },
                headerTintColor: "black",
                headerTitleAlign: "center",
                headerLeft: () => (
                    <View style={{ marginLeft: 20 }}>
                        <TouchableOpacity onPress={signOut} activeOpacity={0.5}>
                            <Avatar rounded
                                source={{
                                    uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                                }} />
                        </TouchableOpacity>

                    </View>
                ),
                headerRight: () => (
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 80,
                        marginRight: 20,
                    }}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <AntDesign name='camerao' size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("AddChatScreen")}>
                            <SimpleLineIcons name="pencil" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                )
            })
        return unsubscribe

    }, [navigation]);


    const enterChat = (id, chatName) => {
        navigation.navigate('ChatScreen', {
            id: id,
            chatName: chatName
        })
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}  >
                {chats.map(({ id, data: { chatName } }) => (
                    <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat} />
                ))}

            </ScrollView>
        </SafeAreaView>
    )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {


        height: "100%"
    }

})
