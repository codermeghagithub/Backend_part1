import express from "express";
import userRouter from "./routes/user.routes.js";
const app=express();

app.get("/",(req,res)=>{
  res.send("Good Evening")
})
app.use("/api/v1/user",userRouter)

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});


