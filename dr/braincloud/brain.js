let accordions= document.querySelectorAll('.accordion-title');
let tagName;

for(let accordion of accordions){
    accordion.addEventListener('click',a);
}
function a(){
    let content = this.nextElementSibling;
    content.style.display = (content.style.display == 'block') ? 'none' : 'block';

    let togl =this.previousElementSibling;
    togl.classList.toggle('toglactive');
}


let picts = document.querySelectorAll('.rewiews-item')
let count = 0;
let next = document.querySelector('.toglRigth');
let prev = document.querySelector('.toglLeft');

next.addEventListener('click', function(){
   count++;
   if(count === picts.length){                 //3
       count = 0;
   }
   for(let pict of picts){
    pict.classList.remove('active');
   }
   picts[count].classList.add('active');
})
prev.addEventListener('click', function(){
   count--; 
   if(count === -1){
      count = picts.length-1;                //2
   }
   for(let pict of picts){
      pict.classList.remove('active');
     }
     picts[count].classList.add('active');
})
