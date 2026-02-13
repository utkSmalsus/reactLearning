//import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function header(){
    return(
        <>
   <header style={{backgroundColor:"#ccc", padding:"20px"}}>
         <Container>
            <Row>
                <Col md={6} className="text-left border p-4 bg-light">
                  <h1 style={{color:"#000;"}}>React program </h1>
                </Col>  
                <Col md={6} className="text-right border p-4 bg-light">
                My first react program
                </Col>
            </Row>
         </Container>
         </header>
        </>

       
    );
}
export default header;