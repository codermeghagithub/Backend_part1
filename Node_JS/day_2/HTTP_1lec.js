const http=require("http")

const server=http.createServer((req,res)=>{

  console.log(typeof req); // 'object'
  console.log(typeof res); // 'object'
  // console.log("Request: ",req)
  // console.log(req.url)
  if(req.url==="/")
  {
    res.end("This is from url");
  }
  else if(req.url==="/about"){
    res.end("This is from about");

  }
  else{
console.log("no url")
  }
// res.end("Good morning Everyone")
})
server.listen(8000,()=>{
  console.log("server is running on port 8000")
})


