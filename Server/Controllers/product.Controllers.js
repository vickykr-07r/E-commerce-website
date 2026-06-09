import { uploadoncloudinary } from "../Config/cloudinary.js";
import { Product } from "../Models/ProductSchema.model.js";

export const addProduct=async(req,res)=>{
    try {
        let {name,description,price,category,subCategory,sizes,bestSeller}=req.body;

        let image1=await uploadoncloudinary(req.files.image1[0].path)
        let image2=await uploadoncloudinary(req.files.image2[0].path)
        let image3=await uploadoncloudinary(req.files.image3[0].path)
        let image4=await uploadoncloudinary(req.files.image4[0].path)

        let productData={
            name,
            description,
            price:Number(price),
            category,
            subCategory,
            sizes:JSON.parse(sizes),
            bestSeller:bestSeller==="true" ? true:false,
            date:Date.now(),
            image1,
            image2,
            image3,
            image4
        }

        const product=await Product.create(productData)

        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:`error on add Product ${error}`
        })
    }
}