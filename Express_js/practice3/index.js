import express from "express";
import cookieParser from "cookie-parser";

// const cookieParser=cookieParser();
const app = express();
app.use(cookieParser()); //middleware

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/set-cookies", (req, res) => {
  // res.cookie("token", "my-token", { maxAge: 1000 * 60 * 60 * 24 }); // ** here cookie autometically expire after 24 hr

  res.cookie("theme", "dark");
  res.send("cookies set");
});

app.get("/get-cookies", (req, res) => {
  // console.log(req.cookies.token); //**undefined */
  // **if i acess cookie through token  that time i get out put  token=my-token
  // console.log(req.headers.cookie);

  console.log(req.cookies); // * if i wnat to multiple cookies simalteniuasly

  // console.log(req.cookies.token);
  res.send("cookies get");
});
app.listen(8080, () => {
  console.log("server is running on port 8080");
});
