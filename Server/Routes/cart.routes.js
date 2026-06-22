import express from "express"
import { isAuth } from "../Middlewares/isAuth.middlewares.js";
import { addtocart, getUserCart, updateCart } from "../Controllers/cart.controllers.js";
export const cartRouter=express.Router();

cartRouter.post("/get",isAuth,getUserCart);
cartRouter.post("/add",isAuth,addtocart);
cartRouter.post("/update",isAuth,updateCart);
 