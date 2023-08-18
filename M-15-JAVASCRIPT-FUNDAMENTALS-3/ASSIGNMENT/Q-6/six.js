function reverseString(value){

    value = Array.from(value);

    let temp = null;
    let len  = value.length;
    len--;

    // Reversing String
    for(let i = 0 ;i < ((value.length)/2);i++)
    {
        temp = value[i];
        value[i] = value[len]; 
        value[len] = temp;
        len--;
    }
    const ReversedString = value.join('');
    return ReversedString;    
}

console.log(reverseString('Mike'));