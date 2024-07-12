import { friendRequest } from "../model/friendRequestModel.js"
import { users } from "../model/userModel.js"

export const sentFriendRequestMidddleware = async (req,res)=>{
    try {
        const {fromUser,toUser} = req.body
        if(!fromUser || !toUser){
            return res.status(400).json({
                success : false,
                message : "invalid request"
            })
        }
        const reqSender = await users.findOne({_id : fromUser})
        if(!reqSender){
            return res.status(400).json({
                success : false,
                message : "Please Login first"
            })
        }
        const reqReciver = await users.findOne({_id : toUser})
        if(!reqReciver){
            return res.status(400).json({
                success : false,
                message : "the use is not exist"
            })
        }
        const checkReqExist = await friendRequest.find({
            fromUser : fromUser,
            toUser : toUser
        })
        const checkReqDoubleExist = await friendRequest.find({
            fromUser : toUser,
            toUser : fromUser
        })
       
        if(checkReqDoubleExist.length !==0){
            return res.status(400).json({
                success : false,
                message : "response",
                reqId : checkReqDoubleExist[0]._id
            
            });
        }
        if(checkReqExist.length !==0){
            return res.status(400).json({
                success : false,
                message : "You allready send a friend request please wait for the response",
                user : checkReqExist.length
            
            });
        }
        if(checkReqExist.length ===0){
            const sendReq =new friendRequest({
                fromUser,
                toUser
            })
            const response = await sendReq.save();
            return res.status(200).json({
                success : true,
                message : "request has been sent",
                response
            })
        }
        if(checkReqDoubleExist.length ===0){
            const sendReq =new friendRequest({
                fromUser,
                toUser
            })
            const response = await sendReq.save();
            return res.status(200).json({
                success : true,
                message : "request has been sent",
                response
            })
        }

    } catch (error) {
        console.log(error)
    }
}