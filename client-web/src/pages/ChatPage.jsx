import "../assets/ChatPage.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import { Chat } from "../components/ChatBox";

function ChatPage() {
  const [username, setUsername] = useState("imam");
  const [room, setRoom] = useState("123");
  const [showChat, setShow] = useState(true);

  const socket = io("http://d49f-158-140-175-209.ngrok.io");
  // const connectionOptions = {
  //   "force new connection": true,
  //   reconnectionAttempts: "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
  //   timeout: 10000, //before connect_error and connect_timeout are emitted.
  //   transports: ["websocket"],
  // };

  useEffect(() => {
    socket.emit("join_room", "123");
  }, []);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShow(true);
    }
  };
  return (
    <div className="flex justify-center bg-green-200">
      <Chat className="" socket={socket} username={username} room={room} />
    </div>
  );
}

export default ChatPage;
