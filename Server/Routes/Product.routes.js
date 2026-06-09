import express from "express"
import { addProduct } from "../Controllers/product.Controllers.js";
import upload from "../Middlewares/multer.js";
export const productRouter =express.Router();

productRouter.post("/addproduct",upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1},
    {name:"image4",maxCount:1},
]),addProduct)