import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const filePath=path.join(__dirname,"data","task.json");

export const readtasks=()=>{
  try{
       ensureFileExists();
       const data=fs.readFileSync(filePath,"utf-8");
       return JSON.parse(data || "[]");
  }catch(error){
            console.error("Error reading tasls",error);
            return [];
  }
}

export const writeTasks=()=>{
  try{
    fs.writeFileSync(filePath,JSON.stringify(tasks,null,2),"utf-8");
  }catch(error){
    console.error("error writting tasks:",error);
    return[];
  }
}

  const ensureFileExists=(tasks)=>{
    try{
      if(!fs.existsSync(filePath)){
        fs.mkdirSync(path.dirname(filePath),{recursive:true});//Ensure directory exists 
        fs.writeFileSync(filePath,"[]","utf-8");  // *create an empty JSON file
      }
    }catch(error){
      console.error("Error ensureing file exists:",error);
    }
  }
