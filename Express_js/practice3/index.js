// import express from "express";
// import cookieParser from "cookie-parser";

// // const cookieParser=cookieParser();
// const app = express();
// app.use(cookieParser()); //middleware

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.get("/set-cookies", (req, res) => {
//   // res.cookie("token", "my-token", { maxAge: 1000 * 60 * 60 * 24 }); // ** here cookie autometically expire after 24 hr

//   res.cookie("theme", "dark");
//   res.send("cookies set");
// });

// app.get("/get-cookies", (req, res) => {
//   // console.log(req.cookies.token); //**undefined */
//   // **if i acess cookie through token  that time i get out put  token=my-token
//   // console.log(req.headers.cookie);

//   // console.log(req.cookies); // * if i wnat to multiple cookies simalteniuasly

//   console.log(req.cookies.token);
//   res.send("cookies get");
// });
// app.listen(8080, () => {
//   console.log("server is running on port 8080");
// });


// **use cookie without install cookie parcer 🍪 Setting Cookies in Express (Without Middleware)
// import express from "express";
// const app = express();


// app.get("/", (req, res) => {
//   res.send("Come let's under stand how to create and work cookie...");
// });

// // **🍪 Setting Cookies in Express (Without Middleware)

// app.get("/set-cookies", (req, res) => {
//   // res.cookie("token", "my-token"); // **it always write as key value pair here token=key and my-token=value

//   res.cookie("token","my-cookie",{maxAge:1000*60*60*24})
//   console.log("set cookie")
// });

//   app.get("/get-cookies",(req,res)=>{
//     // console.log(req.cookies); //undefine

//   console.log(req.headers.cookie);
  
//       res.send("get cookie")

//   });

// app.get("/get-cookies")
// app.listen(8000, () => {
//   console.log("server is running on port no 8080");
// });



// ** 🍪 Using cookie-parser Middleware

import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser("a973947d564fda334cd171b857d20eca6eb94f367a3f5fcfac31927a37ce9b7a"))  //** use cookie middleware  */

app.get("/", (req, res) => {
  res.send("Come let's under stand how to create and work cookie...");
});

// **🍪 Setting Cookies in Express (Without Middleware)

app.get("/set-cookies", (req, res) => {
  // res.cookie("token", "my-token"); // **it always write as key value pair here token=key and my-token=value

  // res.cookie("token","my-cookie",{maxAge:1000*60*60*24})
  res.cookie("age","22",{signed:true})  //   ** SIGNED COOKIES 

  res.send("set cookie")
});

  app.get("/get-cookies",(req,res)=>{
    // console.log(req.cookies); //undefine
  // console.log(req.headers.cookie);
    // console.log(req.cookies.token)
    console.log(req.signedCookies.age);  //** if i want to get multi value simalteniously */
  
      res.send("get cookie")

  });

app.get("/get-cookies")
app.listen(8000, () => {
  console.log("server is running on port no 8000");
});

// document.cookie="name=Megha; expires=Fri,31 Dec 9999 23:59:59 GMT";  //** research about it */
