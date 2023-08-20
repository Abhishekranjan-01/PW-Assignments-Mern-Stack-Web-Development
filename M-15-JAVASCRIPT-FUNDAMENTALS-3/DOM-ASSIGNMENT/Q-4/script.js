const nameInput = document.querySelector('[type=text]');
const emailInput = document.querySelector('[type=email]');
const passwordInput = document.querySelector('[type=password]');

const form = document.querySelector('form');

const nameInputWarning = document.querySelector('[data-warning-name]');

const passwordInputWarning = document.querySelector('[data-warning-password]');


/*          //For More Advance Validation On Name
nameInput.addEventListener('focus',()=>{
    
    const nameLength = nameInput.value;
    if(nameLength.length >= 3 ){

        nameInputWarning.classList.add('hidden');
    }
    else{
        nameInputWarning.classList.remove('hidden');
    }


});
*/


//Checking Length of Characters In Name Input In RealTime
nameInput.addEventListener('keyup',()=>{

    const nameLength = nameInput.value;
    if(nameLength.length >= 3 ){

        nameInputWarning.classList.add('hidden');
    }
    else{
        nameInputWarning.classList.remove('hidden');
    }
    // console.log(nameInput.value);

});



//Checking Length of Characters In Password Input In RealTime
passwordInput.addEventListener('keyup',()=>{


    //Warning For Password
    const passwordLength = passwordInput.value;

    if(passwordLength.length >= 8 ){

        passwordInputWarning.classList.add('hidden');
    }
    else{
        passwordInputWarning.classList.remove('hidden');
    }

    //Warning For Name

    const nameLength = nameInput.value;
    if(nameLength.length >= 3 ){

        nameInputWarning.classList.add('hidden');
    }
    else{
        nameInputWarning.classList.remove('hidden');
    }
});

form.addEventListener('submit',(e)=>{

    // For Prevent Reload On Submit
    e.preventDefault();

    const nameLength = nameInput.value;

    const passwordLength = passwordInput.value;

    if(nameLength.length <= 2 || passwordLength.length <= 7){

        alert('Form Validation Failed!!');
    }
    else{
        alert('Form Validation Successfull !!');
    }
    console.log(e);

})
