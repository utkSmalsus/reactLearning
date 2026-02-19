
//import { Card, Container, Row, Col } from 'react-bootstrap'
//import './App.css'
//import Counter from './components/Counter'

// import Minitodo from './satyComponents/Minitodo';
// import Evenandoddck from './satyComponents/Evenandoddck';
// import { Cardpanel, Blogpanel } from './satyComponents/Card';
// import { blog } from './Data/Blog';
// import Newcount from './satyComponents/Newconut';
import UserForm from './components/useState/UserForm';
import Sigenupform from './satyComponents/Sinupform/sigenupform'
import Header from './satyComponents/Header';
import Footer from './satyComponents/footer';
import { blog } from './Data/Blog';
import Newcount from './satyComponents/Newconut';

//import Sigenupform from './satyComponents/Sinupform/Sigenupform'



function App() {
  //  let Name = "Html CSS JS";
  //  let Title = "React developer";
  //  let Desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.";
 


  return (
    <>
      <Header heading="Reacat program" subheading="my first program" /> {/* this is static data(custom attributes)*/}
      {/* <Getinput></Getinput>
    <Countersk></Countersk> 
   <Parent />*/}

      {/* <Counter /> */}
     
      {/* <Container className='my-5'>
        <Row>
        {
          blog.map((item, index) => {
            return (
              <Blogpanel blogitem={item} key={index} />
            )
          })
      }

        </Row>
      </Container>

      <Minitodo />
      <Evenandoddck />
      <Newcount /> */}
   {/* created by utkars */}
      {/* <Listing />

       <Userlist></Userlist> */}

      {/* created by satyendra smalsus */}
    
      {/* <Sigenupform /> */}
      

      {/* <Footer /> */}

      <UserForm /> 
      <Sigenupform></Sigenupform>
    </>
  )
}

export default App
