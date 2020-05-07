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
    users: [],
    room: "",
  };

  componentDidMount() {
    // socket.emit("chatMessage", {author: "", message: ""})

    this._isMounted = true;

    socket.on("SERVER_MESSAGE", (message) => {
      if (this._isMounted) {
        if (this.state.messages) {
          let newMessages = [...this.state.messages, message];
          console.log(">>>", newMessages);
          this.setState({ messages: newMessages });
        } else {
          this.setState({ messages: [message] });
        }
      }
    });

    // Get room and users
    socket.on("ROOM_USERS", ({ room, users }) => {
      console.log("ROOM USERS", room, users);

      if (this._isMounted) {
        this.setState({ room, users });
      }
    });

    socket.on("SERVER_REGISTER", (message) => {
      if (this._isMounted) {
        this.setState({
          username: message.username,
          connected: true,
        });

        if (this.state.messages) {
          let newMessages = [...this.state.messages, message.botMessage];
          console.log(">>>", newMessages);
          this.setState({ messages: newMessages });
        } else {
          this.setState({
            messages: [message.botMessage],
          });
        }
      }

      console.log("got SERVER_REGISTER:\n", message);
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
            <SideBar
              username={this.state.username}
              room={this.state.room}
              users={this.state.users}
            />
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
