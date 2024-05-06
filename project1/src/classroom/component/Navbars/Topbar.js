import React, { useEffect } from 'react'
import './Topbar.css';
import { Icon } from '@iconify/react';

import { Link, useNavigate } from 'react-router-dom';
export default function Topbar() {
  let initial=localStorage.getItem("name");
  const navigate=useNavigate();
  const logout=()=>{
    
    localStorage.removeItem('name');

    localStorage.removeItem('email');

    localStorage.removeItem('password');

    localStorage.removeItem('instituteid');

    localStorage.removeItem('institutename');

    localStorage.removeItem('birthdate');


    
    
    navigate('/login');

  }
  return (
    <div className='topclass'>
        <form>
        <input className='searchbar' type='text' placeholder='Enter text'/>
        <button className='search' type="submit"><i class="fa fa-search"></i></button>
        </form>
        <Link className="profile" to={'/profile'}><div className='profile-logo'> {initial[0]} </div></Link>
        <Link to={'/'}><Icon className="log-out" icon="solar:logout-3-bold" width="30" height="30"  style={{color: "#9d07bb"}} /></Link>
        
        {/* <button type='button' className='logout' onClick={logout}>Logout</button> */}
    </div>
  )
}
