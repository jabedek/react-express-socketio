import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import "./NewMessageBar.scss";

export const NewMessageBar = () => {
  const [message, setMessage] = useState({ body: "", sender: "", time: null });

  const handleSubmit = () => {
    console.log("submitting");
  };

  return (
    <div className="new-message-bar">
      <label className="new-message-bar__header"></label>

      <form class="message__form" id="message__form">
        <textarea
          id="msg"
          type="text"
          placeholder="Enter a message"
          required
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
              handleSubmit();
            }
          }}
        />
        {/* <button class="btn">
          <i class="fas fa-paper-plane"></i> Send
        </button> */}

        <Button
          handleClick={handleSubmit}
          text={">"}
          classes={"send-button"}
          visibility={{ display: "flex" }}
        />
      </form>
    </div>
  );
};
