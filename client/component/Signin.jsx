import React from "react";

class SigninF extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          {" "}
          <label htmlFor="name">name :</label>
          <input type="text" name="name" placeholder="name"></input>
          <br></br>
          <label htmlFor="password">password</label>
          <input type="password" name="password" placeholder="password"></input>
          <br></br>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default SigninF;
