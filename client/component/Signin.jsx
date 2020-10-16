import React from "react";
import axios from "axios";
import { Button, Form ,Row, Col} from "react-bootstrap";

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
      if (res.data === "does not exists") {
        alert("this user does not exist");
      } else {
        if (res.data.password !== this.state.password) {
          alert("wrong password");
        } else {
          console.log(res.data.email);
          this.props.login(res.data.email);
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

    <div class="container">
          <div class="col-md-6 mx-auto text-center">
	         < div class="header-title">
		             <h1 class="wv-heading--title">
		                          Registration form
	              	</h1>
		<h4 class="wv-heading--subtitle">
		  i love ahmed 
		</h4>
	 </div>
  </div>

  <div class="row">
        
        <Form>
          {" "}
          <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label htmlFor="email">Email :</Form.Label>
          <Col col-md-auto >
          <Form.Control
            type="email"
            name="email"
            placeholder="name"
            onChange={this.onChange}
          />
           </Col>  
             </Form.Group>
          <br></br>
          <Form.Group as={Row} controlId="formPlaintextPassword">

          <Form.Label  htmlFor="password">Password :</Form.Label>
          <Col col-md-auto >
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            onChange={this.onChange}
          />
          </Col>
          </Form.Group>
          <br></br>
  
            <a href="#" onClick={this.props.handle}>
            Not yet an account? sign up
          </a>
          <br></br>
          <Button  variant="primary" type="submit" onClick={this.clickHandler}>Login</Button>
        </Form>
      </div>
     </div>
    );
  }
}

export default SigninF;
