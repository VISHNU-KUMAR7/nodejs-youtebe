const fs = require('fs');

const input = process.argv;
// fs.writeFileSync(input[2],input[3])

if(input[2] == 'add'){
    fs.writeFileSync(input[3],input[4])
}
else if(input[2] == 'remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("invalid input");
}

// Command
// node index.js hello hi

// node index.js add orange.txt `this is color and fruit`

// node index.js remove orange.txt

// node index.js remove orange.txt

// node index.js remove apple.txt 