import express from "express";
import connect from "./db.js";
import dotenv from "dotenv"
import authRoute from "./routes/authRoutes.js"
import passport from "passport";
import passportSetup from './confige/passportjs.js'
import session from 'express-session';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


const app = express()
app.use(bodyParser.json()); 
dotenv.config()
app.use(express.json())
 
passportSetup(passport)
app.use(
    session({
      secret: 'yourSecretKey21', 
      resave: false,
      saveUninitialized: false,
    })
  );

  
//routes
app.use(cookieParser())
app.use('/api/auth',authRoute)


app.use((err,req,res,next)=>{
  const errorStatus =err.status || 500;
  const errorMessage = err.message || "Something went Wrong"
  return res.status(errorStatus).json({
      success:false,
      status:errorStatus,
      message:errorMessage, 
      stack:err.stack
  })
})
app.listen(8003,()=>{ 
    connect()
    console.log("Server is running on port 8003")
})