import React from "react";
import { Button } from "../Button/Button";
import "./NewMessageBar.scss";
import moment from "moment";

export class NewMessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", author: props.username, time: null };
  }

  // Message submit
  sendMessage = () => {
    this.setState({ time: moment().format("h:mm") });
    this.props.handleClick(this.state.message);
    this.setState({ message: "" });
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
            value={this.state.message}
            name="message"
            autoComplete="off"
            spellCheck="false"
            className="message__input "
            onChange={(event) => {
              this.setState({ message: event.target.value });
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13 && e.shiftKey === false) {
                e.preventDefault();
                this.sendMessage();
                // sendMessage();
              }
            }}
          />
          <Button
            handleClick={this.sendMessage}
            text={">"}
            classes={"send-button"}
          />
        </form>
      </div>
    );
  }
}
