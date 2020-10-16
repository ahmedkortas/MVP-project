import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
    };
    this.slide = this.slide.bind(this);
  }

  slide() {
    setTimeout(() => {
      if (this.state.i < 3) {
        this.setState({ i: this.state.i + 1 });
      } else {
        this.setState({ i: 0 });
      }
    }, 2500);
  }

  render() {
    this.slide();
    let item = this.props.items.items;
    return (
      <img
        src={item[this.state.i]}
        style={{ width: "100%", position: "fixed" }}
      />
    );
  }
}

export default Home;
