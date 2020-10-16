import React from "react";
import ReactDOM from "react-dom";
import Signin from "./component/SignUp.jsx";
import Adopt from "./component/Adopt.jsx";
import PutAdoption from "./component/PutAdoption.jsx";
import items from "./links";
import Home from "./component/Home.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      currentUser: "",
    };
    this.login = this.login.bind(this);
  }

  login(email) {
    let userName = localStorage.getItem("currentUser");
    if (userName === "undefined" || userName === null) {
      if (email !== undefined) {
        localStorage.setItem("currentUser", email);
        this.setState({
          currentUser: userName,
          view: "adopt",
        });
      } else {
        return;
      }
    } else if (this.state.currentUser === "") {
      this.setState({
        currentUser: userName,
        view: "adopt",
      });
    }
  }

  viewChange(options) {
    if (options === "logout") {
      this.setState({ currentUser: "" });
      localStorage.clear();
    } else {
      this.setState({ view: options });
    }
  }

  render() {
    this.login();
    return (
      <div>
        <div className="navbar">
          <img
            src={"./logo.png"}
            onClick={() => this.viewChange("home")}
            style={{ width: "10%" }}
          />

          <span
            className={
              this.state.view === "home" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.viewChange("home")}
          >
            home
          </span>
          <span
            className={
              this.state.view === "adopt" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.viewChange("adopt")}
          >
            {" "}
            adopt
          </span>
          <span
            className={
              this.state.view === "putAdoption"
                ? "nav-selected"
                : "nav-unselected"
            }
            onClick={() => this.viewChange("putAdoption")}
          >
            {" "}
            put For adoption
          </span>
          {this.state.currentUser === "" ? (
            <span
              className={
                this.state.view === "singin" ? "nav-selected" : "nav-unselected"
              }
              onClick={() => this.viewChange("singin")}
            >
              {" "}
              Sign Up/sign In
            </span>
          ) : (
            <span className="nav" onClick={() => this.viewChange("logout")}>
              {" "}
              logOut
            </span>
          )}
        </div>
        <div className="main">
          {this.state.view === "home" ? (
            <div>
              <Home items={items} />
            </div>
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
