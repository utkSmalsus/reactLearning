import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import { useState } from "react"


function Countersk() {
  const [count, setCount] = React.useState(0);
  
  const handleIncrease = () => {
    setCount(count + 1);
  };  
  const handleDecrease = () => {
    if(count > 0){
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }
  return (
<>
  <Container>

      <h1 style={{marginBottom:"20px"}}>Counter program </h1>
      <Row>

   <Col md={12} className=" text-center border p-4 bg-light">
   <button onClick={handleIncrease} className='btn btn-primary'>increage</button>
   <span style={{padding:"10px", border:"1px solid #ccc",margin:"0px 10px"}}>{count}</span>
   <button onClick={handleDecrease} className='btn btn-danger'>Decreage</button>
  </Col>

  </Row>
  </Container>


</>
  )
}

export default Countersk