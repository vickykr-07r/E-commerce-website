import express from "express"
import { Register } from "../Controllers/auth.controllers.js";
export const authRouter=express.Router()

authRouter.post("/register",Register);