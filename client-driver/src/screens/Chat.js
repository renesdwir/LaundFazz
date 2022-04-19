import {
  Center,
  Heading,
  Input,
  Link,
  FormControl,
  Button,
  HStack,
  Text,
  VStack,
  Box,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
// import io from 'socket.io-client'
import SocketIOClient from "socket.io-client/dist/socket.io.js";
// var connectionOptions = {
//     "force new connection": true,
//     "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
//     "timeout": 10000,                  //before connect_error and connect_timeout are emitted.
//     "transports": ["websocket"]
// };

function Chat({ route }) {
  const [messages, setMessages] = useState([]);

  // const socket = io("https://mighty-insect-100.loca.lt/", connectionOptions)
  const socket = SocketIOClient("https://mighty-insect-100.loca.lt/", {
    jsonp: false,
  });
  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("join_room", 123);
    });

    socket.on("messageFromServer", (newmessage) => {
      console.log(newmessage);
      setMessages(newmessage);
    });
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    socket.emit("chatFromClient", {
      message: messages[messages.length - 1].text,
      username: "Steven",
      room: "123",
    });
    console.log(messages[messages.length - 1].text);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
        name: "Staff1",
      }}
    />
  );
}

export default Chat;
