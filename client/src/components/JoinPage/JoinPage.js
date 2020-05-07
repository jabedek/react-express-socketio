import React from "react";
import { Header } from "../Header/Header";
import "./JoinPage.scss";
import panorama from "./panorama.png";
import { JoinForm } from "./JoinForm";

export default class JoinPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  handleClick = (name) => {
    this.setState({ username: name });
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
          <JoinForm handleClick={this.handleClick} />
        </div>
      </>
    );
  }

  // render() {
  // return (
  //   <UserContext.Consumer>
  //     {(context) => (
  //       <>
  //         <h4>Books:</h4>
  //         {context.username}
  //       </>
  //     )}
  //   </UserContext.Consumer>
  // );
  // }
}

/* <p class="username-holder" id="usernameHolder"></p> */

/* <Link to={"./chat"}>
          <button variant="raised">My chat</button>
        </Link>

        <Link to={"./list"}>
          <button variant="raised">My list</button>
        </Link> */
