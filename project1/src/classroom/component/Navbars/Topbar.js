import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom';
export default function Topbar() {
  let initial=localStorage.getItem("name");
  return (
    <div className='topclass'>
        <form>
        <input className='searchbar' type='text' placeholder='Enter text'/>
        <button className='search' type="submit"><i class="fa fa-search"></i></button>
        </form>
        <div className='profile-logo'><Link to={'/profile'}> {initial[0]}</Link> </div>
    </div>
  )
}
