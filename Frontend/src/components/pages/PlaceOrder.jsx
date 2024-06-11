import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../StoreContext';
import axios from 'axios';
import { validatePhoneNumber, validateCity, validateState } from './formValidation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PlaceOrder = () => {
    const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        phone: ""
    });
    const [errors, setErrors] = useState({});
    const navigat = useNavigate()
    useEffect(() => {
        if (!token) {
            navigat('/FoodBasketFinal')

        } else if (getTotalCartAmount() === 0) {
            navigat('/FoodBasketFinal')
        }
    }, [token])
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };
    const validateForm = () => {
        const newErrors = {};
        newErrors.phone = validatePhoneNumber(data.phone);
        newErrors.city = validateCity(data.city);
        newErrors.state = validateState(data.state);
        return newErrors;
    };
//reminder BOTH are different functions
    const placeOrder = async (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);
        const hasErrors = Object.values(validationErrors).some(error => error !== "");
        if (hasErrors) {
            Object.values(validationErrors).forEach(error => {
                if (error) toast.error(error);
            });
            return;
        }
       let orderItems = [];
        food_list.forEach((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = { ...item, quantity: cartItems[item._id] };
                orderItems.push(itemInfo);
            }
        });
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 20,
            MUID: "MUID" + Date.now(),
            transactionId: "MT" + Date.now() // Or generate this in your backend
        };

        try {
            const response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
            if (response.data.success) {
                const { paymentUrl } = response.data;
                window.location.replace(paymentUrl);
            } else {
                console.log("Error", response.data.message);
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error placing order", error);
            alert("An error occurred while placing the order. Please try again.");
        }
    
    };

    return (
        <>
        <ToastContainer />
        <form onSubmit={placeOrder} className='place-order'>
            <div className='place-order-left'>
                <p className='title'>Delivery Information</p>
                <div className="multi-fields">
                        <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
                        <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
                    </div>
                    <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
                    <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
                    <div className="multi-fields">
                        <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
                        <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
                    </div>
                    <div className="multi-fields">
                        <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
                    </div>
                    <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
                </div>
            <div className="place-order-right">
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
                            <p>$ {0}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>$ {getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button type='submit'>Proceed to PAYMENT</button>

                </div>
            </div>
        </form>
        </>
    );
};

export default PlaceOrder;
