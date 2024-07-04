import mongoose from "mongoose";
import { messages } from "../model/messageModel.js";
// import { users } from "../model/userModel.js";

export const sendMessage = async (req,res)=>{
    const {message,endTime} = req.body;
    const {user} = req.params
    try {

        if(!message || !endTime || !user){
            return res.status(400).json({
                success : false,
                message : "some thing wrong"
            })
        }
        const data = await messages({
            message : message,
            endTime : endTime,
            user : user
        })
        data.save()
        if(data){
            return res.status(201).json({
                success : true,
                message : "pathaisi",
                data
            })
        }else{
            return res.status(400).json({
                success : false,
                messge : "jay nai"
                })
        }
    }
         catch (error) {
        console.log(error)
    }
}

