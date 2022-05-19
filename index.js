const fs = require("fs");

// fs.writeFileSync("apple.txt", 'this is the apple file');

const path = require("path");
const dirPath = path.join(__dirname, "files");
// console.warn(dirPath);
// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(`${dirPath}/apple${i}.txt`, "a simple tet file");
// }

fs.readdir(dirPath, (error, files) => {
  files.forEach((file) => {
    console.log("File name is",file);
  });
});
