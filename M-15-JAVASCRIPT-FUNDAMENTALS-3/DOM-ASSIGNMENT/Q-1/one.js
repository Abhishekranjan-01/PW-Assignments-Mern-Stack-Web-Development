const input = document.getElementById('profile-picture');

const h2 = document.createElement('h2');
h2.textContent = 'Your Profile Picture';

// Event Listener
input.addEventListener('input',()=>{
 
    // FileReader Variable
    var oFReader = new FileReader();
    
    // will read the uploaded image
    oFReader.readAsDataURL(input.files[0]);

    // Will Active after file loaded
    oFReader.onload = function (oFREvent)
    {
        const img = document.createElement('img');
        
        img.src = oFREvent.target.result;
        img.style.width=`25%`;
        
        input.insertAdjacentElement("afterend",img);

        img.insertAdjacentElement("beforebegin",h2);
    
    };
 

});


