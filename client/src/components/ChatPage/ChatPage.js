import React from "react";
import { withHeader, Header } from "../Header/Header";
import panorama from "../JoinPage/panorama.png";
import { SideBar } from "./SideBar";
import { MessagesBar } from "./MessagesBar";
import { NewMessageBar } from "./NewMessageBar";
import "./ChatPage.scss";

export const ChatPage = () => {
  return (
    <>
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
          <SideBar />
          <MessagesBar />
          <NewMessageBar />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
