import "../assets/ChatPage.css";
import io from "socket.io-client";
import { useState } from "react";
import { Chat } from "../components/ChatBox";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
  timeout: 10000, //before connect_error and connect_timeout are emitted.
  transports: ["websocket"],
};
const socket = io.connect(
  "https://green-baboon-52.loca.lt/",
  connectionOptions
);

function ChatPage() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShow] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShow(true);
    }
  };
  return (
    <div className="ChatPage">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join a chat</h3>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Room ID"
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default ChatPage;
