import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button, TextInput } from 'react-native';

import firebase from 'firebase'
require('firebase/firestore')


export default function comment(props) {
    const [comments, setComments] = useState([])
    const [postId, setPostId] = useState("")
    const [text, setText] = useState("")

    useEffect(() => {
        if (props.route.params.postId !== postId) {
            firebase.firestore()
                .collection('posts')
                .doc(props.route.params.uid)
                .collection('userPosts')
                .doc(props.route.params.postId)
                .collection('comments')
                .get()
                .then((snapshot) => {
                    let comments = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return { id, ...data }
                    })
                    setComments(comments)
                    setPostId(props.route.params.postId)
                })
        }
    }, [props.route.params.postId])

    const onCommentSend = () => {
        firebase.firestore()
            .collection('posts')
            .doc(props.route.params.uid)
            .collection('userPosts')
            .doc(props.route.params.postId)
            .collection('comments')
            .add({
                creator: firebase.auth().currentUser.uid,
                creatorName: props.route.params.commentor,
                text
            })

        setText("")

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerGallery}>
                <Text >{props.route.params.name}</Text>
                <Image style={styles.image} source={{ uri: props.route.params.url }} />
            </View>
            <FlatList
                numColumns={1}
                horizontal={false}
                data={comments}
                renderItem={({ item }) => (
                    <View>

                        <Text>{item.creatorName}:{item.text}</Text>

                    </View>

                )}

            />
            <View>
                <TextInput placeholder='comment...'
                    onChangeText={(text) => setText(text)} />
                <Button onPress={() => onCommentSend()} title="Send" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    containerInfo: {
        margin: 20
    },
    containerGallery: {
        flex: 4
    },
    containerImage: {
        flex: 4

    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1,

    }
})