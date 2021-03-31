function openMenu() {
    document.querySelector(".sidebar").classList.toggle('active');
}


let popup = document.getElementById('mypopup'),
popupPoevlenie = document.getElementById('myBtn'),
popup_center = document.getElementById('popup_center'),
popupClose= document.querySelector('.close'),
popupPict= document.querySelector('.pict_popap'),
ButtPrev = document.getElementById('prev'),
ButtNext = document.getElementById('next'),
Pict2= document.querySelector('.pict_krug');

function openMenuAdaptive() {
  document.querySelector(".header__nav-row").classList.toggle('openTogl');
}



popupPoevlenie1 = document.getElementById('nasvanie');
popupPoevlenie2 = document.getElementById('nasvanie1');
popupPoevlenie3 = document.getElementById('nasvanie2');
popupPoevlenie4 = document.getElementById('nasvanie3');

var colPict = 0;
var imgPict = [];
imgPict.push('img/a3ddPbRAvIU.jpg');
imgPict.push('img/2696988810.jpg');
imgPict.push('img/unnamed.jpg');
imgPict.push('img/выы.jpg');
popupPict.src=imgPict[colPict];


let colPict1 = 0;
let imgPict1 = [];
imgPict1.push('img/NBDj.txt'); 
imgPict1.push('img/gift.gif'); 
imgPict1.push('img/11.png'); 
Pict2.src=imgPict1[colPict1];



function PoevleniePopapa1(){
    colPict=0;
    popupPict.src=imgPict[colPict];
    popup.style.display= "block";
}

function PoevleniePopapa2(){
    colPict=1;
    popupPict.src=imgPict[colPict];
    popup.style.display= "block";
}
function PoevleniePopapa3(){
    colPict=2;
    popupPict.src=imgPict[colPict];
    popup.style.display= "block";
}
function PoevleniePopapa4(){
    colPict=3;
    popupPict.src=imgPict[colPict];
    popup.style.display= "block";
}


function stopAnim(){
  let stop = document.querySelector('.kartinka');
    if (!stop.getAttribute('stop')) {
      stop.setAttribute("stop" , "2");
      stop.style.animationPlayState = 'paused';
     }
     else{ 
         setTimeout( () => {stop.removeAttribute("stop");
         stop.style.animationPlayState ='running';
        } , 100);
     }
}


function PoevleniePictPrev(){  
  colPict1--;
    if(colPict1 === -1){
      colPict1=imgPict1.length-1;
   }
   Pict2.src=imgPict1[colPict1];
  document.querySelector('.pict_krug').classList.add('pict_krug_Animation');
  setTimeout( ()=> document.querySelector('.pict_krug').classList.remove('pict_krug_Animation') ,1000 );
}
function PoevleniePictNext(){  
  colPict1++;
    if(colPict1 === (imgPict1.length)){
      colPict1=0;
   }
   Pict2.src=imgPict1[colPict1];
  document.querySelector('.pict_krug').classList.add('pict_krug_Animation');
  setTimeout( ()=> document.querySelector('.pict_krug').classList.remove('pict_krug_Animation') ,1000 );
}


// popupPoevlenie.onclick = function(){
//     popup.style.display= "block";
// }
popupClose.onclick = function(){
    popup.style.display= "none";
}

popup.addEventListener("click", function(event) {
    e = event || window.event
    if (e.target == popup_center) {
        popup.style.display= "none";
    }
  });
  popup.addEventListener("click", function(event) {
    e = event || window.event
    if (e.target == popup) {
        popup.style.display= "none";
    }
  });
  
popupPoevlenie1.addEventListener('click',PoevleniePopapa1);
popupPoevlenie2.addEventListener('click',PoevleniePopapa2);
popupPoevlenie3.addEventListener('click',PoevleniePopapa3);
popupPoevlenie4.addEventListener('click',PoevleniePopapa4);
ButtPrev.addEventListener('click', PoevleniePictPrev);
ButtNext.addEventListener('click', PoevleniePictNext);



// class Clock {
//    constructor({ template }) {
//      this.template = template;
//    }

//    render() {
//      let date = new Date();
 
//      let hours = date.getHours();
//      if (hours < 10) hours = '0' + hours;
 
//      let mins = date.getMinutes();
//      if (mins < 10) mins = '0' + mins;
 
//      let secs = date.getSeconds();
//      if (secs < 10) secs = '0' + secs;
 
//      let output = this.template
//        .replace('h', hours)
//        .replace('m', mins)
//        .replace('s', secs);

//        time.innerHTML=output;
//    }
 
//    stop() {
//      clearInterval(this.timer);
//    }
 
//    start() {
//      this.render();
//      this.timer = setInterval(() => this.render(), 1000);
//    }
//  }

//  let clock = new Clock({template: 'h:m:s'});
//  clock.start();

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



let range= document.getElementById('range');
range.value = 0.75;


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
  player.src= 'audio/' + playlist[colMus] + '.mp3';
  player.play();
  NameMusic.innerHTML='Song name : ' + playlist[colMus];
  
}
function PoevlenieMusNext(){
  colMus++;
  if(colMus === playlist.length){
    colMus=0;
  }
  
  player.src= 'audio/' + playlist[colMus] + '.mp3';
  player.play();
  NameMusic.innerHTML='Song name : ' + playlist[colMus];

}

prevMus.addEventListener('click', PoevlenieMusPrev);
nextMus.addEventListener('click', PoevlenieMusNext);


let NameMusic = document.querySelector('.NameMusic');
NameMusic.innerHTML='Song name : ' + playlist[colMus];




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
