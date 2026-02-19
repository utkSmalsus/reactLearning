
import { Card, Container, Row, Col } from 'react-bootstrap'
import './App.css'
//import Counter from './components/Counter'

// import Minitodo from './satyComponents/Minitodo';
// import Evenandoddck from './satyComponents/Evenandoddck';
// import { Cardpanel, Blogpanel } from './satyComponents/Card';
// import { blog } from './Data/Blog';
// import Newcount from './satyComponents/Newconut';
// import UserForm from './components/UserForm';
import Header from './satyComponents/Header';
import Footer from './satyComponents/footer';
import Sigenupform from './satyComponents/Sinupform/sigenupform';
import Listing from './satyComponents/map/Listing';
import Userlist from './satyComponents/map/Userlist';

<satyComponents />



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
  {/*     created by utkars

      <UserForm /> */}

      {/* <Listing />

       <Userlist></Userlist> */}

      {/* created by satyendra smalsus */}
      <Sigenupform />
      

      {/* <Footer /> */}

    </>
  )
}

export default App
