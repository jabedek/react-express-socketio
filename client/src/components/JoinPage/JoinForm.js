import React from "react";
import "./JoinForm.scss";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export class JoinForm extends React.Component {
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

  generateUsername = () => {
    const prefixes = [
      "unique",
      "astonishing",
      "magnificent",
      "exceptional",
      "wonderful",
    ];
    const suffixes = ["entity", "persona", "subject"];
    const suf = suffixes[Math.floor(Math.random() * (suffixes.length - 0)) + 0];
    const pre = prefixes[Math.floor(Math.random() * (prefixes.length - 0)) + 0];
    const name = pre + "-" + suf;

    this.setState({ username: name });
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
            <Button text={"Go"} classes={"join-button "} />
          </Link>
        </div>
      </form>
    );
  }
}
