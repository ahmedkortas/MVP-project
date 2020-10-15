import React from "react";
import axios from "axios";
import Animal from "./Animal.jsx";

class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  dataUpdated() {
    if (this.state.data.length === 0) {
      axios.get("/api/Pet").then((response) => {
        this.setState({ data: response.data });
      });
    }
  }

  render() {
    this.dataUpdated();
    return (
      <div>
        {this.state.data.map((element, index) => (
          <Animal key={index} data={element} />
        ))}
      </div>
    );
  }
}

export default Adopt;
