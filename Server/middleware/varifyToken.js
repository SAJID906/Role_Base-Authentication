import jwt from 'jsonwebtoken'
import { Auth_Model } from '../Model/AuthUser.Model.js'
export const IsAdmin=async(req,res,next)=>{
    try{
const token=req.cookies.token;

if(!token){
   return res.status(400).json({success:false,message:"UnAuthorized :token not fined"})
}
const decoded=jwt.verify(token,process.env.Securit_key);
console.log(decoded);
 const user=await Auth_Model.findById(decoded.User_Id)
//  console.log(user)
if(!user){
    return res.status(402).json({success:false,message:"User not found"})
}
if(user.Role!="admin"){
    return res.status(402).json({success:false,message:"User is not admin"})
}
// getuser use this user 
//  req.user=user
next()

    }
    catch(error){
        console.log(error)
    }
}