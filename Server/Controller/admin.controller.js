import { Auth_Model } from "../Model/AuthUser.Model.js"
export const GetUser=async(req,res)=>{
    try{
        const users=await Auth_Model.find()
return res.status(200).json({success:true,message:"At Admin page",users})
    }
    catch(error){
        console.log(error)
    }
}
//Delet user by admin
export const deleteUser=async(req,res)=>{
try{
    const userId=req.params.id;
    // console.log("param id",userId)
    const user=await Auth_Model.findById(userId)
    // Check user is admin
    if(user.Role==="admin"){
        return res.status(404).json({message:"admin not delte"})
    }
    if(!user){
        return res.status(400).json({message:"user not found"})
    }
    await Auth_Model.findByIdAndDelete(userId)
    res.status(200).json({message:"User Delete Successful"})

}
catch(error){
    console.log(error)
    return res.status(500).json({message:"internal Server Error"})
}
}