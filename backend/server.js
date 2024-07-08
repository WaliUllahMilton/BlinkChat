import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { userForgotPass, userRegistration, usersLogin } from "./middlewares/userMiddleware.js";
import { sendMessage } from "./middlewares/messageMiddleware.js";
import cors from "cors"
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

app.post("/message-send/:user", sendMessage)