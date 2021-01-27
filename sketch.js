var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,200,50,50);
  car.shapeColor = "red";
  car.velocityX = 5;
  wall = createSprite(600,200,30,300);
  wall.shapeColor = "pink"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor ="red";
    fixedRect.shapeColor = "red"
  }
  else{
    movingRect.shapeColor ="green";
    fixedRect.shapeColor = "green"
  }
  
  bounceOff(car,wall);

  drawSprites();
}
