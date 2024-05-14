import React from "react";
import './Login.css'
import cross_icon from '/cross_icon.jpg'
import { useState } from "react";




const Login_popup = ({setShowLogin}) =>{

  const [currState,setCurrState] = useState("Login")
  return(
    <>
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={cross_icon}></img>
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder="Your Name" required/>}
          <input type="email" placeholder="Your email" required/>
          <input type="password" placeholder="Password" required/>
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
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