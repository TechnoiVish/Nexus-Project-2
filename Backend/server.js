import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"

const app=express()
const port=3000

app.use(express.json())
app.use(cors())

connectDB();


app.use("/api",userRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
