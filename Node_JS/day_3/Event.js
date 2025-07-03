// // emit is used to trigger an event
// const EventEmitter=require("events");  // Import the events module

// // Create an event emitter instance
// const myEmitter=new EventEmitter();

// // Register an event listener
// myEmitter.on("Greet",()=>{  // .on
//   console.log("Hello Amigo🫂👋");   //Greet ---> hello  Amigo🫂👋

// });
// // Emmit the event 
// myEmitter.emit("Greet");



// // how TO PASS DATA  HERE 
// const EventEmitter=require("events");  // Import the events module
// const myEmitter=new EventEmitter();
// // Register an event listener
// myEmitter.on("Greet",(username)=>{  // .on
//   console.log("Hello  " +username);
// });
// // Emmit the event 
// myEmitter.emit("Greet","Megha");



const EventEmitter=require("events");
const myEmitter=new EventEmitter(); // creating  event emitter instance 
// 1.creating phese --->using   .on . here i creating event 
myEmitter.on("LOGIN",(data)=>{
  console.log(data);
})
// 2. using phase --->emit

myEmitter.emit("LOGIN",{username:"Megha",email:"meg@getMaxListeners.com"});

