import mongoose from "mongoose";
import { users } from "./userModel.js";


const messageSchema = new mongoose.Schema({
    message : {
        type : String,
        required : true
    },
    endTime : {
        type : Number,
        required : true
    },
    user : {
        type : mongoose.ObjectId,
        ref : users,
        required : true
    }
})

export const messages = mongoose.model("messages",messageSchema);