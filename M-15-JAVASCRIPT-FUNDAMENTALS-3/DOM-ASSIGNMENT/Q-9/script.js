//By Default User Is Logged Out and login status is 'logged out'
localStorage.setItem('loginState','Has Not logged In');

const loginButton = document.querySelector('[type=login]');

const logoutButton = document.querySelector('[type=logout]');

//h1 element is login state
const loginState = document.querySelector('h1');

//Login Button Event
loginButton.addEventListener('click',()=>{

    // If User Is Already Logged In , Then Login State Will Not Change
    if(localStorage.getItem('loginState') === 'is logged In'){
        
        loginState.textContent = 'User is already logged In';
    }
    else    //If User Is Logged Out Then User's Login State Will Change To Logged In 
    {
    localStorage.setItem('loginState','is logged In');

    loginState.textContent = `User ${localStorage.getItem('loginState')}`
    
}
});

//Logout Button Event
logoutButton.addEventListener('click',()=>{

    // If User Is Already Logged Out , Then Login State Will Not Change
    if(localStorage.getItem('loginState') == 'Has Not logged In'){

        loginState.textContent = 'User is already logged out';
        console.log(localStorage.getItem('loginState'));
    }
    else{   //If User Is Logged In Then User's Login State Will Change To Logged Out 
        localStorage.setItem('loginState','Has Not logged In');

        loginState.textContent = `User ${localStorage.getItem('loginState')}`
    
    }
    // Every Time The Logout Button Will Be Clicked The LoginState Will Be Deleted As Of Requirement,that's why Most Of The Time (else) block will execute.
    //To Execute (if) Block Alos Commet The Below Code.
    
    localStorage.removeItem('loginState');

});


