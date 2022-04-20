import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { useNavigate } from "react-router-dom";
export function Chat({ socket, username, room }) {
  const [message, setMessage] = useState("");
  const [arrMessage, setArrMessage] = useState([]);
  const navigate = useNavigate();
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
        user: {
          _id: username,
          // name: username,
          avatar: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
        },
        createdAt: new Date(),
      };

      await socket.emit("chatFromClient", data);
      setArrMessage([]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <div className="chat-window">
        <div className="chat-header">
          <p className="bg-sky-500 border-2 border-slate-300">
            CHAT WITH STAFF
          </p>
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
                    <div
                      className="message"
                      key={i}
                      id={username == el.user._id ? "you" : "other"}
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
      <div className="absolute right-2 top-3">
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-500  text-white font-semibold px-3  text- rounded-md"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
