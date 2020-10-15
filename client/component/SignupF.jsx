import React from "react";

class SignupF extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          {" "}
          <label htmlFor="name">name</label>
          <input type="text" name="name" placeholder="name"></input>
          <label htmlFor="password">password</label>
          <input type="password" name="password" placeholder="password"></input>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default SignupF;
