let accordions= document.querySelectorAll('.accordion-title');
let tagName;

for(let accordion of accordions){
    accordion.addEventListener('click',a);
}
function a(){
    let content = this.nextElementSibling;
    content.style.display = (content.style.display == 'block') ? 'none' : 'block';
    tagName = this.getAttribute('data-togl');
    SelectToggle(tagName); 
}
function SelectToggle(tagName){
    document.querySelector('.'+ tagName).classList.toggle('toglactive')
}




let picts = document.querySelectorAll('.rewiews-item')
let count = 0;
let next = document.querySelector('.toglRigth');
let prev = document.querySelector('.toglLeft');

next.addEventListener('click', function(){
   count++;
   if(count === 3){
      count = 0;
   }
   for(let pict of picts){
      pict.classList.remove('active');
   }
   for(let pict of picts){
      if(pict.classList.contains(count)){
         pict.classList.add('active')
      }
   }
   console.log(count);
})

prev.addEventListener('click', function(){
   count--;
   if(count === -1){
      count = 2;
   }
   for(let pict of picts){
      pict.classList.remove('active');
   }
   for(let pict of picts){
      if(pict.classList.contains(count)){
         pict.classList.add('active')
      }
   }
   console.log(count);
})