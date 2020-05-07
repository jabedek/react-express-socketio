import React from "react";
import { Header } from "../Header/Header";
import panorama from "../JoinPage/panorama.png";
import { SideBar } from "./SideBar";
import { MessagesBar } from "./MessagesBar";
import { NewMessageBar } from "./NewMessageBar";
import "./ChatPage.scss";

// import io from "socket.io-client";
import { socket } from "../../service/socket";

export default class ChatPage extends React.Component {
  state = { connected: false, username: "" };
  componentDidMount() {
    // socket.emit("chatMessage", {author: "", message: ""})
    socket.on("USER_MESSAGE", (message) => {
      console.log("[@ChatPage] USER_MESSAGE:\n", message);
    });
    socket.on("SERVER_MESSAGE", (message) => {
      console.log("[@ChatPage] SERVER_MESSAGE:\n", message);
    });

    socket.on("SERVER_REGISTER_MESSAGE", (message) => {
      this.setState({ username: message.username, connected: true });

      console.log("[@ChatPage] SERVER_REGISTER_MESSAGE:\n", message);
    });
  }

  sendMessage = (msg) => {
    // ev.preventDefault();
    console.log("Sending to server...");

    socket.emit("USER_MESSAGE", {
      username: this.state.username,
      message: msg,
    });
    this.setState({ message: "" });
  };

  render() {
    return (
      this.state.connected && (
        <div className="chat">
          <div className="chat__bg">
            <img
              alt="city"
              className="panorama__image panorama__image--chat"
              id="panoramaImage"
              src={panorama}
            />
          </div>
          <Header />
          <div className="chat__board">
            <SideBar username={this.state.username} />
            <MessagesBar />
            <NewMessageBar handleClick={this.sendMessage} />
          </div>
        </div>
      )
    );
  }
}
