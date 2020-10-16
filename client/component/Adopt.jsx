import React from "react";
import axios from "axios";
import Animal from "./Animal.jsx";

class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  dataUpdated() {
    axios.get("/api/Pet").then((response) => {
      if (this.state.data.length !== response.data.length) {
        this.setState({ data: response.data });
      }
    });
  }

  render() {
    this.dataUpdated();
    return (
      <div className="container">
        {this.state.data.map((element, index) => (
          <Animal key={index} data={element} />
        ))}
      </div>
    );
  }
}

export default Adopt;
