import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required :true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    address : {
        type : String,
    },
    password : {
        type : String,
        required : true
    }
})

export const users = module.mongoose("users",userSchema);