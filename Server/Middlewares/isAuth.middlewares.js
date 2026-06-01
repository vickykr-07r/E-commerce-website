import jwt from "jsonwebtoken"

export const isAuth=async(req,res,next)=>{
    try {
        let {token}=req.cookies
        if(!token){
            return res.status(404).json({
                message:"token not found"
            })
        }
        let verifytoken=await jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(!verifytoken){
         return res.status(404).json({
            message:"user does not have a valid token"
         })
        }

        req.userId=verifytoken.id
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:`isAuth error ${error}`
        })
    }
}