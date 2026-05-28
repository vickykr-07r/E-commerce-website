import User from "../Models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const Register=async(req,res)=>{
    try {
        let {name,email,password}=req.body;

        const existUser=await User.findOne({email})

        if(existUser){
            return res.status(400).json({message:"user alredy exist"})
        }
        const hassedpassword=await bcrypt.hash(password,10)
        const user=await User.create({
            name,email,password:hassedpassword
        })

        const token=jwt.sign( 
            {id:user._id},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"7d"}

        )

        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"strict"
        })

        return res.status(200).json(user)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:`error on register ${error}`
        })
    }
}

export const login =async(req,res)=>{
try {
    let {email,password}=req.body;

    const existuser=await User.findOne({email})
    if(!existuser){
    return res.status(400).json({
        message:"user not found"
    })
    }

    
} catch (error) {
    
}
}