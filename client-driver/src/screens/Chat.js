import { ScrollView, View, Text, TextInput, Button } from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import io from "socket.io-client";
import { GiftedChat } from "react-native-gifted-chat";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
  timeout: 10000, //before connect_error and connect_timeout are emitted.
  transports: ["websocket"],
};

const socketUrl = "http://localhost:3002";
const socket = io(socketUrl, connectionOptions);
// const socket = io(socketUrl);
const Chat = () => {
  // const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([{}]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // setSocket(socket);
    socket.on("connect", () => {
      setConnected(true);
    });
    socket.emit("join_room", "123");

    return () => {
      socket.disconnect();
      setMessages([]);
    };
  }, []);

  useEffect(() => {
    socket.on("messageFromServer", (payload) => {
      setMessages((previousMessages) => {
        // GiftedChat.append(previousMessages, payload)
        return payload;
        // console.log(previousMessages, "previousmessage")
      });

      // console.log(payload);
    });
  }, []);

  // useEffect(() => {
  //     if (connected) {
  //         socket.on('messageFromServer', (messagesData) => {
  //             console.log(messagesData, '<<<<<<<<<<<<<<<<<<');
  //             setMessages(messagesData);
  //         });
  //     }

  //     return () => {
  //         socket?.disconnect();
  //     };
  // }, [socket]);

  // if (!connected) {
  //     return (
  //         <View>
  //             <Text>Connecting...</Text>
  //         </View>
  //     );
  // }

  // const sendChat = () => {
  // socket.emit('chatFromClient', {
  //     text: message,
  //     createdAt: new Date(),
  //     user: {
  //         _id: 'client',
  //     },
  // });
  // socket.on('messageFromServer', (messagesData) => {
  //     console.log(messagesData, '<<<<<<<<<<<<<<<<<<');
  //     setMessages(messagesData);
  // });
  // setMessage('');
  // };
  const onSend = useCallback((messages = []) => {
    socket.emit("chatFromClient", {
      room: "123",
      text: messages[0].text,
      createdAt: messages[0].createdAt,
      user: {
        _id: "Staff - Renes",

        avatar: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
      },
    });
    setMessage("");
    // setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  return (
    <GiftedChat
      showUserAvatar={true}
      // renderMessage={(message) => {
      //     console.log(message, '<<<<<<<<<<<<<<<<<<<<<<<<');
      //     return <View><Text>{message.currentMessage.text}</Text></View>
      // }}
      messages={messages}
      inverted={false}
      text={message}
      onInputTextChanged={(text) => setMessage(text)}
      onSend={onSend}
      scrollToBottom={true}
      placeholder="Type a message..."
      isTyping={true}
      user={{
        _id: "client",
      }}
    />
  );
};

export default Chat;
