import React from 'react'
import './DashNav.css'
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';
export default function () {
  function account_identify(){
  if(localStorage.getItem('acctype')==="Faculty"){
    return(
      <Link className='create-course' to={'/create-course'}>  Create Course</Link>
    )
  }
  else{
    return(
    <Link className='create-course' to={'/join-course'}>Join Course</Link>)
  }
}
function account_identify1(){
  if(localStorage.getItem('acctype')==="Faculty"){
    return(
      <Link className='my-course' to={'/my-course'}> My Courses</Link>
    )
  }
  else{
    return(
      <Link className='my-course' to={'/enrolled-course'}> My Courses</Link>)
  }
}
  return (
    <div className='Sidebar'>
        <p className='web-title'><center>LearnSpace</center></p>
        <br/>
        <div>
          <div className='web-navi'>
            
           <Icon icon="fluent-mdl2:publish-course" /> {account_identify1()}
          </div>
          <div className='web-navi'>
         <Icon icon="material-symbols-light:assignment-outline" width="24" height="24" /> Assignments
          </div>
          <div className='web-navi'>
          <Icon icon="wpf:ask-question" width="24" height="24" /> Ask Doubts
          </div>
          <div className='web-navi'>
          <Icon icon="mdi:college" width="24" height="24" />{account_identify()}
          </div>
          <div className='web-navi'>
          <Icon icon="fluent:people-community-16-regular" width="24" height="24" /> Student Community
          </div>
          <div className='web-navi'>
          <Link className='my-course' to={'/ask-ai'}><Icon icon="logos:google-bard-icon" width="24" height="24" />Ask AI</Link>
          
          </div>
          <div className='web-navi'>
          <Icon icon="noto-v1:books" width="24" height="24" /> Self-Space
          </div>
          
        </div>
    </div>
  )
}
