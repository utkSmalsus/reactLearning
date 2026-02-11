import React from 'react'

function Child(props) {

   
  return (
    <div>

        <h3>Child component. </h3> 
        <p>My self snow doe and my father name is {props.fname} and mother name is {props.mname} </p>
    </div> 
  )
}

export default Child