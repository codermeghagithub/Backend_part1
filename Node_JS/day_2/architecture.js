const crypto=require("crypto");
const os=require("os");

console.log(os.cpus().length);  //cpu core 

let start=Date.now();

crypto.pbkdf2("password-1","salt",100000,1024,"sha512",()=>{
  console.log(`${Date.now()-start }ms Done`);
})

crypto.pbkdf2("password-1","salt",100000,1024,"sha512",()=>{
  console.log(`${Date.now()-start }ms Done`);
})

crypto.pbkdf2("password-1","salt",100000,1024,"sha512",()=>{
  console.log(`${Date.now()-start }ms Done`);
})

crypto.pbkdf2("password-1","salt",100000,1024,"sha512",()=>{
  console.log(`${Date.now()-start }ms Done`);
})




crypto.pbkdf2("password-1","salt",100000,1024,"sha512",()=>{
  console.log(`${Date.now()-start }ms Done`);
})

