import express from "express"
import { getAdmin, getcurrentuser } from "../Controllers/user.controllers.js"
import { isAuth } from "../Middlewares/isAuth.middlewares.js"
import { AdminAuth } from "../Middlewares/adminauth.middlewares.js"
export const userRouter=express.Router()

userRouter.get("/currentuser",isAuth,getcurrentuser)
userRouter.get("/getadmin",AdminAuth,getAdmin)