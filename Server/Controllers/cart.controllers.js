import User from "../Models/user.model.js";

export const addtocart=async(req,res)=>{
    try {
           let {itemId,size}=req.body;
    const userData=await User.findById(req.userId)

    if(!userData){
    return res.status(400).json({
        message:"User Not Found"
    })
    }

    let cartData=userData.cartData || {};
    if(cartData[itemId]){
     if(cartData[itemId][size]){
     cartData[itemId][size]+=1;
     }else{
        cartData[itemId][size]=1;
     }
    }else{
        cartData[itemId]={};
        cartData[itemId][size]=1;
    }

    await User.findByIdAndUpdate(req.userId,{cartData});
    return res.status(201).json({
        message:"Added To Cart"
    })
    } catch (error) {
       console.log(error) 
       return res.status(500).json({
        message:`Error on Add To Cart ${error}`
       })
    }
}

export const updateCart=async(req,res)=>{
try {
  const {itemId,size,quantity}=req.body;
  const userData=await User.findById(req.userId)
  let cartData=await userData.cartData;
  cartData[itemId][size]=quantity
  await User.findByIdAndUpdate(req.userId,{cartData})

  return res.status(201).json({
    message:"cart updated"
  })
} catch (error) {
    console.log(error)
    return res.status(500).json({
        message:`update cart error ${error}`
    })
}
}


export const getUserCart=async(req,res)=>{
    try {
        const userData=await User.findById(req.userId)
        let cartData=await userData.cartData;

        return res.status(200).json(cartData)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:`error on getUserCart ${error}`
        })
    }
}