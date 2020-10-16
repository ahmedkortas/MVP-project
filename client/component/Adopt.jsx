import React from "react";
import axios from "axios";
import Animal from "./Animal.jsx";
import { Card ,Button, CardDeck} from "react-bootstrap";
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
      <div>
       <CardDeck>
        {this.state.data.map((element, index) => (
         
          <Animal key={index} data={element} />
         
        ))}
        </CardDeck>
      </div>
    );
  }
}

export default Adopt;
