const fs = require('fs');

const string = `\n\nCompared to other server-side languages,

Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of
web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads,

consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible
with multiple frameworks and makes the development process easier.Compared to other server-side languages, Node js has distinct ad
vantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built
on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory

and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple framework
s and makes the development process easier.`;


//Appending File
fs.appendFileSync('nodejs_architecture.txt',string,['utf8','a',],(err)=>{

    if(err){
        console.log("Error:\t",err);
    }
    
    console.log("\n\n\n\nData Successfully Appended\n\n\n");

});

//Reading File
fs.readFile('nodejs_architecture.txt',['r'],(err,data)=>{
   
    if(err){
        console.log("Error:\t",err);
    }
    else{
        console.log(data.toString());
        console.log("\n\n\n\nReading Done !");
    }
});