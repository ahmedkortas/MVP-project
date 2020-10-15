import React from "react";
import axios from "axios";

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
    let x = e.target;
    this.setState({ [x.name]: x.value });
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
      <form onChange={this.onChange}>
        <label htmlFor="name">The animal name</label>
        <br></br>
        <br></br>
        <input type="text" name="name"></input>
        <br></br>
        <label htmlFor="ownerName">The owner name</label>
        <br></br>
        <input type="text" placeholder="your name" name="ownerName"></input>
        <br></br>
        <label htmlFor="image">image</label>
        <br></br>
        <input type="text" placeholder="image url" name="imageUrl"></input>
        <br></br>
        <label htmlFor="description">description</label>
        <br></br>
        <textarea
          htmlFor="description"
          cols={50}
          rows={10}
          placeholder="description"
          name="description"
        ></textarea>
        <br></br>
        <label htmlFor="race">race</label>
        <br></br>
        <input
          htmlFor="race"
          name="race"
          placeholder="race"
          type="text"
        ></input>
        <br></br>
        <label htmlFor="age">age</label>
        <br></br>
        <input htmlFor="age" name="age" placeholder="age" type="number"></input>
        <br></br>
        <button htmlFor="submit" type="submit" onClick={this.clickHandler}>
          Submit
        </button>
      </form>
    );
  }
}

export default PutAdoption;
