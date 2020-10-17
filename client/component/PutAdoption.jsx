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

    const formContact={
      display:'flex',
      justifyContent:'center'
    }
    const inputContact={
      width:"300px"
    }
    const formMain={
      width: "340px",
      border: "2px solid #bc007e",
      padding: "20px"
    }
    const styleForm ={
      backgroundColor:'white;',
      width:'300px',
      borderRadius:'6px;',
      margin:'0 auto 0 auto;',
      padding:'0px 0px 70px 0px;',
      border: '#2980b9 4px solid;'
    }

    return (
      <div style={formContact}>

      <Form onChange={this.onChange}  style ={styleForm,formMain}>
        <Form.Label htmlFor="name">The animal name</Form.Label>
        <br></br>
        <br></br>
        <Form.Control type="text" name="name"  style ={styleForm}/>
        <br></br>
        <Form.Label htmlFor="ownerName">The owner name</Form.Label >
        <br></br>
        <Form.Control  type="text" placeholder="your name" name="ownerName" style ={styleForm}/>
        <br></br>
        <Form.Label  htmlFor="image">image</Form.Label >
        <br></br>
        <Form.Control type="text" placeholder="image url" name="imageUrl" style ={styleForm}/>
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
          style ={styleForm}
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
