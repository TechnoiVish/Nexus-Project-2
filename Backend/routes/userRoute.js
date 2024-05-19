import express from "express";
import { saveData } from "../controllers/userController.js";


const userRouter=express.Router()


userRouter.post("/feedback",saveData)

export default userRouter;