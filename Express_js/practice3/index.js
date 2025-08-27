import express from "express"
const app=express();
app.get("/",(req,res)=>{
  res.send("Hello world");
});

app.get('/set-cookies',(req,res)=>{
  res.cookie("token","my-token");
  res.send("cookies set")
})
app.get("/get-cookies",(req,res)=>{
  // console.log(req.cookies);//**undefined */
   // **if i acess cookie through token  that time i get out put  token=my-token
    console.log(req.headers.cookie);  
  res.send("cookies get") 
  

})
app.listen(8080,()=>{
  console.log("server is running on port 8080")
})