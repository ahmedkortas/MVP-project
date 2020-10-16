import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

class SignupF extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      firstName: "",
      secondName: "",
      adress: "",
      email: "",
      birthday: "",
      cardNumber: "",
      PhoneNumber: "",
      password: "",
    };
  }
  clickHandler(e) {
    for (var key in this.state) {
      if (this.state[key] === "") {
        alert(" the  " + key + "  field is empty");
        e.preventDefault();
        return;
      }
    }
    axios.post("/api/user", this.state).then((res) => {
      if (res === "exists") {
        alert("user exists");
      } else {
        this.props.login(res.data.email);
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
          <Form.Label htmlFor="fname">firstName</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="name"
            onChange={this.onChange}
          />
          <br></br>
          <Form.Label htmlFor="Sname">secondName</Form.Label>
          <br></br>
          <Form.Control
            type="text"
            name="secondName"
            placeholder="name"
            onChange={this.onChange}
          />
          <br></br>
          <Form.Label htmlFor="password">password</Form.Label>
          <br></br>
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            onChange={this.onChange}
          />
          <br></br>
          <Form.Label htmlFor="adress">adress</Form.Label>
          <br></br>
          <Form.Control
            type="text"
            name="adress"
            placeholder="adress"
            onChange={this.onChange}
          />
          <br></br>
          <Form.Label htmlFor="email">email</Form.Label>
          <br></br>
          <Form.Control
            type="email"
            name="email"
            placeholder="email"
            onChange={this.onChange}
          />
          <br></br>
          <Form.Label htmlFor="birthday">birthday</Form.Label>
          <br></br>
          <Form.Control
            type="date"
            name="birthday"
            placeholder="dd-mm-yyyy"
            min="1997-01-01"
            max="2030-12-31"
            onChange={this.onChange}
          />
          <br></br>
          <Form.Label htmlFor="cardNumber">cardNumber</Form.Label>
          <br></br>
          <Form.Control
            type="number"
            name="cardNumber"
            placeholder="cardNumber"
            onChange={this.onChange}
          />
          <br></br>
          <Form.Label htmlFor="PhoneNumber">PhoneNumber</Form.Label>
          <br></br>
          <Form.Control
            type="number"
            name="PhoneNumber"
            placeholder="PhoneNumber"
            onChange={this.onChange}
          />
          <br></br>
          <Button type="submit" onClick={this.clickHandler}>
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignupF;
