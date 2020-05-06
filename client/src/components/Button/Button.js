import React, { useState, useEffect } from "react";
// import "Button.scss";

export const Button = (props) => {
  const [visibility, setVisibility] = useState({ display: "initial" });

  useEffect(() => {
    setVisibility(props.visibility);
  }, [props.visibility]);

  return (
    <button
      onClick={props.handleClick}
      className={`btn ${props.classes}`}
      style={visibility}
    >
      {props.text}
    </button>
  );
};

//go-button" id="goButton"
