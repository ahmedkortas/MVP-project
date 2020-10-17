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
          style={{
            width: '100%',
            height: '80%',
            position: 'inherit',
            padding: '25px',
            /* a<div>lign-content: center; */
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'}}
        />
        
    <div style={{ width: "40%", float: "right", padding: "70px" ,opacity:"0.5"}}>
     

   <footer className="page-footer font-small teal pt-4">  
     <div className="container-fluid text-center text-md-left">
           <div className="row">

               <div className="col-md-6 mt-md-0 mt-3">
        <h5 className="ABOUT US">ABOUT US</h5>
        <p>
                 This website only goal is to save as many animals as possible. We
                 try to find good shelter and a loving family for our pets and a life
                 companion for you. Help us help these animals, and help us help you
                 to find a faithful partner for life. We believe in your empathy, we
                 believe that you will make the right choice, we believe in you.
     </p>

      </div>
 

      <div className="clearfix w-100 d-md-none pb-3">
      <div className="col-md-6 mb-md-0 mb-3">

        <h5 className="text-uppercase font-weight-bold">Footer text 2</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
          commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
          excepturi hic.</p>

      </div>
     </div>
     </div>
  </div>
 
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
  AHMED & CHAIMA
  </div>


</footer>
  </div> 
   </div>
    );
  }
}

export default Home;
