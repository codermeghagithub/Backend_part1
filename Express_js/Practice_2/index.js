// import express from "express"
// const app=express();

// // GLOBAL MIDDLEWARE(req,res,next)

// function logger(req,res,next)
// {
//   console.log(req.method,req.url)
//   next()
// }

// app.use(logger)
// app.get("/",(req,res)=>{
//   res.send("Hello Good afternoon");
// })
// // here have created about router 
// app.get("/about",(req,res)=>{
//   res.send("About page")
// })
// // here have created contact router 

// app.get("/contact",(req,res)=>{
//   res.send("Contact page")
// })

// app.listen(8000,()=>{
//   console.log("server is running on port 8000")
// })

// // specific  route MIDDLEWARE
// import express from "express"
// const app=express();

// // here i have created specific  route MIDDLEWARE
// function logger(req,res,next)
// {
//   console.log(req.method,req.url)
//   next()
// }
// // here i have created another middleware 
// function sayHello(req,res,next){
// console.log("hi")
// next();
// }

// app.get("/",(req,res)=>{
//   res.send("Hello Good afternoon");
// })
// // here have created about router 
// app.get("/about",logger,sayHello,(req,res)=>{
//   res.send("About page")
// })
// // here have created contact router 

// app.get("/contact",(req,res)=>{
//   res.send("Contact page")
// })

// app.listen(8000,()=>{
//   console.log("server is running on port 8000")
// })   //o/p=>  server is running on port 8000
// GET /about
// hi


//  inbuild Middleware   


import express from "express";
const app = express();

// 🔹 1. Global custom middleware (logger)
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);

// 🔹 2. express.json() — to parse JSON in request body
app.use(express.json());

// 🔹 3. express.urlencoded() — to parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: true }));

// 🔹 4. express.static() — to serve static files like images or CSS
app.use(express.static("public")); // serve files from "public" folder

// 🔹 5. Built-in error-handling middleware (for demo)
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send("Something broke!");
});


// 🔸 Routes
app.get("/", (req, res) => {
  res.send("Hello Good afternoon");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.get("/error", (req, res) => {
  throw new Error("Oops! Something broke.");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

