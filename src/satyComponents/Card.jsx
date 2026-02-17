import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Cardpanel(props) {
    let btvalue= "Go somewhere";
    return (
        <Col md={4} className="mb-4" >               
        <Card>
            <Card.Header as="h5">
                {props.casrdData.Name}
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.casrdData.Title}</Card.Title>
                <Card.Text>
                   {props.casrdData.Desc}
                </Card.Text>
                <Button variant="primary">{btvalue}</Button>
            </Card.Body>
        </Card>
        </Col>
    )
}
 

export function Blogpanel({blogitem}) {
    let btvalue= "Go somewhere";
    return (
        <Col md={4} className="mb-4" >               
        <Card>
            <Card.Header as="h5">
                {blogitem.id}
            </Card.Header>
            <Card.Body>
                <Card.Title>{blogitem.title}</Card.Title>
                <Card.Text>
                   {blogitem.body}
                </Card.Text>
                <Button variant="primary">{btvalue}</Button>
            </Card.Body>
        </Card>
        </Col>
    )
}

