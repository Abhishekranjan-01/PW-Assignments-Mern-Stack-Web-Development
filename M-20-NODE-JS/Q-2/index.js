const fs = require('fs');

const string = "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";

fs.writeFile('./nodejs_architecture.txt',string,['utf8','w'],(err)=>{
    if(err){
        console.log("Error:\t",err);
    }else{
        console.log("File Written Successfully");
    }
});