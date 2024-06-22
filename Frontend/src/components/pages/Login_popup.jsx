import React, { useContext } from "react";
import './Login.css'
import cross_icon from '/cross_icon.jpg'
import { useState } from "react";
import { StoreContext } from "../StoreContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateEmail, validatePassword } from './formValidation';
import { useNavigate } from "react-router-dom";


const Login_popup = ({setShowLogin}) =>{

  const {url,setToken} = useContext(StoreContext)
  const [userType, setUsertype] = useState("");
  const [secretKey,setSecretKey]=useState("");
  const [currState,setCurrState] = useState("Login");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    userType:""
  });
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onUserTypeChange = (event) => {
  setUsertype(event.target.value);
  setData(data => ({ ...data, userType: event.target.value }));
};

  const validateForm = () => {
    const newErrors = {};
    newErrors.email = validateEmail(data.email);
    newErrors.password = validatePassword(data.password);
    return newErrors;
};

const onLogin = async (event) => {
  event.preventDefault();
  const validationErrors = validateForm();
  const hasErrors = Object.values(validationErrors).some(error => error !== "");

  
  setData(data => ({ ...data, userType }));

  if (userType==="Admin"){
    if(secretKey!==import.meta.env.VITE_SECRET_KEY || data.email!==import.meta.env.VITE_ADMIN_MAIL){
      toast.error("Invalid Admin");
      return;
    }
  }

  if (hasErrors) {
      Object.values(validationErrors).forEach(error => {
          if (error) toast.error(error);
      });
      return;
  }

  let newUrl = url;
  if (currState === "Login") {
      newUrl += "/api/user/login";
  }else {
      newUrl += "/api/user/register";
  }

  try {
      const response = await axios.post(newUrl, { ...data, secretKey });
      if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
      if (response.data.userType === "Admin") {
        window.location.href = "http://localhost:5173";
        }
      }else {
        toast.error(response.data.message);
      }
  } catch (error) {
      console.error("Error logging in", error);
      alert("An error occurred while logging in. Please try again.");
  }
};


  return(
    <>
    <ToastContainer />
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={cross_icon}></img>
        </div>
        {currState==="Login"?
        <div className="optioning_user">
        <span>Register As </span>
        <label>
            <input
                type="radio"
                name="userType"
                value="User"
                onChange={onUserTypeChange}
            />
            User
        </label>
        <label>
            <input
                type="radio"
                name="userType"
                value="Admin"
                onChange={onUserTypeChange}
            />
            Admin
        </label>
    </div>
        :null}
        {userType==="Admin" && currState==="Login" ?<div className="login-popup-inputs">
          <label>Secret Key</label>
          <input 
           type="text"
           name="secretKey"
           placeholder="Secret Key"
           onChange={(e) => setSecretKey(e.target.value)}
           />
        </div>:null}
        

        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Your Name" required/>}
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your email" required/>
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required/>
        </div>
        <button type="submit">{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          By continuing, I agree to the terms of use & privacy policy.
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
    </>
  );
}

export default Login_popup