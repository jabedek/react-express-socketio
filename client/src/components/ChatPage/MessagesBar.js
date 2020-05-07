import React from "react";
import "./MessagesBar.scss";

export const MessagesBar = (props) => {
  return (
    <div className="messages-bar">
      <label className="messages-bar__header">Messages</label>

      <div className="messages-bar__list-wrapper">
        <ul className="messages-bar__list">
          <li className="message">
            <p className="message__sender">
              Joe Biden
              <span className="message__time">17:05</span>
            </p>
            <p className="message__body">Elo siemano</p>
          </li>

          <li className="message">
            <p className="message__sender">
              Joe Biden
              <span className="message__time">17:05</span>
            </p>
            <p className="message__body">Elo siemano</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
