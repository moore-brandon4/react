import { Component } from 'react';
import './App.css';
import { Jumbotron } from 'reactstrap';

class App extends Component{
  render(){
    let cname="lead"
    return(
      <div>
        <Jumbotron>
          <h1 className="display-3">My Firt React app</h1>
          <p className={cname}>This is my first attempt</p>
          <hr className= {my-2} />
          <p> Playing with reactstrap</p>
          <p className={cname}></p>
        </Jumbotron>
      </div>
    )

  }
}


export default App;
