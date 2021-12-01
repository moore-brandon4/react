import { Component } from 'react';
import { Jumbotron, Card, CardBody, CardTitle} from 'reactstrap';
import Cards from "./Cards"
import TextForCards from './TextForCards';
import Dropdowns from './Dropdowns';
import Navbars from './Navbars';
import './App.css';


class App extends Component{
constructor(props){
  super(props);
  this.state={
    fade1: false,  
    fade2: false
  }
}

  render(){
    let cname="lead";
    //console.log(this.state.showSecondCard)
    return(
      <div>
        <Navbars>
        </Navbars>
        <Jumbotron>
          <h1 className="display-3">My Firt React App</h1>
          <p className={cname}>This is my first attempt</p>
          <hr className= {"my-2"} />
          <p> Playing with reactstrap</p>
          <p className={cname}></p>
        </Jumbotron>
        <Cards 
          fade1={this.state.fade1} 
          cardOneState={this.cardOneState}
          fade2={this.state.fade2}
          cardTwoState={this.cardTwoState}
          fade3={this.state.fade3}
          cardTwoState={this.cardThreeState}
        />
        {/* <Card key="firstCard" className="display-3">
          <CardBody>
            <CardTitle>My Card without Fade</CardTitle>
            <TextForCards cardNum={3}/>
          </CardBody>
        </Card> */}
        <Dropdowns>
        </Dropdowns>
        
      </div>
    )

  }
  cardOneState = () => {
    this.setState({ fade1 : !this.state.fade1})
  }
  cardTwoState = () => {
    this.setState({ fade2 : !this.state.fade2})
  }
  cardThreeState = () => {
    this.setState({ fade3 : !this.state.fade3})
  }
}


export default App;
