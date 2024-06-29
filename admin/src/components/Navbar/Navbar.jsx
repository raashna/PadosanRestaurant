import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const logout = () => {
  window.location.href = import.meta.env.VITE_FRONTEND;
}


const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.padosan_logo} alt=""/>
      <button className='logout' onClick={logout}><img src={assets.logout_icon} alt="" />logout</button>
    </div>
  )
}

export default Navbar
