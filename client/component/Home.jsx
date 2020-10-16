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
    }, 3500);
  }

  render() {
    this.slide();
    let item = this.props.items.items;
    return (
      <div>
        <img
          src={item[this.state.i]}
          style={{ width: "60%", height: "100%", position: "fixed" }}
        />
        <div style={{ width: "40%", float: "right", padding: "70px" }}>
          <p>
            This website only goal is to save as many animals as possible. We
            try to find good shelter and a loving family for our pets and a life
            companion for you. Help us help these animals, and help us help you
            to find a faithful partner for life. We believe in your empathy, we
            believe that you will make the right choice, we believe in you.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
