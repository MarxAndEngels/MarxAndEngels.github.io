let toglbtn = document.querySelector(".toggle-btn");
let sidebar = document.querySelector(".sidebar");
let span1 = document.querySelector("#span1");
let span2 = document.querySelector("#span2");
let span3= document.querySelector("#span3");
function openMenu() {
  sidebar.classList.toggle('active');
  toglbtn.classList.toggle('active');
  span1.classList.toggle('active');
  span2.classList.toggle('active');
  span3.classList.toggle('active');
}
if(window.innerHeight > 693){
  toglbtn.classList.display = 'none';
}
window.onload= function(){
  toglbtn.classList.display = 'block';
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


let icon = document.querySelector('.firstinfo');
let gif_info = document.querySelector('.gifinfo');
icon.onclick = function(){
  icon.classList.toggle('info-active');
  gif_info.classList.toggle('activeinfo');
}

let secondicon = document.querySelector('.secondinfo');
let gif_info_second = document.querySelector('.gifinfoswcond');
secondicon.onclick = function(){
  secondicon.classList.toggle('info-active');
  gif_info_second.classList.toggle('activeinfo');
}

let popups = document.querySelectorAll('.Andry');
for(let el of popups){
  el.addEventListener('click', function(){
    let dataID = event.target.dataset.id;
    popupPict.src = dataID;
    popup.style.display= "block";
  })
}

let videos = document.querySelectorAll('.perviy-class-video');
let blocks_video = document.querySelectorAll('.info--wide');

for(let el of blocks_video){
  el.addEventListener('click', OnFirstClickVideo);
}

function OnFirstClickVideo(){
  let nextel = this.children[0];
  if(nextel.paused){
    nextel.play();
  }
  this.removeEventListener('click', OnFirstClickVideo);
}


let colPict1 = 0;
let imgPict1 = [];
imgPict1.push('img/source1.gif');
imgPict1.push('img/13.png');
imgPict1.push('img/JCVDdance.gif');
imgPict1.push('img/RUSSIA_KID_DANCE.gif'); 
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
    if ( event.target === popup_center){
      popup.style.display= "none";
    }
    if(event.target === popup){
      popup.style.display= "none";
    };
  });

popupPict.addEventListener('mouseover', function(){
popupClose.classList.remove('closeMouseOver');
}) 
popupPict.addEventListener('mouseout', function(){
  popupClose.classList.add('closeMouseOver');
})   

ButtPrev.addEventListener('click', PoevleniePictPrev);
ButtNext.addEventListener('click', PoevleniePictNext);

for(let el of videos){
  el.addEventListener('click', ChangeVideo);
}

function ChangeVideo(){
  let arr = [1,2];
  let num = this.dataset.count;
  if(num == arr[0]){
    if(videos[1].played){
      videos[1].pause();
    }
  }
   if(num == arr[1]){
     if(videos[0].played){
      videos[0].pause();
     }
  }
}

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
  function scrollTo(element,y=30) {
    window.scroll({
      left: 0, 
      top: element.offsetTop - y,
      behavior: 'smooth'
    })
  }
  var button = document.querySelector('#top');
  var footer = document.querySelector('.up-main');

let todo_scroll = document.querySelector('.todoscroll');
let contend_scroll_id = document.getElementById('conntent-srcoll-id');
let sound_player_scroll = document.querySelector('.sound-player-scroll');
let sound_player_scroll_id = document.getElementById('scroll-id-player');
let calendar_scroll =document.querySelector('.calendar-scroll');
let calendar_scroll_id =document.getElementById('calendar_scroll_id');

  footer.addEventListener('click', () => {
    scrollTo(button);
  });
  todo_scroll.addEventListener('click', () => {
    scrollTo(contend_scroll_id);
  })
  sound_player_scroll.addEventListener('click', () => {
    scrollTo(sound_player_scroll_id , 90);
  })
  calendar_scroll.addEventListener('click',function(){
    scrollTo(calendar_scroll_id , 70);
  })


  if(pageYOffset > document.documentElement.clientHeight-100){
    toglbtn.style.display = 'none';
  }
   //на сколько прокрутили и высота браузера
  window.addEventListener('scroll', function() {
      if(pageYOffset > document.documentElement.clientHeight-100){
        sidebar.classList.remove('active');
        toglbtn.classList.remove('active');
        span1.classList.remove('active');
        span2.classList.remove('active');
        span3.classList.remove('active');
        toglbtn.style.display = 'none';
        sidebar.style.display = 'none';
        footer.style.display='block';
          }
     else{
       toglbtn.style.display = 'block';
        sidebar.style.display = 'block';
        footer.style.display='none';
     }
  });



