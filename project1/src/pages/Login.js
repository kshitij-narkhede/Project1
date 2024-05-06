import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate=useNavigate();
  const win=window.localStorage;
  const handleSubmit=(e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{console.log(result)
    if(result.data!=="wrong" && result.data!=="empty"){
      win.setItem("name",result.data.name);
      win.setItem("email",result.data.email);
      win.setItem("password",result.data.password)
      win.setItem("instituteid",result.data.instituteid);
      win.setItem("institutename",result.data.institutename);
      win.setItem("birthdate",result.data.birthdate);
      win.setItem("addrtype",result.data.addrtype);
      win.setItem("acctype",result.data.acctype);

      console.log(result.data.email);
      navigate('/dashboard')
    }})
    // navigate('/')
    .catch(err=>console.log(err))
  }
  return (
    <div >
      <Navbar></Navbar>
      <div className='Logindiv'>
    <form className='box' onClick={handleSubmit}>
          
          <p style={{fontSize:24}}>Enter Email ID: </p>
          <input type='email' placeholder='email' name='email' id="username" onChange={(e)=>setEmail(e.target.value)}></input>
          <p style={{fontSize:24}}>Enter Password</p>
          <input type='password' placeholder='pass' name='password' id="pass" onChange={(e)=>setPassword(e.target.value)}></input>
          <button  id="submit" type='submit' onSubmit={handleSubmit} placeholder='Login '>Login</button>
    </form>
    </div></div>
  )
}
