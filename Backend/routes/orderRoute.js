import express from "express"
import authMiddleware from "../middleware/auth.js"

import { listOrders, placeOrder,updateStatus,userOrders,verifyOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();
// todo 
// create varify end points tomorrow 

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/varify",verifyOrder);
orderRouter.post("/userOrders",authMiddleware,userOrders);

// for admin pannel
//  \\
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);
export default orderRouter
