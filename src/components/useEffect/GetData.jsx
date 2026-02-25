import React, { use, useEffect, useState } from 'react'

function GetData() {
 const [data, setData]= useState()
const [count, setCount]= useState(0)
async function getData(){
    const res= await fetch(`https://dummyjson.com/users`)
    const result=await res.json()
  
setData(result.users)
console.log("rendering")

}


useEffect(()=>{
    getData()
},[count])

  return (
    <div>
         <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>count</button>
        {data && data.map((val)=>{ 
            return (
                <div className='' style={{display: 'flex', justifyContent: 'space-between'}}> <h4>{val.firstName}</h4> </div>
            )

        })}
       
    </div>
  )
}

export default GetData