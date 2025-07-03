const path=require("path");
// console.log(__dirname)
// console.log(__filename)

// console.log(path.basename('/users/docs/file.txt')); // 'file.txt'  // is an example to show the syntax of path.basename(path, [ext]).

// console.log(path.basename('/Node_JS/day_3/path_module.js'))  //  my real example using my actual folder structure  path."

// console.log(path.basename('/Node_JS/day_3/path_module.js')); 
// Output: 'path_module.js'


//join()

const filepath=path.join(__dirname,"data","student","data.txt");
// console.log(filepath)


// parse()
// console.log(path.parse(filepath))

// 
// console.log(path.resolve(filepath))

// Returns the extension of the file.
console.log(path.extname(filepath))