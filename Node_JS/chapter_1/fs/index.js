// ✅ "fs" is a built-in module name in Node.js — it stands for File System.
// ✅ In Node.js, require is a built-in function used to import modules, files, or packages into your JavaScript code.

const fs = require("fs");

// 👉👉read👁️👁️
fs.readFile("sample.txt","utf-8",(err,data)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log(data);
  }
})

// sync way
// const data=fs.readFileSync('sample.txt','utf-8',);
// console.log(data)


// ✅ writeFile  and  writeFileSync

// const fs = require("fs");

// sync
// try {
//   fs.writeFileSync("sample.txt", "Hello world, this is my sample content");
//   console.log("File written successfully!");
// } catch (err) {
//   console.error("Error writing file:", err);
// }

// // async

// fs.writeFile("sample.txt", "hello world this is my updated content", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//   } else {
//     console.log("File written successfully!");
//   }
// });

// update
// ✅ appendFile and  appendFileSync

// const fs = require("fs");

// fs.appendFile("sample.txt", "\nHere I am appending a new line", (err) => {
//   if (err) {
//     console.error("Error appending to file:", err);
//   } else {
//     console.log("Content appended successfully (async)");
//   }
// });

// sync

// try {
//   fs.appendFileSync('sample.txt', '\nAppended Line');
//   console.log("without error run code");
// } catch (err) {
//   console.log("Error appending file:", err);
// }

// ✅ unlink and  unlinkSync (Delete File)

// delete the as a synchronous way

// const fs = require("fs");

// if(fs.existsSync("sample.txt"))
// {
//   fs.unlinkSync("sample.txt");
//   console.log("Synchronous delete complete");
// }
//   else{
//       console.log("⚠️ file.txt does not exist (Sync check)");

//   }

// Async
// fs.unlink("sample.txt", (err) => {
//   if (err) {
//     console.error("⚠️ Error: File may not exist or couldn't be deleted.");
//   } else {
//     console.log("✅ File deleted successfully!");
//   }
// });

// ✅ rename vs renameSync
// const fs=require("fs")
// fs.rename("sample.txt","new.txt",(err)=>{
// if(err)
//   {console.log(err)

//   }
// else{
//  console.log("now check your file name has been changed ")
// }
// })

// sync

// try{
//   fs.renameSync("sample.txt","new.txt");
//   console.log("✅ File name has been changed (sync)");
// }
// catch(err){
//     console.error("❌ Error renaming file:", err);
// }

// copy file
// async

// const fs = require("fs");

// fs.copyFile("new.txt", "destination.txt", (err) => {
//   if (err) {
//     console.error("❌ Error copying file:", err);
//   } else {
//     console.log("✅ File copied successfully!");
//   }
// });

// Sync

// try {
//   fs.copyFileSync("destination.txt", "copy.txt");
//   console.log("✅ File copied successfully (sync)");
// } catch (err) {
//   console.error("❌ Error copying file:", err);
// }

// mkdir=> Create  derectory(for Asynchronous )

// const fs =require("fs");
// fs.mkdir("myfolder",(err)=>{
//   if(err){
//     console.log("Error creating directory:", err);
//   }
//   else {
//     console.log("Directory created successfully!");
//   }
// });

// for synchronous

// try {
//   fs.mkdirSync("newfolder");
//   console.log("Directory created successfully (sync)!");
// } catch (err) {
//   console.error("Error creating directory:", err);
// }

// 📁 fs.readdir() and fs.readdirSync()

// 👉 Used to list all files/folders inside a directory.

// const fs = require("fs");

// fs.readdir("chapter_1", (err, files) => {
//   if (err) {
//     console.error("Error reading directory:", err);
//   } else {
//     console.log("Directory contents:", files);
//   }
// });

// sync
// const files = fs.readdirSync('.');
// console.log(files);


// create nested folder as a recursive way

// const fs = require("fs");
// fs.mkdirSync("newfolder/a/b", { recursive: true });

// const fs = require("fs");
// fs.rm('myFolder', { recursive: true, force: true }, (err) => {
//   if (err) throw err;
// });

// // Sync
// fs.rmSync('myFolder', { recursive: true, force: true });

// const fs = require("fs");

// fs.stat("copy.txt", (err, stats) => {
//   if (err) {
//     console.error("❌ Error:", err);
//   } else {
//     console.log("✅ File info:", stats);
//     console.log("Is file?", stats.isFile());
//     console.log("Is directory?", stats.isDirectory());
//   }
// });

// ✅ 2. fs.statSync() – Synchronous (blocking)

// try {
//   const stats = fs.statSync("new.txt");
//   console.log("✅ File info:", stats);
//   console.log("Is file?", stats.isFile());
//   console.log("Is directory?", stats.isDirectory());
// } catch (err) {
//   console.error("❌ Error:", err);
// }

// 👁️👁️ WATCHING FILES
// ✅ fs.watch (No Sync Version)

// const fs = require("fs");
// fs.watch("new.txt", (eventType, filename) => {
//   console.log("\n the file",filename,"was modified!" );
//   console.log("type of change was:",eventType);
// });

// setTimeout(()=>
//   fs.writeFileSync("new.txt","this file is modified"),3000
// )
