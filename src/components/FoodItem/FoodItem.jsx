import React, { useContext } from 'react';
import './foodItem.css';
import { StoreContext } from '../StoreContext';

const FoodItem = ({ id, name, price }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    const handleIncrement = () => {
        addToCart(id);
    };

    const handleDecrement = () => {
        removeFromCart(id);
    };

    return (
        <div className='food-item'>
            <div className='food-item-info'>
                <div className='food-item-name'>{name}</div>
                <div className='food-item-price'>Price: ${price}</div>
            </div>

            <div className='food-item-counter'>
                {cartItems[id] > 0 && (
                    <button className='counter-button-negative' onClick={handleDecrement}>-</button>
                )}
                {cartItems[id] > 0 && <span className='item-count'>{cartItems[id]}</span>}
                <button className='counter-button-positive' onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
};

export default FoodItem;
