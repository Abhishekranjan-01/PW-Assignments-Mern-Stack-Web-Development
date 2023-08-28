console.log(multiplyNumbers(5,5));

//Line 1 Will Cause Error Because the variable 'multiplyNumbers'
//is used Before it's Initialization.
 
const multiplyNumbers = function(num1,num2){
return(num1*num2);
}

//Below Code Will Work Fine Because , Before The Execution Of the
//below code the 'multiplyNumbers Variable is
//Initialized and it contains 'function expression' at that time.

//So to use below code you need to "comment" line-1 to avoid error on Line-1.

//console.log(multiplyNumbers(5,5));
