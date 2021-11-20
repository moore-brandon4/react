import React from "react";
import { Button, Card, CardBody, CardText, CardTitle, Fade} from 'reactstrap';

const Cards = (props) =>{ 
    return(
      <>
        <Card key="firstCard" className="display-3">
          <CardBody>
            <CardTitle>My Card</CardTitle>
            <Button onClick={() => props.cardOneState()} >Button</Button>
            <Fade in={props.fade1} className="my-2">
            <CardText>
                fade card 1
            </CardText>    
            </Fade>
          </CardBody>
        </Card>
        <Card className="display-3">
          <CardBody>
            <CardTitle>My Second Card</CardTitle>
            <Button onClick={() => props.cardTwoState()} >Button</Button>
            <Fade in={props.fade2} className="my-2">
            <CardText>
                fade card 2
            </CardText>    
            </Fade>
          </CardBody>
        </Card>
      
      </>
    )

  }
  
  export default Cards;





