import { Component } from 'react';
import './App.css';
import { Button, Card, CardBody, CardTitle, Jumbotron } from 'reactstrap';

class App extends Component{
constructor(props){
  super(props);
  this.state={
    showSecondCard: false  
  }
}

  render(){
    let cname="lead";
    //console.log(this.state.showSecondCard)
    return(
      <div>
        <Jumbotron>
          <h1 className="display-3">My Firt React app</h1>
          <p className={cname}>This is my first attempt</p>
          <hr className= {"my-2"} />
          <p> Playing with reactstrap</p>
          <p className={cname}></p>
        </Jumbotron>
        <Card key="firstCard">
          <CardBody>
            <CardTitle>My Card</CardTitle>
            <Button onClick={() => this.setState({ showSecondCard : true})} >Button</Button>
          </CardBody>
        </Card>
        {this.state.showSecondCard ? <Card>
          <CardBody>
            <CardTitle>My Second Card</CardTitle>
            <Button onClick={() => this.setState({ showSecondCard : false})} >Button</Button>
          </CardBody>
        </Card> : null }
      </div>
    )

  }
}


export default App;
