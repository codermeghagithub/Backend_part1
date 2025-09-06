import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(express.json());

app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(cookieParser("mysecret"));

app.get("/", (req, res) => {
  res.send("Welcome to task maneger project 👨🏻‍💻");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/task", taskRoutes);

app.listen(8080, () => {
  console.log("Port is running on 8080");
});
