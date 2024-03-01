import React, { useEffect, useState } from 'react'

import axios from 'axios';
export default function JoinCourse() {
  const [course_join_code,setCourseJoin]=useState();
  // const course_join_code ="jsop";
  const email=localStorage.getItem('email');
  // setCourseJoin("jiosp");
  function handleSubmits(e){
    e.preventDefault();
    axios.post('http://localhost:3001/join-course',{email,course_join_code})
    .then(result=>console.log(result) ,alert("Course Joined Successfully!!"))
    .catch(err=>console.log(err))
  };
  return (
  <div>
 
    <form onSubmit={handleSubmits}>
      <input type='text' placeholder='Public key' onChange={(e)=>setCourseJoin(e.target.value)}/>
      <button type='submit'>Join Course</button>
    </form>
    </div>
  )
}
