const body=document.querySelector("body");
const dialog=document.querySelector('dialog');
const button=document.querySelector('button');
const email=document.querySelector('input[type=email]');
const Name=document.querySelector('input[type=text]');
const tel=document.querySelector('input[type=tel]');
const textArea=document.querySelector('textarea');
const x = document.querySelector('h6');

const checkbox=document.querySelector('input[type=checkbox]');
console.log(checkbox);
//For Opening Pop Up Window
dialog.show();

//Adding Event On Button && Checking Conditions
button.addEventListener('click',()=>{
  if(checkbox.checked){
    console.log("Requireds Are Present");
    // console.log(checkbox.value);
    body.style.backgroundColor='#fff';
  }
//   console.log(checkbox.checked);
 
})

x.addEventListener('click',()=>{
  dialog.close();
  body.style.backgroundColor='#fff';
})

