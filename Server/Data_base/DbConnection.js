import mongoose from "mongoose"
export const Connect=async()=>{
try{
    const Database_Connection=process.env.DbUrl;
mongoose.connect(Database_Connection)
console.log("Data_Base Connected")
}
catch(error){

}
}