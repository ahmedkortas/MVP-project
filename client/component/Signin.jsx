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
 
      <div className="container" style={{border:"1px solid black"}}>
          <div className="row">
                   <div className="col-md-5 mx-auto">
                           <div id="first">
            
                              <div className="col-md-12 text-center">
                                         <h1>Login</h1>
                              </div>
                            </div>
                    </div>
            </div>
        
        <Form>
          {" "}
          <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label htmlFor="email">Email :</Form.Label>
          <Col col-md-12 text-center > 
          <Form.Control
            type="email"
            name="email"
            placeholder="name"
            onChange={this.onChange}
            style ={{width:'50%'}}
          />
           </Col>  
             </Form.Group>
          <br></br>
          <Form.Group as={Row} controlId="formPlaintextPassword">

          <Form.Label  htmlFor="password">Password :</Form.Label>
          <Col  col-md-12 text-center >
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            onChange={this.onChange}
            style ={{width:'50%'}}

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
    
    );
  }
}

export default SigninF;
