import React from "react";
import axios from "axios";

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
        <form>
          {" "}
          <label htmlFor="fname">firstName</label>
          <input
            type="text"
            name="firstName"
            placeholder="name"
            onChange={this.onChange}
          ></input>
          <br></br>
          <label htmlFor="Sname">secondName</label>
          <br></br>
          <input
            type="text"
            name="secondName"
            placeholder="name"
            onChange={this.onChange}
          ></input>
          <br></br>
          <label htmlFor="password">password</label>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.onChange}
          ></input>
          <br></br>
          <label htmlFor="adress">adress</label>
          <br></br>
          <input
            type="text"
            name="adress"
            placeholder="adress"
            onChange={this.onChange}
          ></input>
          <br></br>
          <label htmlFor="email">email</label>
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.onChange}
          ></input>
          <br></br>
          <label htmlFor="birthday">birthday</label>
          <br></br>
          <input
            type="date"
            name="birthday"
            placeholder="dd-mm-yyyy"
            min="1997-01-01"
            max="2030-12-31"
            onChange={this.onChange}
          ></input>
          <br></br>
          <label htmlFor="cardNumber">cardNumber</label>
          <br></br>
          <input
            type="number"
            name="cardNumber"
            placeholder="cardNumber"
            onChange={this.onChange}
          ></input>
          <br></br>
          <label htmlFor="PhoneNumber">PhoneNumber</label>
          <br></br>
          <input
            type="number"
            name="PhoneNumber"
            placeholder="PhoneNumber"
            onChange={this.onChange}
          ></input>
          <br></br>
          <button type="submit" onClick={this.clickHandler}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignupF;
