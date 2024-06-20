import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import { newPayment } from "../controllers/payment.js";
import dotenv from 'dotenv';

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
           
            // payment:req.body.payment,
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Call the newPayment function to initiate PhonePe payment
        const paymentUrl = await newPayment(req, res);

        /*const session = await phonepe.checkout.sessions.create({
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder}`
        })*/
        
        res.json({ success: true, paymentUrl });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

const verifyOrder = async (req,res) => {
    const {userId,success} = req.body;
    try {
        if (success==="true"){
            await orderModel.findByIdAndUpdate(userId,{payment:true});
            res.json({success:true,message:"Paid"})
        }
        else{
            await orderModel.findByIdAndDelete(userId);
            res.json({success:false,message:"Not Paid"})
        }
            await sendWhatsAppNotification(newOrder);

        //  res.json({ success: true, paymentUrl });  //-->(giving error(Multiple request))
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}


// User orders to frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// for admin pannel -> Orders list // 
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}


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
