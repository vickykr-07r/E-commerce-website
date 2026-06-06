import express from "express";
import { adminlogin, googleauth, login, logout, Register } from "../Controllers/auth.controllers.js";

export const authRouter = express.Router();

authRouter.post("/register", Register);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.post("/googlelogin", googleauth);
authRouter.post("/adminlogin", adminlogin);