const lists = document.getElementsByTagName('li');
const input = document.getElementsByName('item');

function check(){
    
    // Input Element's Value
    let keyword = input[0].value;
    // will check globally with case Insensitive
    const flag = 'gi'; 
    // Regular Expression
    let regEx = new RegExp(keyword,flag)

    // For Hiding unMathced Li's
    let isKeywordFound = false;
    
    // Matching Every lists with input.keyword or you can say value
    for(let li of lists){
       
        //Matching key word in Every Li
       isKeywordFound = regEx.test((li.textContent));
        
        //If Not Found in li 
        li.style.display='none';

        //If Found in li
        if(isKeywordFound){
            li.style.display='block';
            console.log(li.textContent);
        }
    }
    
}

console.log(input[0]);

input[0].addEventListener('input',check);

