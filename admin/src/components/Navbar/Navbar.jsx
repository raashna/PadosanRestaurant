import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  
  return (
    <div className='navbar'>
      <img className='logo' src={assets.padosan_logo} alt=""/>
      <button className='logout' onClick={logout}><img src={assets.logout_icon} alt="" />logout</button>
    </div>
  )
}

export default Navbar
