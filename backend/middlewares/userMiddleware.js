import  jwt  from "jsonwebtoken";
import { users } from "../model/userModel.js";
import bcrypt from 'bcrypt'
import  dontenv from "dotenv";
dontenv.config();
export const userRegistration = async (req,res)=>{
    const {name,email,phone,address,password} = req.body;
    try {
        if(!name || !email || !phone || !address || !password){
            return res.status(400).json({
                success : false,
                message : "please fill all data"
            })
        }
        const existingUser = await users.findOne({email : email})
        if(existingUser){
            
            return res.status(400).json({
                success: false,
                message : "user allready exists",
            })
        }
        const existingPhoneNumber = await users.findOne({phone:phone})
        if(existingPhoneNumber){
            return res.status(400).json({
                success : false,
                message : "phone number have allready used"
            })
        }
        const hashedPassword = bcrypt.hashSync(password,10)
        const user = new users({
            name:name,
            email:email,
            phone:phone,
            address:address,
            password: hashedPassword})
        const saveUser = await user.save()
        const token = jwt.sign({
            name : user.name,
            id : user._id
        },process.env.TOKEN,{expiresIn : "1h"})
        return res.status(201).json({
            success:true,
            user : user,
            token:token
        })
    } catch (error) {
        console.log(error)
        console.log("problem")
    }
}


export const usersLogin = async (req,res)=>{
    const {email,password} = req.body;
    try {
        if(!email || !password){
            return res.status(400).json({
                success : false,
                message : "You can't login without email and password"
            })
        } 
        const user = await users.findOne({email : email})
        const comparePassword =await bcrypt.compare(password,user.password);
        if(!comparePassword){
            return res.status(400).json({
                success : false,
                message : "Wrong password"
            })
        }
        const token = jwt.sign({
            name : user.name,
            id : user._id
        },process.env.TOKEN,{expiresIn : "1h"})
        return  res.status(200).json({
        success : true,
        message : "login",
        data : user,
        token : token
        })
    } catch (error) {
        console.log(error)
    }
}


export const userForgotPass = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const existingUser = await users.findOne({email : email});
        if(existingUser){
            const hashedPassword = await bcrypt.hash(password,10)
            const data = await users.findByIdAndUpdate({_id :existingUser._id},{password : hashedPassword});
            data.save()
            return res.status(200).json({
                success : true,
                message : "updated"
            })
        }else{
            return res.status(400).json({
                success :false,
                message : "not a valid user"
            })
        }
    } catch (error) {
        console.log(error)
    }
}