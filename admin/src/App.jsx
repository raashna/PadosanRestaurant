import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes,Navigate } from 'react-router-dom'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'
import Add from './pages/Add/Add'
import AdminLogin from './pages/AdminLogin/AdminLogin'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = import.meta.env.VITE_BACKEND;
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/*" element={<ProtectedRoutes url={url} />} />
      </Routes>
    </div>
  );
};

const ProtectedRoutes = ({ url }) => {
  // Check if the user is authenticated
  const isAuthenticated = !!localStorage.getItem('token'); // Example check, you can use a better auth check
  return isAuthenticated ? (
    <>
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url} />} />
          <Route path='/orders' element={<Orders url={url} />} />
        </Routes>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;