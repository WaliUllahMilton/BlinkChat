import { users } from "../model/userModel.js";

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
        const data = await users({name:name,email:email,phone:phone,address:address,password:password})
        data.save()
        return res.status(201).json({
            success:true,
            data:data
        })
    } catch (error) {
        console.log(error)
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
        const data = await users.find({email : email, password : password});
        res.status(200).json({
        success : true,
        message : "login",
        data
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
            const data = await users.findByIdAndUpdate({_id :existingUser._id},{password : password});
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