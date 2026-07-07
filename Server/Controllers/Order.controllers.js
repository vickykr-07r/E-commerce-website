import { Order } from "../Models/Orders.model.js";
import User from "../Models/user.model.js";
import dotenv from "dotenv"
dotenv.config()

import Razorpay from "razorpay"

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

export const placeOrder = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Items:", req.body.items);

    const { items, amount, address } = req.body;

    const order = await Order.create({
      userId: req.userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    });

    console.log("Saved Order:", order);

    await User.findByIdAndUpdate(req.userId, { cartData: {} });

    return res.status(200).json({ message: "Order placed successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const userOrders = async (req, res) => {
  try {
    const userId = req.userId;
    const orders = await Order.find({ userId });
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error on fetching orders" });
  }
};

export const allOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error on fetching orders" });
  }
};

export const updateStatus=async(req,res)=>{
  try{
   const {orderId,status}=req.body;
   await Order.findByIdAndUpdate(orderId,{status:status})
   return res.status(200).json({message:"status updated successfully"})
  }catch(error){
   console.log(error);
   return res.status(500).json({message:"error on updating status"})
  }
}

export const placeOrderRazorpay = async (req, res) => {
  try {

    const { items, amount, address } = req.body;
    const userId = req.userId;

    const orderData = {
      items,
      amount,
      userId,
      address,
      paymentMethod: "Razorpay",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new Order(orderData);
    await newOrder.save();

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: newOrder._id.toString(),
    };

    razorpayInstance.orders.create(options, (error, order) => {

      if (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
      }

      return res.status(200).json({
        success: true,
        order,
      });

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const verifyRazorpay = async (req, res) => {
  try {

    const userId = req.userId;
    const { razorpay_order_id } = req.body;

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    if (orderInfo.status === "paid") {

      await Order.findByIdAndUpdate(orderInfo.receipt, {
        payment: true,
      });

      await User.findByIdAndUpdate(userId, {
        cartData: {},
      });

      return res.status(200).json({
        success: true,
        message: "Payment Successful",
      });

    } else {

      return res.status(400).json({
        success: false,
        message: "Payment Failed",
      });

    }

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};