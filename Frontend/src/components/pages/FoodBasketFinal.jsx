import React, { useContext } from "react";
import './FoodBasketFinal.css'
import { food_list } from "../../assests/assets";
import { StoreContext } from "../StoreContext";
import { Link } from 'react-router-dom';

const FoodBasketFinal = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);


    return (
        <>
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
                                        <p>$ {item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>$ {item.price * cartItems[item._id]}</p>
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
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>$ {getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>$ {20}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Total</p>
                                <p>$ {getTotalCartAmount() + 20}</p>
                            </div>

                        </div>
                        <Link to="/PlaceOrder">
                            <button  >Proceed to Checkout </button>
                        </Link>
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