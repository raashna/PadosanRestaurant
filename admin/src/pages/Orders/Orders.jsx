import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import parcel_icon from "/xyz/parcel_icon.png";
import "react-toastify/dist/ReactToastify.css";
import { format } from "date-fns"; 
import "./Orders.css";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        // Filter orders to only include those with payment status true
        const paidOrders = response.data.data.filter(order => order.payment);
        setOrders(paidOrders);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("An error occurred while fetching orders.");
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders();
      } else {
        toast.error("Error updating status");
      }
    } catch (error) {
      toast.error("An error occurred while updating status.");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={parcel_icon} alt="parcel_icon.png" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, idx) => (
                  <span key={idx}>
                    {item.name} x {item.quantity}
                    {idx < order.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p className="order-item-name">
                {order.address.firstName} {order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street}, </p>
                <p>
                  {order.address.city}, {order.address.state}
                </p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
              <p className="order-item-date">
                Date: {format(new Date(order.date), "dd MMM yyyy, hh:mm a")}
              </p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>Rs {order.amount}</p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
