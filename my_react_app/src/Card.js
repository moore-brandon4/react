import React from "react";
import { Button, Card, CardBody, CardText, CardTitle, Jumbotron } from 'reactstrap';

const Cards = (props) =>{ 
    return(
        <>
      <div>
        
        <Card key="firstCard" className="display-3">
          <CardBody>
            <CardTitle>My Card</CardTitle>
            <Button onClick={() => cardOneState} >Button</Button>
            <Fade in={fade1} className="my-2">
            <CardText>
                fade card 1
            </CardText>    
            </Fade>
          </CardBody>
        </Card>
        <Card className="display-3">
          <CardBody>
            <CardTitle>My Card</CardTitle>
            <Button onClick={() => cardOneState} >Button</Button>
            <Fade in={fade1} className="my-2">
            <CardText>
                fade card 1
            </CardText>    
            </Fade>
          </CardBody>
        </Card>
      </div>
    )

  }
  cardOneState = () => {
    this.setState({ fade1 : !this.state.fade1})
  }
  cardTwoState = () => {
    this.setState({ fade2 : !this.state.fade2})
  }
}
}


export default App;
