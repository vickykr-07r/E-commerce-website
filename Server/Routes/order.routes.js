import express from "express";
import { placeOrder,userOrders } from "../Controllers/Order.controllers.js";
import { isAuth } from "../Middlewares/isAuth.middlewares.js";
export const orderRouter=express.Router();

orderRouter.post("/placeorder",isAuth,placeOrder)
orderRouter.post("/userorder",isAuth,userOrders)
 