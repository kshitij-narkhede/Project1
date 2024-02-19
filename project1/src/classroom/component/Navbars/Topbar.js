import React from 'react'
import './Topbar.css'
export default function Topbar() {
  return (
    <div className='topclass'>
        <form>
        <input className='searchbar' type='text' placeholder='Enter text'/>
        <button className='search' type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>
  )
}
