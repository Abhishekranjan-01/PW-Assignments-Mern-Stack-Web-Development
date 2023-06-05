let Imgdiv = document.querySelector('div.container');
let img= document.querySelector('img#img1');



console.dir(Imgdiv);
console.log("HEllo TEsting");

Imgdiv.addEventListener('mouseover',()=>{

 console.log("Div Activated");


    img.style.display='inline';
    

});



Imgdiv.addEventListener('mouseout',()=>{

    console.log("Div Activated");
   
    img.style.display='none';
   
   
   });
   
   

img.addEventListener('mouseover',()=>{
    console.log('Hello Image !');
});