let m3=document.querySelector(".mactext5");
var svet1= setTimeout( function svet1() {
  m3.classList.add("mactext55");
}, 5700);


var svet2= setTimeout( function svet2() {
  m3.classList.remove("mactext55");
}, 9000);

setTimeout( () => {
  m3.classList.remove("mactext55");
}, 13000);

let textupper = document.querySelector('.dropup-text');

let games = document.querySelector('.games');
let game_drop = document.querySelector('.game-drop-down');
document.querySelector('.header').onclick = function GameDrop(e){
  if(e.target.classList.contains('games')){
    game_drop.classList.toggle('drop-game-block');
  }
  else{
    game_drop.classList.remove('drop-game-block');
  }
};


let checkbox_button = document.querySelector('.checkbox-button');
let butt_arr = document.querySelectorAll('.buuut');
let block_pict_mus = document.querySelector('.block-pict-mus');

checkbox_button.onclick = function(){
  if(this.checked){
    for(let el of butt_arr){
      el.style.display= 'none';
    }
          Pict2.classList.remove('pict_krug_Animation');
          Pict2.classList.add('del');
          setTimeout(()=>{
            Pict2.style.display = 'none';
          },1000);
          setTimeout(()=>{
            block_pict_mus.style.display = 'flex';
          },1200);
   addSoundPad();  
   setTimeout(()=>{
    textupper.innerHTML = 'Закрыть полный sound player'; 
  },800);
  }
  else{
    for(let el of butt_arr){
      el.style.display= 'inline';
    }
    Pict2.classList.remove('del');
    Pict2.style.display = 'block';
    Pict2.classList.add('pict_krug_Animation');
    block_pict_mus.style.display = 'none';
    setTimeout(()=>{
      textupper.innerHTML = 'Открыть полный sound player';
    },800);
  }
}

let range= document.getElementById('range');
let vol=document.getElementById('player');
range.value = 0.55;

let upRangeText = document.querySelector('.value-upper-range');

range.onchange = function(){
  vol.volume=range.value;
}
vol.volume=range.value;

function changeOnRange(){
  upRangeText.style.display = 'inline';
  let w = range.offsetWidth;
  let pos = event.offsetX;
   let current = Math.ceil((pos/w)*100);
   if(event.offsetX >= 200){
    upRangeText.style.display = 'none';
   } if(event.offsetX < 0){
    upRangeText.style.display = 'none';
   }
  upRangeText.style.left =Math.ceil(current*1.3)+ 'px';
  upRangeText.innerHTML = current + '%';
}

range.onmouseover = function(){
  upRangeText.style.display = 'inline';
  range.addEventListener('mousemove', changeOnRange);
}

range.onmouseout = function(){
  upRangeText.style.display = 'none';
}


let playlist=[];
playlist.push('С др, Морген!');
playlist.push('Черный пистолет');
playlist.push('Грустный день рождения');

colMus=0;

let PictPlaylist =[];
PictPlaylist.push('img/mus1.png');
PictPlaylist.push('img/mus2.png');
PictPlaylist.push('img/mus3.png');

let mus_photo = document.querySelector('.mus_photo');
mus_photo.src= PictPlaylist[colMus];

let player= document.getElementById('player');
player.src= 'audio/' + playlist[colMus] + '.mp3';

let playPict = document.querySelector('.play');

let flag= true;
function playOrPauseMus(){
  addSoundPad();
  if(flag === true){
    Pict2.src=imgPict1[3];
    flag = false;
  }
  if( player.paused){
    player.play();
    playPict.src="img/pause.png";
  }
  else{
    player.pause();
    playPict.src="img/play.png";
  }
}

let prevMus= document.querySelector('.rewind');
let nextMus= document.querySelector('.fast-forward');

let soundPad = document.querySelector('.soundpad');

