import mongoose from "mongoose";
export const userSchema = new mongoose.Schema({
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
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String,
    },
    password : {
        type : String,
        required : true
    },
    friends : [
        {
            type :mongoose.ObjectId,
        }
    ]
})
export const users = mongoose.model("users",userSchema);