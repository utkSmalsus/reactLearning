import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardpanel(props) {
    return (
        <Card>
            <Card.Header as="h5">
                {props.Name}
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                   {props.Desc}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Cardpanel;