import { uploadoncloudinary } from "../Config/cloudinary.js";
import { Product } from "../Models/ProductSchema.model.js";

export const addProduct = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = await uploadoncloudinary(
      req.files.image1?.[0]?.path
    );

    const image2 = await uploadoncloudinary(
      req.files.image2?.[0]?.path
    );

    const image3 = await uploadoncloudinary(
      req.files.image3?.[0]?.path
    );

    const image4 = await uploadoncloudinary(
      req.files.image4?.[0]?.path
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestSeller: bestSeller === "true",
      date: Date.now(),

      image1,
      image2,
      image3,
      image4,
    };

    const product = await Product.create(productData);

    return res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const listProduct=async(req,res)=>{
    try {
        let product=await Product.find({})
        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:`error on listProduct ${error}`
        })
    }
}

export const removeproduct=async(req,res)=>{
    try {
        let {id}=req.params;
        let product=await Product.findByIdAndDelete(id)
        return res.status(200).json(product)
    } catch (error) {
       console.log(error)
       return res.status().json({
        message:`error on remove product ${error}`
       }) 
    }
}