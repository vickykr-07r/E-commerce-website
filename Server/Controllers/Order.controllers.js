import { Order } from "../Models/Orders.model.js";
import User from "../Models/user.model.js";


export const placeOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    const userId = req.userId;
    const orderData = await Order.create({
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    });
    const newOrder = new Order(orderData);
    await newOrder.save();
    await User.findByIdAndUpdate(userId, { cartData: {} });
    return res.status(200).json({ message: "Order placed successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error on placing order" });
  }
};

export const userOrders = async (req, res) => {
  try{
    const userId = req.userId;
    const orders = await Order.find({ userId });
    return res.status(200).json( orders );
  }catch(error){
    console.log(error);
    return res.status(500).json({ message: "error on fetching orders" });
  }
}
