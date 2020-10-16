import React from "react";
import { Card ,Button, CardDeck} from "react-bootstrap";

class Animal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.data;
   // return (
  //    <div className="card">
  //      {console.log(this.props)}
   //     <span>my name:{data.name}</span>
   //     <img src={data.imageUrl} style={{ width: "50%" }}></img>
   //   </div>
   // );
   
      return(<div>
      
      <Card className="mb-3" style={{ color :"#808080" ,marginButton:"15px" , width: '18rem'}}  >
      <Card.Img src={data.imageUrl} style={{ width: "18rem", padding: "2px" ,height:"18rem" ,
       backgroundColor:"aliceblue",border: '2px solid black' }}/> 
      <Card.Body> 
      <Card.Title> my name:{data.name} </Card.Title>
      <Card.Text> {data.description} </Card.Text>
     
      <Button variant="success"> Adopt </Button>
      </Card.Body>
      </Card>
     
      </div>)
    
  }
}

export default Animal;
