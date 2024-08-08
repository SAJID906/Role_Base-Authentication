import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Auth_Model } from "../Model/AuthUser.Model.js";
export const SignUp = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;
    const ExistUser = await Auth_Model.findOne({ Email });
    if (ExistUser) {
      return res.status(200).json({ message: "User Allready Register " });
    }
    //bcrypt password using bcrypt.hash with salt
const hashpassword=await bcrypt.hash(Password,10)
    // Create new User
    const NewUser =  new Auth_Model({
      Name,
      Email,
      Password:hashpassword
    });
    NewUser.save();
    return res.status(200).json({ 
        message:"user Register Successfully",
        NewUser
        
    })
  } catch (error) {
    console.log(error);
  }
};
// Login Function
export const Login=async(req,res)=>{
try{
    const {Email,Password}=req.body;
const user=await Auth_Model.findOne({Email})
const ismatch=user&&await bcrypt.compare(Password,user.Password)
if(!ismatch){
return res.status(403).json({message:"Invalid User_Name and Password"})
}
// token create when login successful
const token=jwt.sign({User_Id:user._id} ,process.env.Securit_key)
res.cookie('token', token,  { httpOnly: true, secure: true, maxAge: 360000 });
return res.status(200).json({
    success: true,
      message: "login successful",
    data:user,
    token
})
}
catch(error){
console.log(error)
}
}
//Logout function
export const Logout=async(req,res)=>{
try{
  res.clearCookie("token")
  res.status(200).json({message:"logout successful"})
}
catch(error)
{
console.log(error)
res.status(500).json({message:"internal Server Error"})
console.log(error);
}
}
