// console.log("This is Event-loop base code .")
// setTimeout(()=>
//   console.log(console.log("Hello from timer-- 1") , 0)
// );
// setImmediate(()=>console.log("Hello from setImmediate"))
// console.log("Hello from top leve code --2 ")

// 👉👉using fs module 

const fs=require("fs");

console.log("This is Event-loop base code .") //1 execute
setTimeout(()=>
  console.log(console.log("Hello from timer-- 1") , 0)//3
);
setImmediate(()=>console.log("Hello from setImmediate")) //4


fs.readFile("sample.txt","utf-8",()=>{
  console.log("IO polling ")
  }); //5
  console.log("Hello from top leve code --2 ")//2nd execute



