import React from "react";

class PutAdoption extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <label htmlFor="name">The animal name</label>
        <br></br>
        <input type="text" placeholder="name"></input>
        <br></br>
        <label htmlFor="ownerName">The owner name</label>
        <br></br>
        <input type="text" placeholder="your name"></input>
        <br></br>
        <label htmlFor="image">image</label>
        <br></br>
        <input type="text" placeholder="image url"></input>
        <br></br>
        <label htmlFor="description">description</label>
        <br></br>
        <textarea
          htmlFor="description"
          cols={50}
          rows={10}
          placeholder="description"
        ></textarea>
        <br></br>
        <label htmlFor="race">race</label>
        <br></br>
        <input htmlFor="race" placeholder="race" type="text"></input>
        <br></br>
        <label htmlFor="age">age</label>
        <br></br>
        <input htmlFor="age" placeholder="age" type="number"></input>
        <br></br>
        <button htmlFor="submit" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default PutAdoption;
