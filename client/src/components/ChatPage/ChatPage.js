import React from "react";
import { Header } from "../Header/Header";
import panorama from "../JoinPage/panorama.png";
import { SideBar } from "./SideBar";
import { MessagesBar } from "./MessagesBar";
import { NewMessageBar } from "./NewMessageBar";
import "./ChatPage.scss";
import { Link } from "react-router-dom";
import moment from "moment";
import { Button } from "../Button/Button";

// import io from "socket.io-client";
import { socket } from "../../service/socket";

const messagesTest = [
  { time: "17:05", text: "Hello world!", username: "xyz" },
  { time: "13:45", text: "Równo", username: "Jeż" },
];

export default class ChatPage extends React.Component {
  _isMounted = false;

  state = {
    connected: false,
    username: "",
    messages: [],
  };

  componentDidMount() {
    // socket.emit("chatMessage", {author: "", message: ""})
    console.log("CDM ChatPage");

    this._isMounted = true;
    socket.on("USER_MESSAGE", (message) => {
      console.log("[@ChatPage] USER_MESSAGE:\n", message);
    });

    socket.on("SERVER_MESSAGE", (message) => {
      if (this._isMounted) {
        if (this.state.messages) {
          let newMessages = [...this.state.messages, message];
          console.log(">>>", newMessages);
          this.setState({ messages: newMessages });
        }
      }
    });

    socket.on("SERVER_REGISTER_MESSAGE", (message) => {
      if (this._isMounted) {
        this.setState({
          username: message.username,
          connected: true,
        });
      }

      console.log("[@ChatPage] SERVER_REGISTER_MESSAGE:\n", message);
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  sendMessage = (msg) => {
    // ev.preventDefault();
    console.log("Sending to server...");

    socket.emit("USER_MESSAGE", {
      username: this.state.username,
      text: msg,
      time: moment().format("h:mm:ss"),
    });
    this.setState({ message: "" });
  };

  render() {
    return (
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
        {this.state.connected ? (
          <div className="chat__board">
            <SideBar username={this.state.username} />
            <MessagesBar messages={this.state.messages} />
            <NewMessageBar username={this.state.username} />
          </div>
        ) : (
          // <div className="button-wrapper" style={this.state.btnVisibility}>
          <Link to="/">
            <Button text={"Back"} classes={"home-button"} />
          </Link>
          // </div>
        )}
      </div>
    );
  }
}
