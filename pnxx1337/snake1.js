const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load images

const ground = new Image();
ground.src = "imgsn/ground.png";

const foodImg = new Image();
foodImg.src = "imgsn/food.png";

// load audio files


let mus = new Audio();


mus.src = "audiosn/11.mp3";


// create the snake

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

// create the food

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// create the score var

let score = 0;

//control the snake

let d;


document.addEventListener("keydown",direction);



function direction(event){
    mus.play();
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        
    }else if(key == 65 && d != "RIGHT"){
        d = "LEFT";
        
    }else if(key == 87 && d != "DOWN"){
        d = "UP";
        
    }else if(key == 68 && d != "LEFT"){
        d = "RIGHT";
        
    }else if(key == 83 && d != "UP"){
        d = "DOWN";
        
    }


}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// draw everything to the canvas

function draw(){
    
    ctx.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "#00FF00" : "#32CD32";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "	#000000";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= box ;
    if( d == "UP") snakeY -= box ;
    if( d == "RIGHT") snakeX += box ;
    if( d == "DOWN") snakeY += box ;
    
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        
        food = {
            x : Math.floor(Math.random()*17+1) * 32,
            y : Math.floor(Math.random()*15+3) *32
        }
        
        
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        clearInterval(game);
        location.reload();
        
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Courier";
    ctx.fillText(score,3*box,2*box);
}

// call draw function every 100 ms

let game = setInterval(draw,100);
