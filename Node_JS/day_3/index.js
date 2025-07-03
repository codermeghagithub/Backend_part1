const os=require("os");
// console.log(os.arch());
// console.log(os.platform())
// console.log(os.cpus().length)

// console.log("Free memory: " + os.freeMem());  //It returns free system memory in bytes

  // How  to print in GB 
// const freeMem=(os.freemem()/1024/1024/1024).toFixed(2);  
// console.log("Free memory: " + os.freeMem);


// consol.log(os.userInfo());
// console.log("Total memory: " + os.totalmem());
// console.loeg("Hostname: "+os.hostname());
// console.log("Returns the OS name :"+os.type)
// console.log("Returns the OS release :"+os.release)

// console.log("Returns system uptime in seconds"+os.uptime())  // 	Returns system uptime in seconds
const uptime=os.uptime();
console.log(`Sytem Uptime: ${Math.floor(uptime/3600)} hours`); //	Returns system uptime in hourse