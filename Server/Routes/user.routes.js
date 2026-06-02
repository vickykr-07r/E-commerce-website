import express from "express"
import { getcurrentuser } from "../Controllers/user.controllers.js"
import { isAuth } from "../Middlewares/isAuth.middlewares.js"
export const userRouter=express.Router()

userRouter.get("/currentuser",isAuth,getcurrentuser)