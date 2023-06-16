const body=document.querySelector("body");
const dialog=document.querySelector('dialog');
const button=document.querySelector('button');
const email=document.querySelector('input[type=email]');
const Name=document.querySelector('input[type=text]');
const tel=document.querySelector('input[type=tel]');
const textArea=document.querySelector('textarea');
const x = document.querySelector('h6');

//For Opening Pop Up Window
dialog.show();

//Adding Event On Button && Checking Conditions
button.addEventListener('click',()=>{
  if(email.value != "" && Name.value != "" && tel.value != "" && textArea.value != ""){
    console.log("Requireds Are Present");
    body.style.backgroundColor='#fff';
  }

  /* Below Code Is For Testing The Differnet Event Scenarios Otherthan That No Use */

  // else{
  //   if(dialog.open){
  //     console.log('dialog element is still active');
  //   }
  //   else{
  //     body.style.backgroundColor='#fff';
  //   }  
  // }
 
})

x.addEventListener('click',()=>{
  dialog.close();
  body.style.backgroundColor='#fff';
})

