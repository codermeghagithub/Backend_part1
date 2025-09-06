const express=require('express');
const { redis } = require('./redis');
const app=express();


app.get('/',async(req,res)=>{
  try{
    const views=await redis.incr('pageview');
    res.send(`This page was visited : ${views} times.`);
  }catch(error){
    res.status(500).send('Error accessing Redis');
  }
});

app.listen(3000,()=>{
  console.log("server running on 3000");
  
});