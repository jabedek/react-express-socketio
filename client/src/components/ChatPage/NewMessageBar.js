import React from "react";
import { Button } from "../Button/Button";
import "./NewMessageBar.scss";
import moment from "moment";
import { socket } from "../../service/socket";

export class NewMessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", username: props.username, time: null };
  }

  // Message submit
  // sendMessage = () => {
  //   this.props.handleClick(this.state.text);
  //   this.setState({ text: "" });
  // };
  sendMessage = () => {
    // this.props.handleClick(this.state.text);

    console.log("Sending to server...");

    socket.emit("USER_MESSAGE", {
      username: this.state.username,
      text: this.state.text,
      time: moment().format("h:mm:ss"),
    });
    this.setState({ message: "" });
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="new-message-bar">
        <label className="new-message-bar__header"></label>

        <form className="message__form" id="message__form">
          <textarea
            id="msg"
            type="text"
            placeholder="Enter a message"
            value={this.state.text}
            name="message"
            autoComplete="off"
            spellCheck="false"
            className="message__input "
            onChange={(event) => {
              this.setState({ text: event.target.value });
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13 && e.shiftKey === false) {
                e.preventDefault();
                if (this.state.text) {
                  this.sendMessage();
                }
              }
            }}
          />
          <Button
            handleClick={() => {
              if (this.state.text) {
                this.sendMessage();
              }
            }}
            text={">"}
            classes={"send-button"}
          />
        </form>
      </div>
    );
  }
}
