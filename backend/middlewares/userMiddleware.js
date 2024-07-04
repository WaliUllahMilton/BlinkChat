import { users } from "../model/userModel.js";

export const userRegistration = async (req,res)=>{
    const {name,email,phone,address,password} = req.body;
    try {
        if(!name || !email || !phone || !address || !password){
            return res.status(400).json({
                success : false,
                data : "please fill all data"
            })
        }
        const existingUser = await users.findOne({email : email})
        if(existingUser){
            
            return res.status(400).json({
                success: false,
                data : "user allready exists",
            })
        }
        const existingPhoneNumber = await users.findOne({phone:phone})
        if(existingPhoneNumber){
            return res.status(400).json({
                success : false,
                data : "phone number have allready used"
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