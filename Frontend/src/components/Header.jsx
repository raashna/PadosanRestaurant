import React from'react';
import './Header.css';
import {Link} from  'react-router-dom'

const Header = () =>{
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2 className="img_text">Taste the difference.</h2>
                <Link to="/FoodChart">
                    <button>Order Now</button>
                </Link>
        
            </div>
        </div>
    )
}
export default Header