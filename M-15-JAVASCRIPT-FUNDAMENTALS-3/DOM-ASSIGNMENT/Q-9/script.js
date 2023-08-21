//By Default User Is Logged Out and login status is 'logged out'
localStorage.setItem('loginState','Has not logged In');

const loginButton = document.querySelector('[type=login]');

const logoutButton = document.querySelector('[type=logout]');

//h1 element is login state
const loginState = document.querySelector('h1');

//Login Button Event
loginButton.addEventListener('click',()=>{
    localStorage.setItem('loginState','is logged In');

    loginState.textContent = `User ${localStorage.getItem('loginState')}`

});

//Logout Button Event
logoutButton.addEventListener('click',()=>{
    localStorage.setItem('loginState','Has Not logged In');

    loginState.textContent = `User ${localStorage.getItem('loginState')}`

    localStorage.removeItem('loginState');
});


