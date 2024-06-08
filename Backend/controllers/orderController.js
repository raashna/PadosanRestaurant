import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import { newPayment } from "../controllers/payment.js";
import dotenv from 'dotenv';

dotenv.config();

const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173";

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
    const {orderId,success} = req.body;
    try {
        if (success=="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:"Paid"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"Not Paid"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export { placeOrder,verifyOrder};
