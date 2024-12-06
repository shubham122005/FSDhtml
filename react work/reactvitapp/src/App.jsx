import React from 'react'
import Student from './Student'

import Statehandlanding from './Statehandlanding'

function App() {
//   const studentdata=[{
//     image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png ",
//     name:"Shubham kumar",
//     roll:"1234",
//     college:"ABES Engineering College"
//   },
//   {
//     image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png ",
//     name:"Nikhil kumar",
//     roll:"1234",
//     college:"ABES Engineering College"
//   },
//   {
//     image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png ",
//     name:"Prajjwal kumar",
//     roll:"1234",
//     college:"ABES Engineering College"
//   }
// ]
//   return (
//     <div>
//       <div>
//         <h2 style={{color:'red'}}> Hello React JS</h2>
//         <div>

//           <div>
//         {

          
//           studentdata.map((ele) => {
//             return( 
//               <Student data ={ele}/>
//             )   
            
//           })
//         }
        
//             {/* <Student data ={studentdata} /> */}
//           </div>
//           {/* <Student image={<img src={'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png '} height={100} width={100} />} name="Shubham Kumar"  roll="123" college="Abes Engineering college"/> */}
//         </div>
//       </div>
//     </div>
//   )
return(
  <Statehandlanding/>
)
}

export default App