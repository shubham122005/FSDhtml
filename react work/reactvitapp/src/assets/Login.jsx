import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom'


function Login({logindata}) {

    const[email,setEmail]=useState();
const[password,setPassword]=useState();

const navigate=useNavigate();


    function verification(){
        if(logindata.email==email){
            alert("User is valid");
            navigate('/dashboard') 

        }
        else{
            alert("user is invalid")
        }
        
    

    }



  return (
    <div><form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input onChange={(e)=>setEmail(e.target.value)} type='email'/>
     </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
   
    <button type="submit" onClick={verification} class="btn btn-primary">Login</button>
  </form></div>
  )
}

export default Login