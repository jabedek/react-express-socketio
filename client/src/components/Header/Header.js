import "./Header.scss";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1
          className="logo !glitch "
          data-text="
glitch"
        >
          cyberchat
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
