import React from "react";
import './App.css';
import { Card, Button, CardBody, CardTitle, Fade, CardText} from 'reactstrap';

const Cards = (fade1, cardOneState, fade2, cardTwoState ) =>{
    return (
        <>
            <Card key="firstCard" className="display-3">
            <CardBody>
                <CardTitle>My Card</CardTitle>
                <Button onClick={() => cardOneState} > Button </Button>
                <Fade in={fade1} className="my-2">
                    <CardText>
                    fade card 1
                    </CardText>
                </Fade>
            </CardBody>
            </Card>
            <Card className="display-3">
            <CardBody>
                <CardTitle>My Second Card</CardTitle>
                <Button onClick={() => cardTwoState} > Button </Button>
                <Fade in={fade2} className="my-2">
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