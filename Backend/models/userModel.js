import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:Number,required:true},
    message:{type:String,required:true}
   
    
},{minimize:false})

const userModel=mongoose.models.user || mongoose.model("Feedback",userSchema);
export default userModel;