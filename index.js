const os = require("os");
// console.log(os.arch());  //x64
console.log(os.freemem()/1024*1024*1024) // free memory
console.log(os.totalmem()) // total memory 
console.log(os.platform()) //Window 32

console.log(os.userInfo()) // homedirectory, username