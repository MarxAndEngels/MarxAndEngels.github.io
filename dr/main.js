function openMenu() {
    document.querySelector(".sidebar").classList.toggle('active');
    document.querySelector(".toggle-btn").classList.toggle('active');
    document.querySelector("#span1").classList.toggle('active');
    document.querySelector("#span2").classList.toggle('active');
    document.querySelector("#span3").classList.toggle('active');
    document.querySelector(".toggle-btn").classList.toggle('tool');
}


let popup = document.getElementById('mypopup'),
popup_center = document.getElementById('popup_center'),
popupClose= document.querySelector('.close'),
popupPict= document.querySelector('.pict_popap'),
ButtPrev = document.getElementById('prev'),
ButtNext = document.getElementById('next'),
Pict2= document.querySelector('.pict_krug');

function openMenuAdaptive() {
  document.querySelector(".header__nav-row").classList.toggle('openTogl');
}

function funcRotate(){
  let picture = document.querySelector('.pict_krug');
  picture.classList.toggle('activPicture');
}




var colPict = 0;
var imgPict = [];
imgPict.push('img/a3ddPbRAvIU.jpg');
imgPict.push('img/2696988810.jpg');
imgPict.push('img/unnamed.jpg');
imgPict.push('img/выы.jpg');
popupPict.src=imgPict[colPict];

let popupPoivlenie = document.querySelector('.verh');
popupPoivlenie.addEventListener('click', function(){
  let dataID = event.target.dataset.id;
  if(dataID === 'nasvanie') {
    colPict=0;
    popupPict.src=imgPict[colPict];
  }
  if(dataID === 'nasvanie1'){
    colPict=1;
    popupPict.src=imgPict[colPict];
  }
  if(dataID === 'nasvanie2'){
    colPict=2;
    popupPict.src=imgPict[colPict];
  }
  if(dataID === 'nasvanie3'){
    colPict=3;
    popupPict.src=imgPict[colPict];
  }
  popup.style.display= "block";
})


let colPict1 = 0;
let imgPict1 = [];
imgPict1.push('img/NBDj.txt'); 
imgPict1.push('img/gift.gif'); 
imgPict1.push('img/12.png'); 
Pict2.src=imgPict1[colPict1];


function stopAnim(){
  let stop = document.querySelector('.kartinka');
  let style = stop.style.animationPlayState;
    stop.style.animationPlayState = (style === 'paused') ? 'running' : 'paused';
}


function PoevleniePictPrev(){  
  colPict1--;
    if(colPict1 === -1){
      colPict1=imgPict1.length-1;
   }
   Pict2.src=imgPict1[colPict1];

  animatePictOpacity();
}
function PoevleniePictNext(){  
  colPict1++;
    if(colPict1 === (imgPict1.length)){
      colPict1=0;
   }
   Pict2.src=imgPict1[colPict1];
  animatePictOpacity();

}

function animatePictOpacity(){
  document.querySelector('.pict_krug').classList.add('pict_krug_Animation');
  setTimeout( ()=> document.querySelector('.pict_krug').classList.remove('pict_krug_Animation') ,1000 );
}



popupClose.onclick = function(){
    popup.style.display= "none";
}

popup.addEventListener("click", function(event) {
    // e = event || window.event
    // if (e.target == 'popup_center') {
    //     popup.style.display= "none";
    // }
    if ( event.target === popup_center){
      popup.style.display= "none";
    }
  });

  
ButtPrev.addEventListener('click', PoevleniePictPrev);
ButtNext.addEventListener('click', PoevleniePictNext);



let time=document.querySelector(".parallax-text");
timer();
let timerPlay = setInterval( () =>{ timer() } , 1000);
function timer(){
   let now = new Date();
   let target = new Date(now.getFullYear(),
   now.getMonth(),
   now.getDate() + 1,
   0,
   0,
   0);
      let diff= Math.ceil((target.getTime() - now.getTime()) / (1000)); 
      
      let hours = Math.floor(diff/(60*60));
      diff = diff - hours * 60 * 60; //seconds - hours
   
      let minutes = Math.floor(diff/(60));
      diff = diff - minutes * 60;
   
      let seconds = diff;

      time.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' +  addZero(seconds) ;
}
function addZero(num){
  if( num<= 9){
     num = '0' + num;
  }
  return num;
}




  //якорь
  function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  var button = document.querySelector('#top');
  var footer = document.querySelector('.up-main');
  
  footer.addEventListener('click', () => {
    scrollTo(button);
  })
  //

  // let TopElemlet = setInterval( function TopElem() {
  //   if (document.documentElement.scrollTop > 2292) {
  //     footer.style.display ="block";
  //    }
  //    else {
  //     footer.style.display ="none";
  //    }
  // } , 1000 )

   //на сколько прокрутили и высота браузера
  window.addEventListener('scroll', function() {
    if (pageYOffset < document.documentElement.clientHeight*3){
      footer.style.display ="none";
    }
    else{
      footer.style.display ="block";
    }
  });

   


  let m3=document.querySelector(".mactext5");
var svet1=  setInterval( function svet1() {
  m3.classList.add("mactext55");
}, 5700);


var svet2= setInterval( function svet2() {
  m3.classList.remove("mactext55");
}, 9000);

setTimeout( () => {
  clearInterval(svet1);
  clearInterval(svet2);
  m3.classList.remove("mactext55");
}, 16900);


setTimeout( () => {
  document.querySelector(".toggle-btn").classList.toggle('tool');
}, 7000);


let range= document.getElementById('range');
range.value = 0.45;


range.onchange = function(){
  let vol=document.getElementById('player');
  vol.volume=range.value;
}




