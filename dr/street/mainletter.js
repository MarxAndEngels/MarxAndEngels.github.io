let items_none = document.querySelectorAll('.none');
let text_pososi = document.querySelector('.text-pososi');
let wrapper = document.querySelector('.wrapper');

let toggle_pict= document.querySelector('.toggle_pict');
toggle_pict.onclick = ()=>{
    toggle_pict.classList.toggle('active');
    let els = document.querySelectorAll('.letter');
    wrapper.classList.toggle('faid-in');
    for(let e of els){
        e.style.animationName ='none';
        e.style.opacity = '1';
    }
    for(let el of items_none){
        el.classList.toggle('remove');
}
text_pososi.classList.toggle('active');
}

let RemoveText = setTimeout(() => {
    for(let el of items_none){
        el.classList.add('remove');
}
setTimeout(()=>{
    toggle_pict.style.display = 'inline';
document.querySelector('.vk').style.display = 'inline';
},500);
}, 10000);
let AddPos = setTimeout(() => {
    text_pososi.classList.add('active');
}, 10000);
