import React from "react";

class Animal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.data;
    return (
      <div>
        {console.log(this.props)}
        <span>my name:{data.name}</span>
        <img src={data.imageUrl} style={{ width: "10%" }}></img>
      </div>
    );
  }
}

export default Animal;
