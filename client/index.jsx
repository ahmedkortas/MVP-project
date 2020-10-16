import React from "react";
import ReactDOM from "react-dom";
import Signin from "./component/SignUp.jsx";
import Adopt from "./component/Adopt.jsx";
import PutAdoption from "./component/PutAdoption.jsx";
import { Button, Form,Img } from "react-bootstrap";

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

    const styleNav = {
      margin: "0px",
      padding: "10px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      color:"#f3f3f3"
    };

    this.login();
    return (
      <div>
        <div className="navbar navbar-dark bg-dark " > 

          <img
          src={"./logo.png"} 
          onClick={()=>this.viewChange("home")}  
          style={{witdh:"10%"}}
          />

          <span
            className={
              this.state.view === "home" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.viewChange("home")}
            style= {styleNav}
          >
            Home
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
            style= {styleNav}
          >
            {" "}
            put For adoption
          </span>
          <Form className="form-inline my-2 my-lg-0"  style= {styleNav}>
             <Form.Control className="form-control mr-sm-2" type="search" placeholder="Search"/>
                <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
          </Form>
          {this.state.currentUser === "" ? (
            <span
              className={
                this.state.view === "singin" ? "nav-selected" : "nav-unselected"
              }
              onClick={() => this.viewChange("singin")}
              style= {styleNav}
            >
              {" "}
              Sign Up/sign In
            </span>
          ) : (
            <span className="nav" onClick={() => this.viewChange("logout")}  style= {styleNav}>
              {" "}
              logOut
            </span>
          )}
        </div>
        <div className="main"  style= {styleNav}>
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
