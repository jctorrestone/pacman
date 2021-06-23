var pos = 0;
var posY = 0;
let pageWidth = window.innerWidth;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png'],
    ['PacMan5.png', 'PacMan6.png'],
    ['PacMan7.png', 'PacMan8.png']
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    if(direction!=5){
        img.src = pacArray[direction][focus];
    }
    if (direction == 1) {
        pos -= 20;
        img.style.left = pos + "px";
    } else if(direction == 0){
        pos += 20;
        img.style.left = pos + 'px';
    } else if (direction == 2){
        posY -= 20;
        img.style.top = posY + 'px';
    } else if (direction == 3){
        posY += 20;
        img.style.top = posY + 'px';
    }
 

}

function checkPageBounds(direction, imgWidth) {
    if(pos+imgWidth>pageWidth && direction!=1 && direction!=2 && direction!=3){
        direction = 5;
    } 
    else if(pos<0 && direction!=0 && direction!=2 && direction!=3){
        direction = 5;
    }
    else if(posY + imgWidth>window.innerHeight && direction!=2 && direction!=0 && direction!=1){
        direction = 5;
    }
    else if(posY<0 && direction!=3 && direction!=0 && direction!=1){
        direction = 5;
    }

    return direction;
}

function changeDirection(event){
    
    switch(event.keyCode){
        //Left
        case 37:
            direction = 1;
            break;
        //Up
        case 38:
            direction = 2;
            break;
        //Right
        case 39:
            direction = 0;
            break;
        //Down
        case 40:
            direction = 3;
    }
    console.log(event.keyCode);
}

function createLevel(){
    //TODO create a level with collision using builder pattern
    let wall = document.getElementById("wall");

    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = 150 + "px";
    div.style.top = 100 + "px";
    div.style.background = "blue"
    div.style.width = window.innerWidth - 300 + "px"
    div.style.height = 10 + "px";

    let div2 = document.createElement("div");
    div2.style.position = "absolute";
    div2.style.left = 150 + "px";
    div2.style.bottom = 100 + "px";
    div2.style.background = "blue"
    div2.style.width = window.innerWidth - 300 + "px"
    div2.style.height = 10 + "px";

    wall.appendChild(div);
    wall.appendChild(div2);
}

alert("Use arrows to move");
createLevel();
setInterval(Run,100);