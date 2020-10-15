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
      currentUser: "",
      currentUserPassword: "",
    };
    this.login = this.login.bind(this);
  }

  login(name, password) {
    this.setState({
      currentUser: name,
      currentUserPassword: password,
      view: "adopt",
    });
  }

  viewChange(options) {
    console.log(options);
    this.setState({ view: options });
  }

  render() {
    return (
      <div>
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
        </div>
        <div className="main">
          {this.state.view === "home" ? (
            <div>home</div>
          ) : this.state.view === "singin" ? (
            <Signin login={this.login} />
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
