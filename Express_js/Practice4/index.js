import expess from 'express'
import cookieParser from 'cookie-parser';
import session from "express-session";
const app=expess();

app.use(cookieParser("codesnippet"));

app.use(session(
  {
    secret:"mysecret",
    saveUninitialized:false,
    resave:false,
    cookie:{
      maxAge:1000*60*60*24 //1 day or  25 hr
    }
  }
))

app.get("/",(req,res)=>{
  console.log(req.session);
  console.log(req.session.id);
  
  res.send("Hello mini project: task maneger")
});



app.listen(8000,()=>{
  console.log("Server running on port no:8000");
  
})