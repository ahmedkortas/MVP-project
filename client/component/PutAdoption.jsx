import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
class PutAdoption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ownerName: "",
      imageUrl: "",
      description: "",
      race: "",
      age: "",
    };
    this.onChange = this.onChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  onChange(e) {
    e.preventDefault();
    let inp = e.target;
    this.setState({ [inp.name]: inp.value });
  }
  clickHandler(e) {
    console.log(this.state);
    for (var key in this.state) {
      if (this.state[key] === "") {
        alert(" the  " + key + "  field is empty");
        e.preventDefault();
        return;
      }
    }
    axios.post("/api/Pet", this.state).then(location.reload());
    e.preventDefault();
  }
  render() {
    return (
      <div>

      <Form onChange={this.onChange}>
        <Form.Label htmlFor="name">The animal name</Form.Label>
        <br></br>
        <br></br>
        <Form.Control type="text" name="name" />
        <br></br>
        <Form.Label htmlFor="ownerName">The owner name</Form.Label >
        <br></br>
        <Form.Control  type="text" placeholder="your name" name="ownerName"/>
        <br></br>
        <Form.Label  htmlFor="image">image</Form.Label >
        <br></br>
        <Form.Control type="text" placeholder="image url" name="imageUrl"/>
        <br></br>
        <Form.Label  htmlFor="description">description</Form.Label >
        <br></br>
        <Form.Control
          htmlFor="description"
          cols={50}
          rows={10}
          placeholder="description"
          name="description"
        />
        <br></br>
        <Form.Label htmlFor="race">race</Form.Label>
        <br></br>
        <Form.Control
          htmlFor="race"
          name="race"
          placeholder="race"
          type="text"
        />
        <br></br>
        <Form.Label htmlFor="age">age</Form.Label>
        <br></br>
        <Form.Control htmlFor="age" name="age" placeholder="age" type="number"/>
        <br></br>
        <Button variant="success" htmlFor="submit" type="submit" onClick={this.clickHandler}>
          Submit
        </Button>
      </Form>

      </div>
    );
  }
}

export default PutAdoption;
