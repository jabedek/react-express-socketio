import React from "react";
import { Header } from "../Header/Header";
import "./JoinPage.scss";
import panorama from "./panorama.png";
// import { JoinForm } from "./JoinForm";
import "./JoinForm.scss";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { socket } from "../../service/socket";
import moment from "moment";

export default class JoinPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      classAnimate: "animation-appear",
      btnVisibility: { display: "none" },
      formVisibility: {
        height: "0",
        border: "none",
        width: "0",
      },
    };
  }

  componentDidMount() {
    socket.on("SERVER_WELCOME", (message) => {
      console.log("SERVER_WELCOME:\n", message);
    });

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

  generateUsername = () => {
    const prefixes = ["unique", "rare", "exceptional"];
    const suffixes = ["entity", "individual", "subject", "one"];
    const suf = suffixes[Math.floor(Math.random() * (suffixes.length - 0)) + 0];
    const pre = prefixes[Math.floor(Math.random() * (prefixes.length - 0)) + 0];
    const name = pre + "-" + suf;

    this.setState({ username: name });
  };

  handleClick = (name) => {
    this.setState({ username: name });
  };

  registerUsername = () => {
    socket.emit("USER_CONN", {
      username: this.state.username,
      time: moment().format("h:mm:ss"),
    });
  };

  render() {
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

          <form
            className={`join-form ${this.state.classAnimate}`}
            id="joinForm"
            style={this.state.formVisibility}
            onFocus={() => {
              this.setState({
                btnVisibility: { display: "flex" },
              });
            }}
            onSubmit={(e) => {
              e.preventDefault();
              this.registerUsername();
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
              value={this.state.username}
              onChange={(event) => {
                this.setState({ username: event.target.value });
              }}
            />
            <p className="join-form__hint" id="joinFormHint">
              <span id="usernameLength">{this.state.username.length}</span> / 25
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

            <div className="button-wrapper" style={this.state.btnVisibility}>
              <Link to="chat">
                <Button
                  handleClick={this.registerUsername}
                  text={"Go"}
                  classes={"join-button"}
                />
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  }
}
