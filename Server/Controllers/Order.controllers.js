import { Order } from "../Models/Orders.model.js";
import User from "../Models/user.model.js";

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
