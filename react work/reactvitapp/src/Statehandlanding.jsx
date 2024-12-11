import React, { useState } from 'react'

function Statehandlanding() {
    const[count,setCount]=useState(20);

    function doIncrement(){
        // alert("Hello");
        setCount(count+20)
    }
    function doDecreament(){
      setCount(count-20)
    }
  return (
    <div>
   
    <div>Statehandlanding
        <h2>Counter Value:{count}</h2>
    </div>
    <div>
        <button onClick={doIncrement}>Increament

        </button>
        <div>
          <br />
          <button onClick={doDecreament}> Decreament</button>
        </div>

    </div>
    </div>
        
  )
}

export default Statehandlanding