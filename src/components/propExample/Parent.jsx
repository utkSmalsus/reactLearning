import React from 'react'
import Child from './Child'

function Parent() {

    const fatherName = "John Doe" 
    const motherName = "Jane Doe"
  return (
  <>  
    <h1>Parent component</h1> 

    <p>Hello my self {fatherName}</p>


    <Child  fname={fatherName} mname={motherName}/>  
  
   </> 

  )
}

export default Parent