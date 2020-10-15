import React from "react";
import SigninF from "./Signin.jsx";
import SignupF from "./SignupF.jsx";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: true };
    this.handle = this.handle.bind(this);
  }
  handle() {
    this.setState({ view: !this.state.view });
  }

  render() {
    return (
      <div>
        {this.state.view === true ? (
          <SigninF handle={this.handle} login={this.props.login} />
        ) : (
          <SignupF handle={this.handle} login={this.props.login} />
        )}
      </div>
    );
  }
}

export default Signin;
