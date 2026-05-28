import mongoose from "mongoose"

let connect=async()=>{
await mongoose.connect(process.env.MONGODB_URL)
.then((data)=>{
console.log("database connected");
}).catch((error)=>{
console.log(error)
})
}

export default connect;