let NameMusic = document.querySelector('.NameMusic');
NameMusic.innerHTML='Song name : ' + playlist[colMus];


function PoevlenieMusPrev(){
  addSoundPad();
  colMus--;
  if(colMus === -1){
    colMus=playlist.length-1;
  }
  ShakeNameSong();
  player.src= 'audio/' + playlist[colMus] + '.mp3';
  player.play();
  NameMusic.innerHTML='Song name : ' + playlist[colMus];
  mus_photo.src= PictPlaylist[colMus];
  playPict.src="img/pause.png";
}
function PoevlenieMusNext(){
  addSoundPad();
  colMus++;
  if(colMus === playlist.length){
    colMus=0;
  }
  ShakeNameSong();
  player.src= 'audio/' + playlist[colMus] + '.mp3';
  player.play();
  NameMusic.innerHTML='Song name : ' + playlist[colMus];
  mus_photo.src= PictPlaylist[colMus];
  playPict.src="img/pause.png";
}

function ShakeNameSong(){
  NameMusic.classList.add('active_box');
  setTimeout(function(){NameMusic.classList.remove('active_box') }, 1000);
}

function addSoundPad(){
  soundPad.classList.add('activesound');
}

prevMus.addEventListener('click', PoevlenieMusPrev);
nextMus.addEventListener('click', PoevlenieMusNext);


let value_progress_up = document.querySelector('.value-upper-progress');


let proggres = document.querySelector('.progress');

let ptime = document.querySelector('.progress-p');


let hoursMus;
let minMus;
let secMus;
let hoursMusMouse;
let minMusMouse;
let secMusMouse;
player.ontimeupdate = proggresUpdate;
function proggresUpdate(){
  let d = Math.floor(player.duration);
  let c = Math.floor(player.currentTime + 0,0001);
  proggres.value = c/d*100;
  MusTimeDefine(c);
  ptime.innerHTML = addZero(hoursMus) + ':' + addZero(minMus) + ':' + addZero(secMus);

  if(player.duration === player.currentTime){
    PoevlenieMusNext();
  };

  if( player.paused){
    playPict.src="img/play.png";
  }
  else{
    playPict.src="img/pause.png";
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

function MusTimeDefine(c){
  hoursMus = Math.floor(c/(60*60));
  c = c-hoursMus*60*60;
  minMus = Math.floor(c/(60));
  c= c- minMus*60;
  secMus = Math.floor(c);
}

function MusTimeDefineMouse(c){
  hoursMusMouse = Math.floor(c/(60*60));
  c = c-hoursMusMouse*60*60;
  minMusMouse = Math.floor(c/(60));
  c= c- minMusMouse*60;
  secMusMouse = Math.floor(c);
}

proggres.onmouseover = function(){
  value_progress_up.style.display ='inline';
 proggres.addEventListener('mousemove', function(){
  let w = proggres.offsetWidth;
  let pos = event.offsetX;
  let time = player.duration*(pos/w);
  MusTimeDefineMouse(time);
  value_progress_up.innerHTML = addZero(hoursMusMouse) + ':' + addZero(minMusMouse) + ':' + addZero(secMusMouse);
  value_progress_up.style.left = Math.ceil(time/1.3) + 'px';
 })
}
proggres.onmouseout = function(){
  value_progress_up.style.display ='none';
}







function toggle(objNameText , togl1) {
  let objTextStyle = document.querySelector(objNameText).style;
  let togl = document.querySelector(togl1);
  objTextStyle.display = (objTextStyle.display == 'flex') ? 'none' : 'flex';
  togl.classList.toggle('toglactive');
  let text= document.querySelector('.products__span');
  setTimeout(()=>{
    text.innerHTML = (text.innerHTML == 'Открой меня 😋😱😮') ? 'Закрой меня 🔘🔵💜' : 'Открой меня 😋😱😮';
  },800);
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

button_input.addEventListener('click' , function() {
  todoStart();
})

function todoStart(){
  if (input_do.value.trim() === '') return;
  CreateAndDeleteElements(input_do.value);
  input_do.value = '';
  toLocalStore();
  total.innerHTML = 'Total: ' + result.getElementsByTagName('li').length;
}

input_do.addEventListener('keydown', function(event){
  if (event.key === 'Enter'){
    event.preventDefault();
    todoStart();
  }
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