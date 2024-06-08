import express from "express"
import authMiddleware  from "../middleware/auth.js"
import {checkStatus} from "../controllers/payment.js"
import { placeOrder, verifyOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();
// todo // create multiple end points tomorrow 

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/status/:txnId",checkStatus);
orderRouter.post("/verify",verifyOrder);

export default orderRouter;
