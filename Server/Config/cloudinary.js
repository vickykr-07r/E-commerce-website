import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

export    const uploadoncloudinary=async(filePath)=>{
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDIANRY_APIKEY,
        api_secret:process.env.CLOUDIANRY_APISECRET
    })
    try {
        if(!filePath){
     return null
    }

    const uploadResult=await cloudinary.uploader.upload(filePath)
    fs.unlinkSync(filePath)
    return uploadResult.secure_url 
    } catch (error) {
        fs.unlinkSync(filePath)
        console.log(error)
    }
   
}