import express from "express";

const app=express();
// define a simple route 
app.get("/",(req,res)=>{  //1.here get is a method . here req, res are object
  res.send("Hello Express ")
})
// API Endpoint 
app.get("/api/v1/welcome",(req,res)=>{
  console.log("Request is comming.....")
  //  sends the response to the client:
    res.status(200).json("Welcome to our API Endpoint👁️📖")

    // anther way to sent status as 
res.status(200).json({ message: "Welcome to our API Endpoint👁️📖" });
})
//here we createing server for express js
app.listen(8000,()=>{
  console.log("Hello everyone server is running on 8000");

}
)