function evenodd(num){
    let name = "Event and odd checker program in react";
    let number = num;
    if(number%2===0){
        name = "The number is even";
    }
    else{
        name = "The number is odd";
    }   

return(
<>
<h2>{name}</h2>   
<input type="text" placeholder="enter a number" ></input> <button>Check</button>  
</>
);
}

export default evenodd;