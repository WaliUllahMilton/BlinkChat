import express from "express";
import mongoose from "mongoose";



const app = express();
const DB = mongoose.connect("mongodb+srv://milton:12345@cluster0.ukmnle3.mongodb.net/")
DB.then(console.log("mongoose connected"))


app.listen(3000,()=>{
    console.log("server on")
})