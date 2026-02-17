//import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function header(props){

    return(
        <>
   <header style={{backgroundColor:"#ccc", }}>
         <Container>
            <Row>
                <Col md={6} className="text-left  p-4 ">
                  <h1 style={{color:"#000;"}}>{props.heading} </h1>
                </Col>  
                <Col md={6} className="col-md-6 p-4 text-end">
                {props.subheading}  
                  <FontAwesomeIcon icon={faCoffee} />
                     <FontAwesomeIcon icon={faFacebook} />
                     <FontAwesomeIcon icon={faLinkedin} />
                </Col>
            </Row>
         </Container>
         </header>
        </>

       
    );
}
export default header;