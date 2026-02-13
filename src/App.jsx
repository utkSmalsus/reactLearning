
import { Card, Container, Row, Col } from 'react-bootstrap'
import './App.css'
//import Counter from './components/Counter'
import Countersk from './satyComponents/Countersk'
import Getinput from './satyComponents/Getinput';
import Parent from './components/propExample/Parent';
import Minitodo from './satyComponents/Minitodo';
import Evenandoddck from './satyComponents/Evenandoddck';
import Header from './satyComponents/Header';
import Cardpanel from './satyComponents/Card';


function App() {
  // let Name = "Html CSS JS";
  // let Title = "React developer";
  // let Desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.";

  return (
    <>
    <Header/>
  {/* <Getinput></Getinput>
    <Countersk></Countersk> 
   <Parent />*/}
   
   {/* <Counter /> */}
   <Container className='my-5'>
    <Row>
      <Col md={4}>
       <Cardpanel Name={Name} Title={Title} Desc={Desc} /> 
      </Col>
        <Col md={4}>
       <Cardpanel Name={Name} Title={Title} Desc={Desc} /> 
      </Col>
        <Col md={4}>
       <Cardpanel Name={Name} Title={Title} Desc={Desc} /> 
      </Col>
    </Row>
   </Container>
   
   <Minitodo />
   <Evenandoddck />
    </>
  )
}

export default App
