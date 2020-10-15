import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
  }

  render() {
    return (
      <div className="navbar">
        <span className="logo" onClick={() => this.changeView("home")}>
          RBKAT
        </span>
        <span className="nav" onClick={() => this.changeView("home")}>
          home
        </span>
        <span className="nav" onClick={() => this.changeView("adopt")}>
          {" "}
          adopt
        </span>
        <span className="nav" onClick={() => this.changeView("putAdoption")}>
          {" "}
          put For adoption
        </span>
        <span className="nav" onClick={() => this.changeView("singUp")}>
          {" "}
          Sign Up/sign In
        </span>
        <div className="main">
          {this.state.view === "signUp" ? (
            <sinUp />
          ) : this.state.view === "putAdoption" ? (
            <putAdoption />
          ) : (
            <adopt />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
