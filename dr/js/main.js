startConfetti();

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
    document.body.style.overflow='hidden';
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
    document.body.style.overflow='auto';
}

popup.addEventListener("click", function(event) {
    if ( event.target === popup_center){
      popup.style.display= "none";
      document.body.style.overflow='auto';
    }
    if(event.target === popup){
      popup.style.display= "none";
      document.body.style.overflow='auto';
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

// let back_gr = document.querySelector('.header');
// let content_todo = document.querySelector('.content');

function FastScroll(element,bg, y=30) {
  bg = document.querySelector('.'+bg);
  window.scroll({
    left: 0, 
    top: element.offsetTop - y,
  });
  // if(player){
  //   if(player.played){player.pause() }
  // }
  for(let video of videos){
     if(video.played){
      video.pause();
     }
  }
  bg.classList.add('scroll');
  setTimeout( () => { bg.classList.remove('scroll') }, 1000);
}


  //якорь
  // function scrollTo(element,y=30) {
  //   window.scroll({
  //     left: 0, 
  //     top: element.offsetTop - y,
  //     behavior: 'smooth'
  //   })
  // }
//   var button = document.querySelector('#top');
//   var footer = document.querySelector('.up-main');

// let roulette = document.querySelector('.roulette');
// let contend_scroll_id = document.getElementById('conntent-srcoll-id');
// let sound_player_scroll = document.querySelector('.sound-player-scroll');
// let sound_player_scroll_id = document.getElementById('scroll-id-player');
// let calendar_scroll =document.querySelector('.calendar-scroll');
// let calendar_scroll_id =document.getElementById('calendar_scroll_id');

// let sp_mouse = document.querySelector('.sp');
// let tdl =document.querySelector('.tdl');
// let clndr = document.querySelector('.clndr');
// let endButt = document.querySelector('.endButt');
// let flag_parallax = document.querySelector('.flag_parallax');
// let openIt = document.querySelector('.openIt');
// let flag_openit = document.querySelector('.flag_openit');

//   footer.addEventListener('click', () => {
//     FastScroll(button , 'header');
//   });
//   roulette.addEventListener('click', () => {
//     FastScroll(flag_openit ,'buuut_prevv',60 );
//   });
//   sound_player_scroll.addEventListener('click', () => {
//     scrollTo(sound_player_scroll_id , 90);
//   });
//   calendar_scroll.addEventListener('click',function(){
//     FastScroll(calendar_scroll_id ,'buuut_prevv' , 70);
//   });




//   sp_mouse.addEventListener('click', function(){
//     FastScroll(sound_player_scroll_id ,'buuut_prevv' , 90);
//   });
//   tdl.addEventListener('click' , function(){
//     FastScroll(contend_scroll_id ,'buuut_prevv', 240 );
//   });
//   clndr.addEventListener('click',function(){
//     FastScroll(calendar_scroll_id ,'buuut_prevv', 70 );
//   });
//   endButt.addEventListener('click' , function(){
//     FastScroll(flag_parallax ,'buuut_prevv', 70 );
//   });
//   openIt.addEventListener('click', function(){
//     FastScroll(flag_openit ,'buuut_prevv',60 );
//   });

 

  let menu_click =document.querySelector('.menu-click');



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

// let games = document.querySelector('.games');
// let game_drop = document.querySelector('.game-drop-down');
// document.querySelector('.header').onclick = function GameDrop(e){
//   if(e.target.classList.contains('games')){
//     game_drop.classList.toggle('drop-game-block');
//   }
//   else{
//     game_drop.classList.remove('drop-game-block');
//   }
// };

let closePopapMini = document.querySelector('.close_butt');
let message_left = document.querySelector('.message-left');
closePopapMini.onclick = () =>{
  message_left.classList.remove('active');
}


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
range.value = 0.5;

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


//рулеточка

let button_roulette = document.querySelector('.button-roulette');
let roulette_earth = document.querySelector('.oveflow-hidden-roulette');
let main_route = document.querySelector('.mainRoutte');
let result_roulette_img = document.querySelector('.result-roulette-img');
let countButtonRoulette = 0;
let chance= document.querySelector('.takeTextImgСhance');

button_roulette.addEventListener('click' , function(){
  button_roulette.disabled=true;
  roulette_earth.style.transitionDuration = '3.5s'; 
  roulette_earth.classList.add('active');
  let img = main_route.src;
  setTimeout(()=> { 
    result_roulette_img.src=main_route.src;
    result_roulette_img.classList.add('active_data');
    setTimeout(()=> {  result_roulette_img.classList.remove('active_data');},1000);
    checkImg(img);
    roulette_earth.style.transitionDuration= '0s';
    roulette_earth.classList.remove('active');
    button_roulette.disabled=false;
    
    if(countButtonRoulette=== 0){
      button_roulette.innerHTML = 'Крутить еще!';
      countButtonRoulette = 1;
    }
    for(let el of img_routte_pict){
    el.src=random(arr);
    }
   } , 4000 );
})

//функция нахожд. случайного числа
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(arr) {
  let key = getRandomInt(0, arr.length - 1);
  return arr[key];
}
let arr = [
  'img/null.png','img/birthday-cake.png', 'img/candy.png','img/empty.png',
   'img/balloons.png', 'img/null.png', 'img/empty.png' , 'img/muffin.png',
    'img/null.png', 'img/money.png', 'img/money.png', 'img/null.png', 
    'img/empty.png', 'img/empty.png', 'img/empty.png'
];
let chanceNull = 0;
let chaceBirthdayCake= 0;
let chaceEmpty= 0;
let chaceMoney= 0;
let chaceBalloons= 0;
let chanceMuffin = 0;
let chanceCandy = 0;

for(let el of arr){
  switch(el){
    case 'img/null.png':
      chanceNull++;
      break;
    case 'img/birthday-cake.png':
      chaceBirthdayCake++;
      break;
    case 'img/empty.png':
      chaceEmpty++;
      break;
    case 'img/balloons.png':
      chaceBalloons++;
      break;
    case 'img/money.png':
      chaceMoney++;
      break;
      case 'img/muffin.png':
      chanceMuffin++;
    break;
      case 'img/candy.png':
        chanceCandy++;
    break;
  }
}


let img_routte_pict= document.querySelectorAll('.img-roulette');

for(let el of img_routte_pict){
  el.src=random(arr);
}
let takeTextImg = document.querySelector('.takeTextImg');

let mychanse=0;
function checkImg(img){
  if(/birthday-cake/.test(img)){
    takeTextImg.innerHTML= 'Ваш выигрыш - <b>Тортик</b>';
    mychanse = chaceBirthdayCake/arr.length;
    startConfetti()
  }
  if(/candy/.test(img)){
    takeTextImg.innerHTML= 'Ваш выигрыш - <b>Конфета</b>';
    mychanse = chanceCandy/arr.length;
  }
  if(/muffin/.test(img)){
    takeTextImg.innerHTML= 'Ваш выигрыш - <b>Маффин</b>';
    mychanse = chanceMuffin / arr.length;
  }
  if(/empty/.test(img)){
    takeTextImg.innerHTML='Ваш выигрыш - <b>Ничего :)))</b>';
    mychanse = chaceEmpty/arr.length;
  }
  if(/balloons/.test(img)){
    takeTextImg.innerHTML='Ваш выигрыш - <b>Шарики</b>';
    mychanse = chaceBalloons/arr.length;
    startConfetti()
  }
  if(/null/.test(img)){
    takeTextImg.innerHTML='Ваш выигрыш - <b>Ничаго :D</b>';
    mychanse = chanceNull/arr.length;
  }
  if(/money/.test(img)){
    takeTextImg.innerHTML='Ваш выигрыш - <b>Деньги O_o</b>';
    mychanse = chaceMoney/arr.length;
    startConfetti()
  }
  chance.innerHTML = 'Шанс <b>'+ Math.round(mychanse*100) + ' %</b>';
}
//roulette end

function startConfetti(){
  setTimeout(()=>{
     confetti.start();
  },500);
  setTimeout(()=>{
     confetti.stop();
  },2000);
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
   let voices = window.speechSynthesis.getVoices();
   utterance.rate = 1;
   //max-10 , min 0,1
   utterance.pitch = 0; 
   //max-2 ,min 0;
   console.log(voices);
  //  utterance.lang = "ru-RU";
   utterance.lang = "ru-RU";
  //  utterance.lang = voices[0];
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

//change




let mainBlockReact = document.querySelectorAll('.canChange');


  let buttons_menu_bottom = document.querySelectorAll('.button_menu_bottom');
  let open_text_menu_name = document.querySelector('.text-menu-name');


  for(let el of buttons_menu_bottom){
    el.addEventListener('mousemove', function(){
      open_text_menu_name.classList.add('active');
      open_text_menu_name.innerHTML = el.dataset.namebutt;
    });
    el.addEventListener('mouseout', function(){
      open_text_menu_name.classList.remove('active');
    })
    el.addEventListener('click',changeIcon);
  }


 function changeIcon(){
  let synth = window.speechSynthesis;
  synth.cancel(); 
   for(let el of buttons_menu_bottom){
     el.style.color = 'black';
   }
   if(!this.classList.contains('games-menu')){
    this.style.color = 'green';
   
   for(let canCh of mainBlockReact){
    canCh.style.display = 'none';
   }
   for(let canCh of mainBlockReact){
    if(canCh.dataset.ch == this.dataset.namebutt){
      canCh.style.display = 'block';
      player.pause();
      playPict.src="img/play.png";
      for(let el of blocks_video){
        el.children[0].pause();
      }

      if(canCh.dataset.ch == 'Calendar'){
        startConfetti()
        let utterance = new SpeechSynthesisUtterance('С днем рождения тебя!');
        utterance.rate = 0.9;
        utterance.lang = "ru-RU";
        speechSynthesis.speak(utterance);
      };
      if(canCh.dataset.ch == 'Music'){
        checkbox_button.checked = false;
        checkbox_button.click();
      };
    }
   }
  }
 }


 for(let canCh of mainBlockReact){
  if(canCh.dataset.ch == 'Home'){
    canCh.style.display = 'block';
    player.pause();
    playPict.src="img/play.png";
    firstHome.style.color = 'green';
  }else{
    canCh.style.display = 'none';
    
  }
 }
 


  let gamesButton = document.querySelector('.games-menu');
  let text_game_menu = document.querySelector('.text-game-menu');

  let flagA = 0;
  document.body.addEventListener('click',function(){
      if(flagA === 1 ){
        text_game_menu.classList.remove('active');
        flagA = 0;
    }
  })

  gamesButton.addEventListener('click', function(){
    text_game_menu.classList.toggle('active');
    if(text_game_menu.classList.contains('active')){
      setTimeout(()=>{flagA = 1;}, 100 );
    }
  });