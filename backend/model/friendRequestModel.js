import mongoose from "mongoose";
import { users } from "./userModel.js";


export const friendRequestSchema = new mongoose.Schema({
            fromUser : {
                type: mongoose.ObjectId,
                ref : users,
                required : true
            },
            toUser : {
                type : mongoose.ObjectId,
                ref : users,
                required : true
            },
            status : {
                type : String,
                enum : ["Pending","Accepted","Rejected"],
                default : "Pending"
            },
            createdAt : {
                type : Date,
                default : Date.now()
            }
        })

export const friendRequest = mongoose.model("friendRequests",friendRequestSchema);