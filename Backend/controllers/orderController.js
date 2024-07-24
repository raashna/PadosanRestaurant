import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import { newPayment } from "../controllers/payment.js";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SENDER_NODEMAILER,
        pass: process.env.APP_PASSWORD,
    },
});

const sendMail = async (order) => {
    const mailOptions = {
        from: {
            name: 'Padosan Restaurant',
            address: process.env.SENDER_NODEMAILER,
        },
        to: ["welcomethepadosan@gmail.com","krishndhwani@gmail.com"], 
        subject: "Order Confirmation",
        text: `Your order with ID ${order._id} has been confirmed.`,
        html: `<b>Your order with ID ${order._id} has been confirmed.</b>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email Sent");
    } catch (error) {
        console.log("Error sending email:", error);
    }
};

const placeOrder = async (req, res) => {
    const frontend_url = process.env.FRONTEND_URL;

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
            await sendMail(order);
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
        const orders = await orderModel.find({ userId: req.body.userId, payment: true }).sort({ date: -1 });  // Sort by date in descending order
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
