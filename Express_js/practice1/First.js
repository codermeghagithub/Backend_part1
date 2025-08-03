import express from "express";
const app=express();
app.use(express.json());// this is middleware 

const data=[
{
id:1,
name:"Megha",
age:22,
email:"megha123@gmail.com"
},
{
id:2,
name:"Sneha",
email:"sneha123@gmail.com"
},
{
id:3,
name:"Meg",
email:"meg123@gmail.com"
},
];
//routes parameter 
app.get("/get-users",(req,res)=>{
res.status(200).json(data);
})
app.get("/get-user/:id",(req,res)=>{
  const{id}=req.params;//.params is a property of the req object.
  const user=data.find((user)=>user.id===Number(id));
  res.status(200).json(user);
})

// Query parameters 
app.get("/get-user", (req,res)=>{
const{name,age}=req.query;
res.status(200).json({ name, age });
})


// post
app.post("/create-user",(req,res)=>{
  const{name,email}=req.body;
  data.push({id:data.length+1,
    name,
    email
  })
  res.status(201).json({
    success:true,
    message:"user created successfuly",
    data
  })
})

// put



// how to define a simple route 
app.get("/",(req,res)=>{  //1.here get is a method . here req, res are object
  res.send("Hello Express ")  
})


//here we createing server for express js
app.listen(8080,()=>{
  console.log("Hello everyone server is running on 8080");

}
)

// POST


// PUT 

// PATCH


// DELETE