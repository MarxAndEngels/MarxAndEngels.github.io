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
Pict2= document.querySelector('.pict_krug'),

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


var colPict1 = 0;
var imgPict1 = [];
imgPict1.push('img/NBDj.txt');
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
function PoevleniePictPrev(){
    colPict1=0;
    Pict2.src=imgPict1[colPict1];
}
function PoevleniePictNext(){
    colPict1=1;
    Pict2.src=imgPict1[colPict1];
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
ButtPrev.addEventListener('click',PoevleniePictPrev);
ButtNext.addEventListener('click',PoevleniePictNext);

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

function inter(text,ele, speed){
  this.text = text;
  this.ele = document.querySelector(ele);

  let txt = this.text.split("");
    var interval = setInterval(function(){
      if(!txt[0]){
        return clearInterval(interval);
     };
      this.ele.innerHTML += txt.shift();
   }, speed != undefined ? speed : 80 );
}

var str = document.getElementById('mactext').innerHTML.toString();
var i=0;
document.getElementById('mactext').innerHTML = "";
setTimeout(function () {
    var se = setInterval(function() {
        document.getElementById('mactext').innerHTML = str.slice(0, i) + "|";
        if (i == str.length) {
            clearInterval(se);
        }
        i++;
        console.log(i);
    }, 60);
});







