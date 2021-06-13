import React, { useState, useRef, useEffect } from 'react';
import './Chatroom.css';
import axios from "./axios"
function Chatroom({ messages }) {
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
      }
    useEffect(scrollToBottom, [messages]);
    const sendMessage = async (e) => {
        e.preventDefault();
        axios.post("/messages/new", {
            "message": input,
            "name": "Marco Wong",
            "timestamp": "Now",
            "received": true
        });
        setInput("");
    }




    return (
        <div className="chatroom">
            <div className="chat__body">
                {messages.map((message) => (
                    <p className="messages">{message.name}: {message.message}</p>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="chat__footer">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message
                </button>
                </form>
            </div>
        </div>
    )
}

export default Chatroom
