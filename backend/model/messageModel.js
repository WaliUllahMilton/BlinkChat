import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    message : {
        type : String,
        required : true
    },
    endTime : {
        type : Number,
        required : true
    }
})

export const messages = module.mongoose("messages",messageSchema);