import express from "express";

const app=express();
app.get("/",(req,res)=>{
  res.send("Welcome to task maneger project 👨🏻‍💻")
})

app.listen(8080,()=>{
  console.log("Port is running on 8080")
})


