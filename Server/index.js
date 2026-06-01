import express from "express"
const app=express();

import dotenv from "dotenv"
dotenv.config();

import cookieParser from "cookie-parser";
app.use(express.json())
app.use(cookieParser())

import cors from "cors"
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

import connect from "./Db/db.connect.js";

import { authRouter } from "./Routes/auth.routes.js";
app.use("/api/auth",authRouter)



app.listen(process.env.PORT,(req,res)=>{
console.log("the app is started")
connect();
}) 