const arr = [1,2,3,4,5];

// Callback Function
function doublingTheElements(arr){

    const newArr = [];

    for(let element of arr){
    newArr.push(element);
    }

    arr.push(...newArr);

    // To See Clear Output That's I am sorting the array.
    arr.sort((a,b)=>a-b);
}


function doubleUsingCallback(arr,callback){
    callback(arr);
}

doubleUsingCallback(arr,doublingTheElements);

console.log(arr);