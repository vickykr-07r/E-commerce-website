// import mongoose from "mongoose"

// import dotenv from "dotenv"
// dotenv.config();

// let connect=async()=>{
// await mongoose.connect(process.env.MONGODB_URL)
// .then((data)=>{
// console.log("database connected");
// }).catch((error)=>{
// console.log(error)
// })
// }

// export default connect;

import mongoose from "mongoose";

import dotenv from "dotenv"
dotenv.config();

const connect = async () => {
  try {
    // console.log(process.env.MONGODB_URL);

    await mongoose.connect(process.env.MONGODB_URL);

    console.log("✅ Database Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connect; 