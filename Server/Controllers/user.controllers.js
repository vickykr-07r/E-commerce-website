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