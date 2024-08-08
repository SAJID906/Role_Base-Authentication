import mongoose from "mongoose";
const AuthSchema=new mongoose.Schema({
Name:{
    type:String,
    required:true
},
Email:{
    type:String,
    unique:true,
    required:true
},
Password:{
    type:String,
    unique:true,
    required:true
},
Role:{
    type:String,
    enum:['admin','user'],
    default:'user'

}
},{timestamps:true})
export const Auth_Model=mongoose.model('authuser',AuthSchema);
