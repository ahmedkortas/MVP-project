import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

class SigninF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    axios.post("/api/login", this.state).then((res) => {
      console.log(res.data);
      if (res.data === "does not exists") {
        alert("this user does not exist");
      } else {
        if (res.data.password !== this.state.password) {
          alert("wrong password");
        } else {
          this.props.login(res.data.name, res.data.password);
        }
      }
    });
    e.preventDefault();
  }
  onChange(event) {
    let inp = event.target;
    this.setState({ [inp.name]: inp.value });
  }

  render() {
    return (
      <div>
        <Form>
          {" "}
          <Form.Label htmlFor="email"> email :</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name"
            onChange={this.onChange}
          />
          <br></br>
          <label htmlFor="password">password</label>
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            onChange={this.onChange}
          />
          <br></br>
          <a href="#" onClick={this.props.handle}>
            Not yet an account? sign up
          </a>
          <br></br>
          <Button onClick={this.clickHandler}>Login</Button>
        </Form>
      </div>
    );
  }
}

export default SigninF;
