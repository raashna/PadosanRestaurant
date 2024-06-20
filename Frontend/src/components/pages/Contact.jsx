import React from "react";
import "./Contact.css";
import telephone from "/telephone.webp";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(import.meta.env.VITE_SEND_FROM, import.meta.env.VITE_SEND_TEMPLATE, form.current, {
        publicKey: import.meta.env.VITE_PUB_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  
  

  return (
    <>
    

      <div className="startIMG">
        <img id="image" src={telephone} alt="Image of a teleponne" />

        <h3 className="bgtext">Contact US</h3>
      </div>

      <div className="mainStart">
        <div className="container">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt"></i>
                <div className="topic">Address</div>
                <div className="text-one">The Padosan, Argora Road, Kathal More Rd</div>
                <div className="text-two">Ranchi, Jharkhand 835303</div>
              </div>
              
              <div className="phone details">
                <i className="fas fa-phone-alt"></i>
                <div className="topic">Phone</div>
                <div className="text-one">9204950003</div>
                <div className="text-two">9430196007</div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope"></i>
                <div className="topic">Email</div>
                <div className="text-one">welcomethepadosan@gmail.com</div>
              
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Send us a message</div>
              <p>
                We welcome your inquiries and feedback regarding our restaurant.
                Please feel free to reach out to us with any queries or concerns
                by using the form below.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="input-box">
                  <input type="text" name="user_name" placeholder="Enter your name"/>
                </div>
                <div className="input-box">
                  <input type="text" name="user_email" placeholder="Enter your email"  />
                </div>
                <div className="input-box message-box">
                  {}
                  <textarea name="message"  placeholder="Enter your message"></textarea>
                </div>
                <button type="submit">
                  <span className="button_top"  > Button</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="Mapcontainer">
        <div className="location-text" maptitile>
          {" "}
          Our Location
        </div>

        <div className="mapingthemap" style={{ width: "70%" }}>
          <iframe
            width="70%"
            height="400"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=The%20Padosan,%20Argora%20Road,%20Kathal%20More%20Rd,%20Ranchi,%20Jharkhand%20835303+(The%20Padosan)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Calculate population in area
            </a>
          </iframe>
        </div>
      </div>
    </>
  );
};