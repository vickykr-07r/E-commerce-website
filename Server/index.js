import express from "express"
const app=express();
import dotenv from "dotenv"
dotenv.config();



const PORT=process.env.PORT
app.listen(PORT,(req,res)=>{
console.log("the app is started")
}) 