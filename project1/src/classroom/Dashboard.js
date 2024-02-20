import React from 'react'
import DashNav from './component/Navbars/DashNav'
import TopNav from './component/Navbars/Topbar'
import './Dashboard.css'
export default function Dashboard() {
  let lastname=localStorage.getItem('name');
  return (
    <div>
    <DashNav></DashNav>
    <TopNav/>
    <h1 className='Name'>{lastname}</h1>
    </div>
  )
}
