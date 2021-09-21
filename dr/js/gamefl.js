var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeNorth.src = "img/pipeNorth.png";
pipeSouth.src = "img/pipeSouth.png";

var mus= new Audio();
mus.src= "audio/p.mp3";



var gap=165;
var constant;

var bX=10;
var bY=150;
var gravity=1.5;
var score = 0;


document.addEventListener("click" , moveUp);


function moveUp(){
    bY -=60;
    bX +=1;
    mus.play();

}
document.addEventListener("keydown", moveUp1);

function moveUp1(){
    bY -=60;
    bX +=2;
    mus.play();

}


var pipe=[];

pipe[0]={
    x : cvs.width ,
    y : 0
};


function draw(){
    ctx.drawImage(bg,0,0);

    
    for(var i = 0; i < pipe.length; i++){
        
        constant = pipeNorth.height+gap;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
             
        pipe[i].x--;
        
        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            }); 
        }

        if (bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width
            && (bY <= pipe[i].y + pipeNorth.height || 
                bY+bird.height >= pipe[i].y + constant) || bY + bird.height >= cvs.height-fg.height
                
                ){
                location.reload();
                
            }

        if (pipe[i].x == 5)    {
            score++;
        }
    }
    

    ctx.drawImage(fg,0,cvs.height-fg.height);

    ctx.drawImage(bird,bX,bY);

    bY += gravity;

    ctx.fillStyle = "#0BDA51";
    ctx.font= '16px Montserrat';
    ctx.fillText("Очков набранно : "+score,10,cvs.height-90);

    requestAnimationFrame(draw);
}

draw();