import express from "express";
import { placeOrder } from "../Controllers/Order.controllers.js";
import { isAuth } from "../Middlewares/isAuth.middlewares.js";
 const orderRouter=express.Router();

orderRouter.post("/placeorder",isAuth,placeOrder)

export default orderRouter;