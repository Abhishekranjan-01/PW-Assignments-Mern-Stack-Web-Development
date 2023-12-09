const fs = require('fs');

fs.readFile('./nodejs_architecture.txt',(err,data)=>{
    console.log(data.toString());
});