
import userModel from "../models/userModel.js"

export const saveData=async (req,res)=>{
    const { name, email, phone, message } = req.body;

    const Model = new userModel({
        name,
        email,
        phone,
        message,
      });
      try {
        
        const savedFeedback = await Model.save();
        res.status(201).json(savedFeedback);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }

};
