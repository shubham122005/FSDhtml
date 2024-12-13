import React, { useEffect, useState } from 'react'

function UseEffectwork() {
 const [count,setCount]=useState(10);  
 const[pointer,setPointer]=useState(100); 
 function doIncrement(){
    setCount(count+20);
 }
 function dopinter(){
  setPointer(pointer-10)
 }

    useEffect(()=>{

        console.log("component is rendered using count"+count);
        <br></br>
        console.log("component is rendered using pointer"+pointer);
    },[count,pointer])
  return (
    <div>
        count value:{count}
        count value:{pointer}
        <div>
            <button onClick={doIncrement}>Increament</button>
            <button onClick={dopinter}>Poniter</button>
        </div>
    </div>
    
  )
}

export default UseEffectwork