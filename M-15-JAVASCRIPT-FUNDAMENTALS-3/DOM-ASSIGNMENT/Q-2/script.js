const body = document.body;

const h1 = document.querySelector('h1');

const toggleButton = document.getElementById('toggle-button');

function changeTheme(){

    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')){
        h1.textContent = 'This is Dark Mode';
        h1.style.color = '#efefef';
    }
    else{
        h1.textContent = 'This is Light Mode';
        h1.style.color = '#000';
    }
 
}

toggleButton.addEventListener('click',changeTheme);