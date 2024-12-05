import React from 'react'
import Student from './Student'

function App() {
  return (
    <div>
      <div>
        <h2 style={{color:'red'}}> Hello React JS</h2>
        <div>
          <Student image={<img src={"https://cdn.dummyjson.com/recipe-images/1.webp "} />} name="Shubham Kumar"  roll="123" college="Abes Engineering college"/>
        </div>
      </div>
    </div>
  )
}

export default App