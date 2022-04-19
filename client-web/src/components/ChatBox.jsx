import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
export function Chat({ socket, username, room }) {
  const [message, setMessage] = useState("");
  const [arrMessage, setArrMessage] = useState([]);
  useEffect(() => {
    socket.on("messageFromServer", (payload) => {
      console.log(payload);
      setArrMessage(payload);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const send = async () => {
    if (message != "") {
      let hour = new Date(Date.now()).getHours();
      let strHour = toString(hour).length < 1 ? (hour = "0" + hour) : hour;
      let minutes = new Date(Date.now()).getMinutes();
      let strMinute =
        toString(minutes).length < 1 ? (minutes = "0" + minutes) : minutes;
      const time = strHour + ":" + strMinute;
      const data = {
        room,
        text: message,
        user: { _id: username },
        createdAt: new Date(),
      };
      await socket.emit("chatFromClient", data);
      setArrMessage([]);
      setMessage("");
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Ask Me</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {arrMessage.map((el, i) => {
            return (
              <div
                className="message"
                key={i}
                id={username === el.user._id ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{el.text}</p>
                  </div>
                  <div className="message-meta">
                    <p>{el.time} </p>
                    <p>{el.user._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              send();
            }
          }}
        />
        <button onClick={send}>Submit</button>
      </div>
    </div>
  );
}
