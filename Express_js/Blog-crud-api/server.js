import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT=process.env.PORT|| 8080;
const app=express();


app.get("/",(req,res)=>{
  res.send("Welcome to logger api")
})

app.listen(PORT,()=>{
  console.log(`server is running  on http://localhost:${PORT}`);
})