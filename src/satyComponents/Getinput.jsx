
import React, { useState } from "react";

function InputExample() {
    const [name, setName] = useState("hello");
    
    const handleInputChange = (event) => {
        setName(event.target.value);
    };  
  return (
    <div>
      <h1>Getinput</h1>
     <div> <input
        type="text"
        placeholder="Enter your name"
        onChange={handleInputChange}
        // onChange={(event) => {setName(event.target.value)}}
      />
            <h2>Output: {name}</h2>
      </div> 
    </div>
  )
}

export default InputExample