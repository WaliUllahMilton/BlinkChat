import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { userForgotPass, userRegistration, usersLogin } from "./middlewares/userMiddleware.js";
// import { sendMessage } from "./middlewares/messageMiddleware.js";
import cors from "cors"
import { users } from "./model/userModel.js";
import {  authenticate } from "./middlewares/auth.js";
import { sentFriendRequestMidddleware } from "./middlewares/friendRequestMiddleware.js";
// import jwtStrategy from 'passport-jwt'
// import { ExtractJwt } from "passport-jwt";
//.env file load

config();
//express 
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//cors enable
app.use(cors())
//mongoose connection
// const DB = mongoose.connect(process.env.DB)
const DB = mongoose.connect(process.env.DB)
DB.then(console.log("mongoose connected"))
//server start

app.listen(3000,()=>{
    console.log("server on")
})


app.get("/",(req,res)=>{
    res.send("hello")
})

app.post(`/registration`,userRegistration)

app.post(`/login`,usersLogin)
app.post("/forget",userForgotPass)

// app.post("/message-send/:user",authenicate, sendMessage)

app.get('/usersList',authenticate, async (req, res) => {

    try {
        const userList = await users.find({});

        // You can directly send the array of users if needed
        res.status(200).json(userList);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
    
    });

    app.post("/sent-friendRequest",authenticate,sentFriendRequestMidddleware)