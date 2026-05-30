import express from "express"
import { login, logout, Register } from "../Controllers/auth.controllers.js";
export const authRouter=express.Router()

authRouter.post("/register",Register);
authRouter.post("/login",login);
authRouter.get("/register",logout); 