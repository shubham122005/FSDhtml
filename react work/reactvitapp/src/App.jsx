import React, { useState } from 'react'
import Student from './Student'
import Statehandlanding from './Statehandlanding'
import ImageManipulation from './ImageManipulation'
import UseEffectwork from './UseEffectwork'
import Login from './assets/login'
import Registration from './assets/registration'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Mainlayout from './Mainlayout'
import Dashboard from './Dashboard'

function App() {
  const[rdata,setrdata]=useState();




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

  
  

  

  // <Statehandlanding/>
  // <ImageManipulation/>
  

    // <UseEffectwork/>
    <div>
     {JSON.stringify(rdata)}

     <BrowserRouter>
    <Routes>
    <Route path='/' element={<Mainlayout/>}>
      <Route path='/login' element={<Login logindata={rdata} />}/>

      <Route path='/reg' element={<Registration regdata={setrdata} />}/>

      </Route>

      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>

     </BrowserRouter>

      {/* <h2>Login Form</h2>

      <Login logindata={rdata}/>
     <br></br>
     <h2>Registration Form</h2>
     <Registration regdata={setrdata}/> */}
    </div>
  
)
}

export default App