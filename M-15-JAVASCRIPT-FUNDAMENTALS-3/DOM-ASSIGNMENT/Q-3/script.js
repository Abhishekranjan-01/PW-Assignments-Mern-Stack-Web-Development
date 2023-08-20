const plusButton = document.querySelector('[name=plus]');

const miusButton = document.querySelector('[name=minus]');

const number = document.querySelector('[name=number]');

let count = 0;

number.textContent = `${count}`;

// For Increment
function incrementCount(){
    count++;
    number.textContent = `${count}`;
}

// For Decrement
function decrementCount(){

    count--;
    number.textContent = `${count}`;

    if(count<0){
        alert('Counter is going beyond 0.');
    }
}
//Plus Button
plusButton.addEventListener('click',incrementCount);
//Minus Button
miusButton.addEventListener('click',decrementCount);

