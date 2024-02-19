import React from 'react'
import './DashNav.css'
import { Icon } from '@iconify-icon/react';
export default function () {
  return (
    <div className='Sidebar'>
        <p className='web-title'><center>LearnSpace</center></p>
        <br/>
        <div>
          <div className='web-navi'>
            
           <Icon icon="fluent-mdl2:publish-course" />  My Courses
          </div>
          <div className='web-navi'>
         <Icon icon="material-symbols-light:assignment-outline" width="24" height="24" /> Assignments
          </div>
          <div className='web-navi'>
          <Icon icon="wpf:ask-question" width="24" height="24" /> Ask Doubts
          </div>
          <div className='web-navi'>
          <Icon icon="mdi:college" width="24" height="24" /> Join Course
          </div>
          <div className='web-navi'>
          <Icon icon="fluent:people-community-16-regular" width="24" height="24" /> Student Community
          </div>
          <div className='web-navi'>
          <Icon icon="logos:google-bard-icon" width="24" height="24" /> Ask AI
          </div>
          <div className='web-navi'>
          <Icon icon="noto-v1:books" width="24" height="24" /> Self-Space
          </div>
          
        </div>
    </div>
  )
}
