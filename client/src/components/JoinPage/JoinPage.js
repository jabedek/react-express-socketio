import React from "react";
import { withHeader, Header } from "../Header/Header";
import { Link } from "react-router-dom";
import "./JoinPage.scss";
import panorama from "./panorama.png";
import { JoinForm } from "./JoinForm";

const JoinPage = () => {
  return (
    <>
      <div
        className="Join !glitch "
        data-text="
glitch"
      >
        <div className="join-bg">
          <div className="panorama animation-bg-opacity">
            <img
              alt="city"
              className="panorama__image"
              id="panoramaImage"
              src={panorama}
            />
          </div>
        </div>
        <Header />
        <JoinForm />

        {/* <p class="username-holder" id="usernameHolder"></p> */}

        {/* Link to List.js */}
        {/* <Link to={"./chat"}>
          <button variant="raised">My chat</button>
        </Link>

        <Link to={"./list"}>
          <button variant="raised">My list</button>
        </Link> */}
      </div>
    </>
  );
};

// export default withHeader(Join);
export default JoinPage;
