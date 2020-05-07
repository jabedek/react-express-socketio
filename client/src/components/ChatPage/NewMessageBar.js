import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./NewMessageBar.scss";
import io from "socket.io-client";

export class NewMessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", author: props.username };
  }

  // Message submit
  handleClick = () => {
    console.log(">>>", this.state.message);

    this.props.handleClick(this.state.message);
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
                // handleClick();
              }
            }}
          />
          <Button
            handleClick={this.handleClick}
            text={">"}
            classes={"send-button"}
          />
        </form>
      </div>
    );
  }
}
