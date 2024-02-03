import React from 'react';
import './popup.css'; // Import the CSS file
import atithi from '/atithi.png';

export const Popup = () => {
  return (
    <div class="pop">
        <button class="btn" ><img src={atithi}></img></button>
    </div>
  );
};

export default Popup;