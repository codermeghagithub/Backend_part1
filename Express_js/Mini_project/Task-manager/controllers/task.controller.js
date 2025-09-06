import { readtasks, writeTasks } from "../utils/index.js";


export const getAllTask=async(req,res)=>{
if(!req.session.user){
  return req.status(401).json({message:"Unauthorized"});
}

const tasks=await readtasks();
res.json(tasks.filter((task)=>task.username===req.session.user.username))
}

export const createTask=async(req,res)=>{
  const {title,description}=req.body;
   const tasks =await readtasks();


   const newTasks={
    id:crypto.randomUUID(),
    title,
    description,
    username:req.sesion.user.username,
    complete:false
   }
   tasks.path(newTasks);
   await writeTasks(tasks);
   res.status(201).json(newTasks);
}