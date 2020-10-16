import React from "react";

class Animal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.data;
    return (
      <div className="card">
        {console.log(this.props)}
        <span>my name:{data.name}</span>
        <img src={data.imageUrl} style={{ width: "50%" }}></img>
      </div>
    );
  }
}

export default Animal;
