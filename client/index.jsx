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
      padding: "5px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      color:"black",
      fontFamily:"Times New Roman",
      
    };
     const navSelected ={
      padding: '5px',
      color: 'chartreuse',
      fontWeight: 'bold',
      marginRight: '5px',
      fontSize: '1.1em'
    };
    
    const navUnselected={
      padding: "5px",
      marginRight: "5px",
      fontSize: "1.1em"
    }

    this.login();
    return (
      <div>
        <div className="navbar navbar-light" > 
          <img
          src={"./logo.png"} 
          onClick={()=>this.viewChange("home")}  
          style={{witdh:"70px" , height:"70px"}}
          />

          <span
            style={
              this.state.view === "home" ? navSelected:navUnselected
            }
            onClick={() => this.viewChange("home")}
          >
            Home
          </span>
          <span
            style={
              this.state.view === "adopt" ? navSelected : navUnselected
            }
            onClick={() => this.viewChange("adopt")} 
          >
            {" "}
            Adopt
            
          </span>
          <span
            style={
              this.state.view === "putAdoption"
                ? navSelected
                : navUnselected
            }
            onClick={() => this.viewChange("putAdoption")}
          >
            {" "}
            put For adoption
          </span>
        
          {this.state.currentUser === "" ? (
            <span
              style={
                this.state.view === "singin" ?navSelected
                : navUnselected
              }
              onClick={() => this.viewChange("singin")}
            >
              {" "}
              Log In
            </span>
          ) : (
            <span className="nav" onClick={() => this.viewChange("logout")}  style= {styleNav}>
              {" "}
              logOut
            </span>
          )}
            <Form className="form-inline my-2 my-lg-0"  >
            <Form.Control className="form-control mr-sm-2" type="search" placeholder="Search"/>
            <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
            </Form>
        </div>
        <div className="main" >
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
