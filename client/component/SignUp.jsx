import React from "react";
import SigninF from "./Signin.jsx";
import SignupF from "./SignupF.jsx";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "sign in" };
  }
  render() {
    return (
      <div>{this.state.view === "sign in" ? <SigninF /> : <SignupF />}</div>
    );
  }
}

export default Signin;
