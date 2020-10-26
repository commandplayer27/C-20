var fixedRect, movingRect; //global variables

function setup() {
  createCanvas(800,800);
  
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "red";

  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "red";
}

function draw() {
  background("black");  
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  if (movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){

    movingRect.shapeColor="blue";
   fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  console.log(movingRect.x-fixedRect.x)
  console.log(movingRect.y-fixedRect.y)
  console.log(movingRect.width/2 + fixedRect.width/2);
 
  drawSprites();
  
}