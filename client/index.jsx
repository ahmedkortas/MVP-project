import React from "react";
import ReactDOM from "react-dom";
import Signin from "./component/SignUp.jsx";
import Adopt from "./component/Adopt.jsx";
import PutAdoption from "./component/PutAdoption.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
  }

  viewChange(options) {
    console.log(options);
    this.setState({ view: options });
  }

  render() {
    return (
      <div className="navbar">
        <span className="logo" onClick={() => this.viewChange("home")}>
          RBKAT
        </span>
        <span className="nav" onClick={() => this.viewChange("home")}>
          home
        </span>
        <span className="nav" onClick={() => this.viewChange("adopt")}>
          {" "}
          adopt
        </span>
        <span className="nav" onClick={() => this.viewChange("putAdoption")}>
          {" "}
          put For adoption
        </span>
        <span className="nav" onClick={() => this.viewChange("singin")}>
          {" "}
          Sign Up/sign In
        </span>
        <div className="main">
          {this.state.view === "home" ? (
            <div>home</div>
          ) : this.state.view === "singin" ? (
            <Signin />
          ) : this.state.view === "adopt" ? (
            <Adopt />
          ) : (
            <PutAdoption />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));