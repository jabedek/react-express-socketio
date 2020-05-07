import React from "react";
import { Header } from "../Header/Header";
import panorama from "../JoinPage/panorama.png";
import { SideBar } from "./SideBar";
import { MessagesBar } from "./MessagesBar";
import { NewMessageBar } from "./NewMessageBar";
import "./ChatPage.scss";
import io from "socket.io-client";

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: [],
    };

    this.socket = io("localhost:5000");

    // catch the incoming message
    this.socket.on("message", (message) => {
      this.addMessage(message);
      console.log(this.state.messages);
    });
  }

  addMessage = (data) => {
    console.log(data);
    this.setState({ messages: [...this.state.messages, data] });
    console.log(this.state.messages);
  };

  sendMessage = (msg) => {
    // ev.preventDefault();
    console.log("MESSAGE", msg);

    this.socket.emit("chatMessage", {
      author: this.state.username,
      message: msg,
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
        <div className="chat__board">
          {/* {context.username} */}
          <SideBar />
          <MessagesBar />
          <NewMessageBar handleClick={this.sendMessage} />
        </div>
      </div>
    );
  }
}

// export const ChatPage = () => {
//   const socket = io("localhost:5000");

//   return (
//     <>
//       <div className="chat">
//         <div className="chat__bg">
//           <img
//             alt="city"
//             className="panorama__image panorama__image--chat"
//             id="panoramaImage"
//             src={panorama}
//           />
//         </div>
//         <Header />
//         <div className="chat__board">
//           <SideBar />
//           <MessagesBar />
//           <NewMessageBar />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChatPage;
