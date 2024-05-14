import React from 'react';
import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{ faWhatsapp, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import logo from "/public/logo/padosan_logo.png"

const Footer = () => {
    const whatsappLink ='https://wa.me/9204950003';
    const facebookLink = 'https://www.facebook.com/kumar.arpan.7?mibextid=ZbWKwL';
    const instaLink = 'https://www.instagram.com/the.padosan?igsh=MXFxeHRxdWI4ZWxnZA==';
  return (
    <div className="footer">
      <div className="footer-content">
        <div className='footer-content-left'>
          <img src={logo}/>
          <div className="footer-social-icons">
          <a href={whatsappLink} className="icon-link" target='_blank'>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href={facebookLink} className="icon-link" target='_blank'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={instaLink} className="icon-link" target='_blank'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="tel:9430196007" className="icon-link">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Our Ventures</h2>
          <ul>
            <li>Atithi</li>
            <li>Amantran</li>
            <li>Titiksha</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>Phone:9204950003 | 9430196007  | 7677120003</li>
            <li>Email: welcomethepadosan@gmail.com</li>
          </ul>
        </div>  
      </div>
      <hr/>
      <p className='footer-copyright'>&copy; 2024 The Padosan.com - All Right Reserved</p>
    </div>
  );
};

export default Footer;