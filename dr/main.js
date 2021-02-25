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

let time=document.querySelector(".parallax-text");
let butStart= document.getElementById("buuut_play");
let butStop= document.getElementById("buuut_stop");

class Clock {
   constructor({ template }) {
     this.template = template;
   }

   render() {
     let date = new Date();
 
     let hours = date.getHours();
     if (hours < 10) hours = '0' + hours;
 
     let mins = date.getMinutes();
     if (mins < 10) mins = '0' + mins;
 
     let secs = date.getSeconds();
     if (secs < 10) secs = '0' + secs;
 
     let output = this.template
       .replace('h', hours)
       .replace('m', mins)
       .replace('s', secs);

       time.innerHTML=output;
   }
 
   stop() {
     clearInterval(this.timer);
   }
 
   start() {
     this.render();
     this.timer = setInterval(() => this.render(), 1000);
   }
 }

 let clock = new Clock({template: 'h:m:s'});
 clock.start();


 butStart.disabled= true;
 butStart.onclick = function(){
    clock.start();
    butStart.disabled= true;
  };
  butStop.onclick = function(){
    clock.stop();
    butStart.disabled= false;
  };


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
}, 4900);


var svet2= setInterval( function svet2() {
  m3.classList.remove("mactext55");
}, 11000);

setTimeout( () => {
  clearInterval(svet1);
  clearInterval(svet2);
  m3.classList.remove("mactext55");
}, 15900);



let range= document.getElementById('range');
range.value = 0.8;


range.onchange = function(){
  let vol=document.getElementById('player');
  vol.volume=range.value;
}


if (document.documentElement.clientWidth < 992) {
 removeAtribl(mactextJS1);
 removeAtribl(mactextJS2);
 removeAtribl(mactextJS3);
 removeAtribl(mactextJS4);
 removeAtribl(mactextJS5);
 removeAtribl(mactextJS6);
 removeAtribl(mactextJS7);
 removeAtribl(mactextJS8);
 removeAtribl(mactextJS9);
 removeAtribl(mactextJS10);
}
function removeAtribl(el ){
el.removeAttribute('data-wow-delay');
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






