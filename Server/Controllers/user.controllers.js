import User from "../Models/user.model.js";

export const getcurrentuser=async(req,res)=>{
    try {
         const user=await User.findById(req.userId).select("-password")
         if(!user){
         return res.status(404).json({
            message:"user not found"
         })
         }
         return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:`error on getcurrentuser ${error}`
        })
    }
}

export const getAdmin=async(req,res)=>{
    try {
        let adminemail=req.adminEmail;

        if(!adminemail){
        return res.status(404).json({
            message:`Admin is not found`
        })
        }

        return res.status(201).json({
            email:adminemail,
            role:"admin"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:`error on getAdmin ${error}`
        })
    }
}