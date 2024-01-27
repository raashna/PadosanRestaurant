import React from "react";
import './Contact.css'
export const Contact = () => {
  return (
    <>
    <form>
     <h1>Contact <span>Us</span></h1>
     <input type ="text" name = "name" id="" placeholder="Enter name"/>
     <input type="email" name="email" id="" placeholder="Enter Email" />
     <input type="phone" name="phone" id="" placeholder="+91" /> 

     <textarea name = "message" id="" cols="30" rows="10" placeholder="Share your thoughts..."></textarea>
     <button type="submit ">Send</button>
    </form>
    </>
  );
};
