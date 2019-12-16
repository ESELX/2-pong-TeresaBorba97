//Variáveis tipo let nomeDaVar;
let posX, posY;
let velX, velY;
let padWidth, padHeight;
let diamBall;
let points;
let vel;
function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas
  posX = random(width);
  posY = 30;
  vel = 5;
  velX = vel;
  velY = vel;
  padWidth = 80;
  padHeight = 8;
  diamBall = 13;
  points=0;

}

  function draw() {
    //desenha
    background(230,247,255);
    textSize(30)
    text(points,130,130);
    posX = posX + velX;
    posY = posY + velY;
    fill(255,214,227)
    ellipse(posX,posY,diamBall);
    fill(255,214,227)
    rectMode(CENTER);
    rect(mouseX,height-10,padWidth,padHeight);

    //calcula
    if (posX-diamBall/2 <= 0 || posX+diamBall/2 >= width) {
      velX = velX*-1;
    }
    if (posY-diamBall/2 <= 0) {
      velY = velY*-1;
    }

    if (posY+diamBall/2 >= height){
      print("You Lose!");
      velX = 0;
      velY = 0;
      points = "You Lose!";
    }

    if (velX != 0 && posX >= mouseX-padWidth/2 && posX <= mouseX+padWidth/2 && posY+diamBall/2 >= height-10-padHeight/2){
      velY = -random(vel-3,vel);
      velX =random(-vel,vel);
      points++;
    }
  }
