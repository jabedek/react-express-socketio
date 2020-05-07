import React, { useState, useEffect } from "react";
import "./JoinForm.scss";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export class JoinForm extends React.Component {
  state = {
    userName: "",
    classAnimate: "animation-appear",
    btnVisibility: { display: "none" },
    formVisibility: {
      height: "0",
      border: "none",
      width: "0",
    },
  };

  generateUsername = () => {
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
    const name = pre + "-" + suf;

    this.setState({ userName: name });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        classAnimate: "",
        formVisibility: {
          height: "12vh",
          width: "40vw",
          border: "0.14rem solid rgba(255, 255, 0, 0.6)",
        },
      });
      this.generateUsername();
    }, 800);
  }

  render() {
    return (
      <form
        className={`join-form ${this.state.classAnimate}`}
        id="joinForm"
        style={this.state.formVisibility}
        onFocus={() => {
          this.setState({ btnVisibility: { display: "flex" } });
        }}
        // onBlur={() => {
        //   this.setState({ btnVisibility: { display: "none" } });
        // }}
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
          value={this.state.userName}
          onChange={(event) => {
            this.setState({ userName: event.target.value });
          }}
        />
        <p className="join-form__hint" id="joinFormHint">
          <span id="usernameLength">{this.state.userName.length}</span> / 25
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
        <div className="button-wrapper" style={this.state.btnVisibility}>
          <Link to={`./chat?username=${this.state.userName}`}>
            <Button
              handleClick={() => {}}
              text={"Go"}
              classes={"join-button"}
            />
          </Link>
        </div>
      </form>
    );
  }
}

// export const JoinForm = () => {
//   const [btnVisibility, setBtnVisibility] = useState({ display: "none" });
//   const [formVisibility, setFormVisibility] = useState({
//     height: "0",
//     border: "none",
//     width: "0",
//   });
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     generateUsername();
//     setTimeout(() => {
//       // joinForm.classList.remove("animation-appear");
//       setFormVisibility({
//         height: "12vh",
//         border: "0.14rem solid rgba(255, 255, 0, 0.6)",
//         width: "40vw",
//       });
//     }, 800);
//   }, []);

//   const generateUsername = () => {
//     const prefixes = [
//       "unique",
//       "astonishing",
//       "magnificent",
//       "exceptional",
//       "wonderful",
//     ];

//     const suffixes = ["entity", "persona", "subject"];
//     const pre = prefixes[Math.floor(Math.random() * (prefixes.length - 0)) + 0];
//     const suf = suffixes[Math.floor(Math.random() * (suffixes.length - 0)) + 0];

//     setUserName(pre + "-" + suf);
//   };

//   return (
//     <form
//       className="join-form animation-appear"
//       id="joinForm"
//       style={{ formVisibility }}
//       // action="chat"
//       //   method="post"
//       onFocus={() => {
//         setBtnVisibility({ display: "flex" });
//       }}
//       onBlur={() => {
//         setBtnVisibility({ display: "none" });
//       }}
//     >
//       <input
//         type="text"
//         id="usernameInput"
//         name="username"
//         className="join-form__input "
//         spellCheck="false"
//         maxLength="25"
//         minLength="1"
//         required
//         autoComplete="off"
//         value={userName}
//         onChange={(event) => {
//           setUserName(event.target.value);
//         }}
//       />
//       <p className="join-form__hint" id="joinFormHint">
//         <span id="usernameLength">{userName.length}</span> / 25
//       </p>
//       <div className="form-control" style={{ display: "none " }}>
//         <label htmlFor="room">Room</label>
//         <select name="room" id="room">
//           <option defaultValue="Ogólne">Ogólne</option>
//           <option value="Memesy">Memesy</option>
//           <option value="Nowy" id="newRoom">
//             nowy
//           </option>
//         </select>
//       </div>
//       {/*
//       <button type="submit" className="btn go-button" id="goButton">
//         Go
//       </button> */}
//       <Link to={"./chat"}>
//         <Button
//           handleClick={() => console.log("elo")}
//           text={"Go"}
//           classes={"form-button"}
//           visibility={btnVisibility}
//         />
//       </Link>
//     </form>
//   );
// };
