import React, { useEffect, useState } from 'react';
import './App.css';
import Pusher from "pusher-js";
import axios from "./axios"
import Chatroom from './Chatroom';
import Mainscreen from './Mainscreen';
function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      })
  }, [])
  useEffect(() => {
    const pusher = new Pusher('0b51f434e660bbfd7fab', {
      cluster: 'ap1'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  console.log(messages);
  return (
    <div className="app">
      <Mainscreen/>
      <Chatroom messages={messages} />

    </div>
  );
}

export default App;
