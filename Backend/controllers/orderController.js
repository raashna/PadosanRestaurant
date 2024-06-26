import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import { newPayment } from "../controllers/payment.js";
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);


const sendWhatsAppNotification = async (order) => {
    try {
     
        const message = `
        
            A new order has been placed.
            Order ID: ${order._id}
            User ID: ${order.userId}
            Amount: ${order.amount}
            Items: ${order.items.map(item => `${item.name} (Qty: ${item.quantity})`).join(', ')}
            Kindly check the admin panel for more details.`;
            await client.messages.create({
            body: message,
            from: process.env.TWILIO_WHATSAPP_NUMBER,
            to: process.env.MY_PHONE_NUMBER
             
        });

        console.log('SMS notification sent successfully');
    } catch (error) {
        console.error('Error sending SMS notification:', error);
    }
};




const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5174";

    try {
        const newOrder = new orderModel({
            merchantId: process.env.MERCHANT_ID,
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            transactionId: req.body.transactionId,
        });

        await newOrder.save();
        const orderId = newOrder._id;
        console.log("Generated Order ID:", orderId);
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        const paymentResult = await newPayment(req,orderId);
        
        if (paymentResult.success) {
            res.json({ success: true, paymentUrl: paymentResult.paymentUrl });
        } else {
            res.json({ success: false, message: paymentResult.message });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};



const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        const objectId = new mongoose.Types.ObjectId(orderId);
        const order = await orderModel.findById(objectId);  // Retrieve order details

        if (!order) {
            return res.json({ success: false, message: "Order not found" });
        }

        if (success === "true") {
            await orderModel.findByIdAndUpdate(objectId, { payment: true });
            res.json({ success: true, message: "Paid" });
           await sendWhatsAppNotification(order);  // Send WhatsApp notification after response
        } else {
            await orderModel.findByIdAndDelete(objectId);
            res.json({ success: false, message: "Not Paid" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};



// User orders to frontend
// User orders to frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId }).sort({ date: -1 }); // Sort by date in descending order
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};



// for admin pannel -> Orders list // 
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ payment: true }).sort({ date: -1 });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};



// update Order Status api

const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });

         res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}



export { placeOrder, verifyOrder, userOrders, listOrders,updateStatus };
