// import express from "express";
// const app=express();
// app.use(express.json());// this is middleware 

// const data=[
// {
// id:1,
// name:"Megha",
// age:22,
// email:"megha123@gmail.com"
// },
// {
// id:2,
// name:"Sneha",
// email:"sneha123@gmail.com"
// },
// {
// id:3,
// name:"Meg",
// email:"meg123@gmail.com"
// },
// ];
// //routes parameter 
// app.get("/get-users",(req,res)=>{
// res.status(200).json(data);
// })
// app.get("/get-user/:id",(req,res)=>{
//   const{id}=req.params;//.params is a property of the req object.
//   const user=data.find((user)=>user.id===Number(id));
//   res.status(200).json(user);
// })

// // Query parameters 
// app.get("/get-user", (req,res)=>{
// const{name,age}=req.query;
// res.status(200).json({ name, age });
// })


// ** post
// app.post("/get-user",(req,res)=>{
//   const{name,email}=req.body;
//   data.push({id:data.length+1,
//     name,
//     email
//   })
//   res.status(201).json({
//     success:true,
//     message:"user created successfuly",
//     data
//   })
// })


// **put
app.put("/get-user/:id",(req,res)=>{
  const id=req.params.id
  app.post("/get-user",(req,res)=>{
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
  console.log(id)
  res.json(id)
})


// // how to define a simple route 
// app.get("/",(req,res)=>{  //1.here get is a method . here req, res are object
//   res.send("Hello Express ")  
// })


// //here we createing server for express js
// app.listen(8080,()=>{
//   console.log("Hello everyone server is running on 8080");

// }
// )


// PATCH


import express from "express";
const app=express()

app.use(express.json());

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

app.patch("/get-user/:id", (req, res) => {
  const id = parseInt(req.params.id); // Get user ID from URL
  const updates = req.body;           // Get the fields to update from request body

  // Find the user by ID
  const userIndex = data.findIndex(u=>u.id===id);

// or for understand   const userIndex = data.findIndex(u=>u.id===id); syntax ✅✅
//  const userIndex = data.findIndex(function(u) {
//   return u.id === id;
// });


  if (userIndex === -1) {
    return res.status(404).json({ success: false, message: "User not found" });
  }


// ** Update only provided fields
  data[userIndex] = { ...data[userIndex], ...updates };
// ...data[userIndex] means :all key-value pairs of the user object at that index.   



  res.json({
    success: true,
    message: "User updated successfully",
    user: data[userIndex]
  });
});

//here we createing server for express js
app.listen(8080,()=>{
  console.log("Hello everyone server is running on 8080");

}
)


// **DELETE


// import express from "express";
// const app=express()

// app.use(express.json());

// const data=[
// {
// id:1,
// name:"Megha",
// age:22,
// email:"megha123@gmail.com"
// },
// {
// id:2,
// name:"Sneha",
// email:"sneha123@gmail.com"
// },
// {
// id:3,
// name:"Meg",
// email:"meg123@gmail.com"
// },
// ];

// app.delete("/get-user/:id",(req,res)=>{
//   const id=parseInt(req.params.id);
//   const userIndex=data.findIndex(u=>u.id==id);

//   if(userIndex===-1){
//     return res.status(404).json({success:false,message:"user not found "})
//   }

// const delete_user=data.splice(userIndex,1);

// res.json({
//   success: true,
//     message: "User deleted successfully",
//     delete_user: delete_user[0] // sending deleted user info
// });
// });

 app.listen(8080,()=>{
  console.log("Hello everyone server is running on 8080");
 })
