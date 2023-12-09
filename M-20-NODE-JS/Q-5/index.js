const fs = require('fs');

//Deleting The File
fs.unlink('nodejs_architecture.txt',(err)=>{
    if(err)
    console.log("Error: \t",err);

    console.log("File Deleted Successfully");
})