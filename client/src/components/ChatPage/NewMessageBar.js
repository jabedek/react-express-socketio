import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import "./NewMessageBar.scss";

export const NewMessageBar = () => {
  const [message, setMessage] = useState({ body: "", sender: "", time: null });

  const handleSubmit = (event) => {
    console.log("submitting", message);
  };

  return (
    <div className="new-message-bar">
      <label className="new-message-bar__header"></label>

      <form className="message__form" id="message__form">
        <textarea
          id="msg"
          type="text"
          placeholder="Enter a message"
          value={message.body}
          name="message"
          autoComplete="off"
          spellCheck="false"
          className="message__input "
          onChange={(event) => {
            setMessage({ body: event.target.value });
          }}
          onKeyDown={(e) => {
            if (e.keyCode == 13 && e.shiftKey == false) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <Button handleClick={handleSubmit} text={">"} classes={"send-button"} />
      </form>
    </div>
  );
};
