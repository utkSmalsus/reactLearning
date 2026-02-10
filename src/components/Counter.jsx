import { useState } from "react"



function Counter() {
const [count, setCount] = useState(0) //useState hook
    function handleClick(){
       setCount(count+1) 
    }
    function decrement(){
        if(count>0){
setCount(count-1)
        }
        else{
            setCount(0)
        }
      
    }


  return (
    <div>
      <h1>Counter</h1> 
      <button onClick={handleClick}>Increase</button>  <h1>{count}</h1> <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default Counter