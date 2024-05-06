import React, { useEffect, useState } from 'react'
import './JoinCourse.css';
import axios from 'axios';
import QrScanner from 'qr-scanner';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function JoinCourse() {
  const [course_join_code,setCourseJoin]=useState();
  
  const email=localStorage.getItem('email');

  
  function handleSubmits(e){
    e.preventDefault();
    axios.post('http://localhost:3001/join-course',{email,course_join_code})
    .then(result=>console.log(result) ,alert("Course Joined Successfully!!"))
    .catch(err=>console.log(err))
  };
  return (
  <div>
    <Link to={"/dashboard"}><Icon icon="typcn:arrow-back" width="36" height="36" /></Link>
    <form onSubmit={handleSubmits}>
      <div className='center-container'>
        <p className='main-text'>Enter Course-Code</p>
      <input className="join-course-input" type='text' placeholder='Public key' onChange={(e)=>setCourseJoin(e.target.value)} required/>
      <video></video>
 
      <button className='join-button' type='submit'>Join Course</button>
      <button className='join-button' type='submit'>Join Via QR</button>
      
      </div>
    </form>
    </div>
  )
}
