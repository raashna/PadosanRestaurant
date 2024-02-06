import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{ faWhatsapp, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const whatsappLink ='https://wa.me/9204950003';
    const facebookLink = 'https://www.facebook.com/kumar.arpan.7?mibextid=ZbWKwL';
    const instaLink = 'https://www.instagram.com/the.padosan?igsh=MXFxeHRxdWI4ZWxnZA==';
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="social-icons">
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
        <p>&copy; 2024 The Padosan</p>
      </div>
    </footer>
  );
};

export default Footer;