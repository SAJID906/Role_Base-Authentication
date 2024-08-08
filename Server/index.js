import express from 'express'
import 'dotenv/config'
import { Connect } from './Data_base/DbConnection.js'
import AuthRouter from './Routes/Auth.Routes.js'
import cookieParser from 'cookie-parser'
import AdminRouter from './Routes/Admin.Routes.js'
const app=express('')
import cors from 'cors'

const port=process.env.PORT ||3000
//DataBase Connection function Calling
Connect();
// Now use middle Ware
//middle ware accept body parser
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' // frontend's URL
  }));
// Authenticatin middleware
app.use('/SignUp',AuthRouter)
app.use('/Login',AuthRouter)
app.use('/Logout',AuthRouter)
// Admin Routes middleware
app.use('/getuser',AdminRouter)
app.use('/delete',AdminRouter)
app.listen(port,()=>{
    console.log(`Server is connected at ${port}`)
})
