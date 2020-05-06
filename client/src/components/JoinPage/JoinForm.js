import React, { useState, useEffect } from "react";
import "./JoinForm.scss";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export const JoinForm = () => {
  const [btnVisibility, setBtnVisibility] = useState({ display: "none" });
  const [userName, setUserName] = useState("");

  useEffect(() => {
    generateUsername();
  }, []);

  const generateUsername = () => {
    const prefixes = [
      "unique",
      "astonishing",
      "magnificent",
      "exceptional",
      "wonderful",
    ];

    const suffixes = ["entity", "persona", "subject"];
    const pre = prefixes[Math.floor(Math.random() * (prefixes.length - 0)) + 0];
    const suf = suffixes[Math.floor(Math.random() * (suffixes.length - 0)) + 0];

    setUserName(pre + "-" + suf);
  };

  return (
    <form
      className="join-form"
      id="joinForm"
      // action="chat"
      //   method="post"
      onFocus={() => {
        setBtnVisibility({ display: "flex" });
      }}
      onBlur={() => {
        setBtnVisibility({ display: "none" });
      }}
    >
      <input
        type="text"
        id="usernameInput"
        name="username"
        className="join-form__input "
        spellCheck="false"
        maxLength="25"
        minLength="1"
        required
        autoComplete="off"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <p className="join-form__hint" id="joinFormHint">
        <span id="usernameLength">{userName.length}</span> / 25
      </p>
      <div className="form-control" style={{ display: "none " }}>
        <label htmlFor="room">Room</label>
        <select name="room" id="room">
          <option defaultValue="Ogólne">Ogólne</option>
          <option value="Memesy">Memesy</option>
          <option value="Nowy" id="newRoom">
            nowy
          </option>
        </select>
      </div>
      {/* 
      <button type="submit" className="btn go-button" id="goButton">
        Go
      </button> */}
      <Link to={"./chat"}>
        <Button
          handleClick={() => console.log("elo")}
          text={"Go"}
          classes={"form-button"}
          visibility={btnVisibility}
        />
      </Link>
    </form>
  );
};
