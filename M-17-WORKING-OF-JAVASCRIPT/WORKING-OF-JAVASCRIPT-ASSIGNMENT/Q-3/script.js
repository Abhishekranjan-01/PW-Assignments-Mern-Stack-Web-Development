function returnSum(num1,num2){
    console.log(sum); //Output:- undefined; because it is 
    //accessed before initialization of variable 'sum',
    //the 'var' variables in javascript contains undefined
    //as value before it's initialization.
    
    var sum = num1+num2;
    

    return sum;
}

console.log(returnSum(5,5));