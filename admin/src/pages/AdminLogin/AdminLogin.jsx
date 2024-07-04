import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./AdminLogin.css"
import {assets} from '../../assets/assets'

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND}/api/user/login`, {
        email,
        password,
        userType: 'Admin',
        secretKey
      });
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        navigate('/orders');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  return (
    <div className="admin-login">
      <img src={assets.padosan_logo} className='img'/>
      <form onSubmit={handleSubmit} className='container'>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Secret Key:</label>
          <input type="text" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
