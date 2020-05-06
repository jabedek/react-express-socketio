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

        {/* <div className="">

        </div> */}
        {/* <div class="panorama animation-bg-opacity">
          <img
            alt="city"
            class="panorama__image"
            id="panoramaImage"
            src="./images/panorama.png"
          />
        </div>
      </div>
      <div class="grid-container" id="join">
        {/* <header class="header">
          <h1 class="logo">cyber chat</h1>
        </header> */}
        {/* 
        <form class="join-form" id="joinForm" action="chat" method="post">
          <input
            type="text"
            id="usernameInput"
            name="username"
            class="join-form__input"
            spellcheck="false"
            maxlength="25"
            minlength="1"
            required
            autocomplete="off"
          />
          <p class="join-form__hint" id="joinFormHint">
            <span id="usernameLength">0</span> / 25
          </p>
          <div class="form-control" style="display: none;">
            <label for="room">Room</label>
            <select name="room" id="room">
              <option selected value="Ogólne">
                Ogólne
              </option>
              <option value="Memesy">Memesy</option>
              <option value="Nowy" id="newRoom">
                nowy
              </option>
            </select>
          </div>

          <button type="submit" class="btn go-button" id="goButton">
            Go
          </button>
        </form>

        <p class="username-holder" id="usernameHolder"></p>  */}
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
