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