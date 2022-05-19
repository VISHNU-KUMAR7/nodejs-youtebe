const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/file.txt`;

// fs.writeFileSync(filePath, 'This is a simple text file');

// fs.readFile(filePath, "utf8", (error, file) => {
//   console.log(file);
// });

// fs.appendFile(filePath, " add new texxt in file to check append", (error) => {
//   if (!error) {
//     console.log("File is append");
//   }
// });

const newFilePath = `${dirPath}/new.txt`;

// fs.rename(filePath, newFilePath,(error)=>{
//     if(!error){
//         console.log("file name ")
//     }
// })

fs.unlinkSync(newFilePath);
