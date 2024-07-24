
import React, { useContext } from "react";
import './FoodBasketFinal.css'
import {food_list} from "../../assests/assets";
import { StoreContext } from "../StoreContext";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const FoodBasketFinal = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    const isCartTotalValid = () => {
        return getTotalCartAmount() > 2;
    };

    // Function to display a toast message
    const displayToast = () => {
        toast.error("Your cart must have an order above Rs 200");

    };

    return (
        <>
         <ToastContainer /> 
            <div className="cart">

                <div className="cart-items">
                    <div className="cart-items-title">
                        <p>Items</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>

                    </div>
                    <br />
                    <hr />
                    {food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div>
                                    <div className="cart-items-title cart-items-item">
                                        <p>{item.name}</p>
                                        <p>Rs {item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>Rs {item.price * cartItems[item._id]}</p>
                                        <p onClick={() => removeFromCart(item._id)} className="crossX">X</p>
                                    </div>
                                    <hr />
                                </div>
                            )
                        }
                    })}


                </div>
                <div className="cart-botton">
                    <div className="cart-total">
                        <h2>Cart Total</h2>
                        <div className="cart-total-special-box">
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>Rs {getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>Rs {0}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Total</p>
                                <p>Rs {getTotalCartAmount() }</p>
                            </div>

                        </div>
                        {!isCartTotalValid() ? (
                            <button onClick={displayToast}>Proceed to Checkout</button>
                        ) : (
                            <Link to="/PlaceOrder">
                                <button>Proceed to Checkout</button>
                            </Link>
                        )}
                    </div>
                    <div className="cart-promocode">
                        <div>
                            <p>Enter Promocode</p>
                            <div className="cart-promocode-input">
                                <input type="text" placeholder="promo code"></input>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default FoodBasketFinal