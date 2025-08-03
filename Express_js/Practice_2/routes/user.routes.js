import {Router} from "express";
const userRouter=Router();

// here i have created router
userRouter.get("/get-all-user",(req,res)=>{
  res.send("Get all user")
})

// // here i have created another router
userRouter.get("/get-user",(req,res)=>{
  res.send("get-user")
})
// here i have created another router

userRouter.get("/greet-user",(req,res)=>{
    res.send("greet-user")

})

export default userRouter;