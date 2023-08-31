// Function TO Manipulate String
const manipulateString = (string)=>{

string = string.toUpperCase();
// Function to print uppercase String
function logString(){
    console.log("The manipulated string is: ",string);
}
// Returing Function
return logString;
}

const logString = manipulateString("hello, world");
logString();