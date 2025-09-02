import express from "express"
import dotenv from "dotenv"
import fs from "fs";
import path from "path";
import  {fileURLToPath} from "url";

import publicRoutes from "./routers/public.routes.js"
import privateRoutes from "./routers/private.routes.js"
import { logMiddleware } from "./middleware/log.middleware.js";

dotenv.config();

const PORT=process.env.PORT || 8080;

console.log(import.meta);

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const app=express();

if(!fs.existsSync(path.join(__dirname,"logs"))){
  fs.mkdirSync(path.join(__dirname, "logs"))
}

// * Global Middlewares
app.use(logMiddleware);

app.get("/",(req,res)=>{
  res.send("Wellcome to Mini project 🖐🏻")
})

app.use("/api/v1/public",publicRoutes)
app.use("/api/v1/public",privateRoutes)

app.listen(PORT,()=>{
  console.log(`server is running on http://localhost:${PORT}`)
})