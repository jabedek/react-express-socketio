import "./Header.scss";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [logo, setLogo] = useState("cyberchat");

  useEffect(() => {
    console.log("did mount");
  }, []);

  return (
    <>
      <header className="header">
        <h1
          className="logo !glitch "
          data-text="
glitch"
        >
          {logo}
        </h1>
      </header>
    </>
  );
};

const withHeader = (WrappedComponent) => {
  return class WithHeader extends React.Component {
    render() {
      return (
        <>
          <Header />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export { Header, withHeader };
