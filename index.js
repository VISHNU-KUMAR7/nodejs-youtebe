// console.log("start exe...");

let a = 10;
let b = 0;

// console.log("logic exe....");
setTimeout(() => {
  //   console.log("logic exe...");
  b = 20;
}, 2000);

// console.log("complete exe....");
console.log(a + b);
