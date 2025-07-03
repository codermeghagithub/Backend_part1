const http=require("http");
const fs=require("fs")
const server=http.createServer((req,res)=>{

  if (req.url!=="/")
  {
    return res.end();
  }
  //*1. downloading files (bad way)
  // const file=fs.readFleSync("./sample_sixty_mb.txt")
  // return res.end(file)

// download files as  good way
// const readableStream =fs.createReadStream("./sample_sixty_mb.txt")

// readableStream.pipe(res);

// which factor is depend on 

// coping file asa bad way 
// const file=fs.readFileSync("./sample_sixty_mb.txt");
// fs.writeFileSync("./output.txt",file)

// * coping file (in good way )

const readableStream=fs.createReadStream("./sample.txt")
const writeFileSync=fs.createWriteStream("./output.txt");

readStream.on("data",(chunk)=>{
  console.log("chunk!",chunk.toString())
  fs.WriteStream.write(chunk.toString())
})
});


server.listen(8080,()=>{
  console.log("Server is running on port 8080")
})


