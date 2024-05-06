import React, { useEffect, useState } from 'react'
import './JoinCourse.css';
import axios from 'axios';
import QrScanner from 'qr-scanner';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function AskAi() {
  const [prompt_text,setPrompt_text]=useState("");
  
  const email=localStorage.getItem('email');

  
  function handleSubmits(e){
    e.preventDefault();
    axios.post('http://localhost:3001/ask-ai',{prompt_text})
    .then(result=>console.log(result) ,alert("Wait..."))
    .catch(err=>console.log(err))
  };
  return (
  <div>
    <Link to={"/dashboard"}><Icon icon="typcn:arrow-back" width="36" height="36" /></Link>
    <form onSubmit={handleSubmits}>
      <div className='center-container'>
        <p className='main-text' style={{fontSize:28}}>Ask AI</p>
      <input className="join-course-input" type='text' placeholder='Prompt' onChange={(e)=>setPrompt_text(e.target.value)} required/>
 
      <button className='ai-button' type='submit'>Ask AI</button>
      
      </div>
    </form>
    </div>
  )
}
