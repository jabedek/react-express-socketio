import React, { useState, useEffect } from "react";
import "./MessagesBar.scss";
import { socket } from "../../service/socket";

const messagesTest = [
  { time: "17:05", text: "Hello world!", username: "xyz" },
  { time: "13:45", text: "Gówno", username: "Papież" },
];

export const MessagesBar = (props) => {
  const [messages, setMessages] = useState(messagesTest);
  useEffect(() => {
    renderMessages();
  }, []);

  // socket.on("USER_MESSAGE", (message) => {
  //   console.log("[@ChatPage] USER_MESSAGE:\n", message);
  // });
  // socket.on("SERVER_MESSAGE", (message) => {
  //   console.log("[@ChatPage] SERVER_MESSAGE:\n", message);
  // });

  // socket.on("SERVER_REGISTER_MESSAGE", (message) => {
  //   this.setState({ username: message.username, connected: true });

  //   console.log("[@ChatPage] SERVER_REGISTER_MESSAGE:\n", message);
  // });

  const renderMessages = () => {
    if (messages) {
      return messages.map((message) => {
        return (
          <li className="message">
            <p className="message__username">
              {message.username}
              <span className="message__time"> {message.time}</span>
            </p>
            <p className="message__text"> {message.text}</p>
          </li>
        );
      });
    }
  };

  return (
    <div className="messages-bar">
      <label className="messages-bar__header">Messages</label>
      <div className="messages-bar__list-wrapper">
        <ul className="messages-bar__list">{renderMessages()}</ul>
      </div>
    </div>
  );
};
