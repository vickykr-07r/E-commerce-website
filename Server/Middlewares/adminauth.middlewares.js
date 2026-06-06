import jwt from "jsonwebtoken"

export const AdminAuth=async(req,res,next)=>{
    try {
       let {token}=req.cookies
       if(!token){
        return res.status(404).json({
            message:"not Authorized Login Again"
        })
       }

       const verifytoken=jwt.verify(token,process.env.JWT_SECRET_KEY);

       if(!verifytoken){
       return res.status(404).json({
            message:"not Authorized Login Again Invalid token"
        })
       }

       req.adminEmail=process.env.ADMIN_EMAIL
       next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:`isAuth error ${error}`
        })
    }
}