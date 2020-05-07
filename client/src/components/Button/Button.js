import React from "react";

export const Button = (props) => {
  return (
    <p onClick={props.handleClick} className={props.classes}>
      {props.text}
    </p>
  );
};
