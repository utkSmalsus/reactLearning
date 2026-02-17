
import { Card, Container, Row, Col } from 'react-bootstrap'
import './App.css'
//import Counter from './components/Counter'

import Minitodo from './satyComponents/Minitodo';
import Evenandoddck from './satyComponents/Evenandoddck';
import Header from './satyComponents/Header';
import { Cardpanel, Blogpanel } from './satyComponents/Card';
import Footer from './satyComponents/footer';
import { blog } from './Data/Blog';
import Newcount  from './satyComponents/Newconut';



function App() {
  //  let Name = "Html CSS JS";
  //  let Title = "React developer";
  //  let Desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.";
   let casrdData = {
    Name: "Html CSS JS and React",
    Title: "React developer",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."

  }
  let footerinfo = {
    Copy: "Copyright @ 2024",

  }


  return (
    <>
    <Header heading="Reacat program" subheading="my first program"/> {/* this is static data(custom attributes)*/}
  {/* <Getinput></Getinput>
    <Countersk></Countersk> 
   <Parent />*/}
   
   {/* <Counter /> */}
   <Container>
    <Row>
          <Cardpanel casrdData={casrdData} /> 
          <Cardpanel casrdData={casrdData} /> 
               <Cardpanel casrdData={casrdData} /> 
                    <Cardpanel casrdData={casrdData} /> 
    </Row>
 
   </Container>
   <Container className='my-5'>
    <Row> 
      {blog.map((item,index)=>{
        return(
       <Blogpanel blogitem={item} key={index} /> 
        )
      })
      }
    
    </Row>
   </Container>
   
   <Minitodo />
   <Evenandoddck />
   <Newcount />

    <Footer footerinfo={footerinfo}><h6>Design by saty</h6></Footer>

    </>
  )
}

export default App
