import express from "express"
import { addProduct, listProduct, removeproduct } from "../Controllers/product.Controllers.js";
import upload from "../Middlewares/multer.js";
import { AdminAuth } from "../Middlewares/adminauth.middlewares.js";
export const productRouter =express.Router();

productRouter.post(
  "/addproduct",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

productRouter.get("/list",AdminAuth,listProduct)
productRouter.post("/remove/:id",AdminAuth,removeproduct)