let playlist=[];
playlist.push('С др, Морген!');
playlist.push('Черный пистолет');
playlist.push('Грустный день рождения');

colMus=0;





let player= document.getElementById('player');
player.src= 'audio/' + playlist[colMus] + '.mp3';



let prevMus= document.getElementById('prevMus');
let nextMus= document.getElementById('nextMus');

let NameMusic = document.querySelector('.NameMusic');
NameMusic.innerHTML='Song name : ' + playlist[colMus];


function playMus(el){
 document.getElementById(el).play();
}
 function pauseMus(el){
   document.getElementById(el).pause();
 }


function PoevlenieMusPrev(){
  colMus--;
  if(colMus === -1){
    colMus=playlist.length-1;
  }
  ShakeNameSong();
  player.src= 'audio/' + playlist[colMus] + '.mp3';
  player.play();
  NameMusic.innerHTML='Song name : ' + playlist[colMus];
  
}
function PoevlenieMusNext(){
  colMus++;
  if(colMus === playlist.length){
    colMus=0;
  }
  ShakeNameSong();
  player.src= 'audio/' + playlist[colMus] + '.mp3';
  player.play();
  NameMusic.innerHTML='Song name : ' + playlist[colMus];
}

function ShakeNameSong(){
  NameMusic.classList.add('active_box');
  setTimeout(function(){NameMusic.classList.remove('active_box') }, 1000);
}

prevMus.addEventListener('click', PoevlenieMusPrev);
nextMus.addEventListener('click', PoevlenieMusNext);


let proggres = document.querySelector('.progress');

let ptime = document.querySelector('.progress-p');

player.ontimeupdate = proggresUpdate;
function proggresUpdate(){
  let d = Math.floor(player.duration);
  let c = Math.floor(player.currentTime + 0,0001);
  proggres.value = c/d*100;
  let hours = Math.floor(c/(60*60));
  c = c-hours*60*60;
  let min = Math.floor(c/(60));
  c= c-min*60;
  let sec = c;
  ptime.innerHTML = addZero(hours) + ':' + addZero(min) + ':' + addZero(sec);

  if(player.duration === player.currentTime){
    PoevlenieMusNext();
  }
}

proggres.onclick = MusRewind;

function MusRewind(){
  let w = proggres.offsetWidth;
  let pos = event.offsetX;
  proggres.value = pos/w*100;
  player.pause();
  player.currentTime= player.duration*(pos/w);
  player.play();
}




function toggle(objNameText , togl1) {
  let objTextStyle = document.querySelector(objNameText).style;
  let togl = document.querySelector(togl1);
  objTextStyle.display = (objTextStyle.display == 'flex') ? 'none' : 'flex';
  togl.classList.toggle('toglactive');
  let text= document.querySelector('.products__span');
  text.innerHTML = (text.innerHTML == 'Открой меня 😋😱😮') ? 'Закрой меня 🔘🔴🔵' : 'Открой меня 😋😱😮';
}

function toggleAction(objNameText , togl2) {
  let objTextStyle = document.querySelector(objNameText).style;
  let togl = document.querySelector(togl2);
  objTextStyle.display = (objTextStyle.display == 'block') ? 'none' : 'block';
  togl.classList.toggle('togl-product-action-two');
  document.querySelector('.togl-actions').classList.toggle('togl-actions-two');
  let line = document.querySelector('.line').style;
  line.display = (line.display == 'none') ? 'block' : 'none';
}


//-------------------- TO DO LIST
let input_do = document.querySelector('.input-to-do');
let button_input = document.querySelector('.button-input');
let result = document.querySelector('.result');
let total = document.querySelector('.span-total');
let stor;
let count;

function toLocalStore(){
   stor = result.innerHTML;
   localStorage.setItem('story', stor);
   
   count = result.getElementsByTagName('li').length;
   localStorage.setItem('col', count);
}

result.addEventListener('click', function(event){
 if(event.target.tagName === 'LI'){
   event.target.classList.toggle('li-active');
 }
 else if(event.target.classList.contains('btn_to_do')){
   let div = event.target.parentNode;
   result.removeChild(div);
 }
 else if(event.target.classList.contains('listen')){
   let inner = event.target.parentNode;
   let listen = inner.firstChild.textContent;
   let utterance = new SpeechSynthesisUtterance(listen);
   utterance.rate = 0.8;
   utterance.lang = "ru-RU";
   speechSynthesis.speak(utterance);
 }

 toLocalStore();
 total.innerHTML = 'Total: ' + result.getElementsByTagName('li').length;
})

button_input.addEventListener('click' , function(e){
   if (input_do.value === '') return;
  CreateAndDeleteElements(input_do.value);
  console.log(input_do.value);
  input_do.value = '';
  toLocalStore();
  total.innerHTML = 'Total: ' + result.getElementsByTagName('li').length;
})

function CreateAndDeleteElements(value){  
 let li = document.createElement('li');
 let butt = document.createElement('button');
 let sound = new Image();
 sound.src = 'img/volume.png';
 sound.className = 'listen';
 li.className = 'li';
 li.textContent = value;
 butt.className = 'btn_to_do';
 butt.innerHTML = 'X';
 li.appendChild(sound);
 li.appendChild(butt);
 result.appendChild(li);
}

if(localStorage.getItem('story')){
   result.innerHTML = localStorage.getItem('story');

   total.innerHTML = 'Total: ' + localStorage.getItem('col');
}

let butt_stop = document.querySelector('.button-stop');
let synth = window.speechSynthesis;

butt_stop.onclick = function stopTalking(){
 synth.cancel(); 
}

//--------------------------------------------------------------------