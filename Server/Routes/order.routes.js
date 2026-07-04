import express from "express";
import { placeOrder,userOrders, allOrders, updateStatus, placeOrderRazorpay } from "../Controllers/Order.controllers.js";
import { isAuth } from "../Middlewares/isAuth.middlewares.js";
import { AdminAuth } from "../Middlewares/adminauth.middlewares.js";
export const orderRouter=express.Router();

orderRouter.post("/placeorder",isAuth,placeOrder)
orderRouter.post("/userorder",isAuth,userOrders)
orderRouter.post("/placeorderrazorpay",isAuth,placeOrderRazorpay)

orderRouter.get("/allorders",AdminAuth,allOrders)
orderRouter.put("/updatestatus",AdminAuth,updateStatus)
