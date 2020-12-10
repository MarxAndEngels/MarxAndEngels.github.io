let clicks=0;
const time= 32000;
const display= document.querySelector('#display');
const button= document.querySelector('#button');
const counter= document.querySelector('#counter');

button.onclick = start;

var mus= new Audio();
mus.src= "audiocl/осень.mp3";

function start() {
     const startTime= Date.now();

     display.textContent = time;

    display.textContent= time;
    button.onclick = () => counter.textContent = clicks++
    mus.play();


    const interval = setInterval( ()=>{
      const delta = Date.now() - startTime;
      display.textContent = time- delta;
    } ,100  );

    const timeout = setTimeout( ()=> {
        button.onclick = null;
        display.textContent = 'Game Over';
        location.reload();
        alert("Счет = "+ counter.textContent ) ;

        clearTimeout(timeout);
        clearInterval(interval);

    }, time);
}



