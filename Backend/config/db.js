import mongoose from "mongoose";


 export const connectDB= async ()=>{
    await mongoose.connect("mongodb+srv://newdata:16611661@cluster0.tmwf5we.mongodb.net/Techy-website").then(()=>console.log("DB Connected"));
}