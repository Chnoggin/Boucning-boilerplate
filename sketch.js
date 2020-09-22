var movingRect, fixedRect

function setup() {

  createCanvas(400,400);
  movingRect = createSprite(200, 100, 50, 80);
  movingRect.shapeColor = "blue";
  movingRect.velocityY = 5;
  

  fixedRect = createSprite(200,300,80,50);
  fixedRect.shapeColor = "green";
  //fixedRect.velocityY = 5;
}

function draw() {
  background(0);  


if (((movingRect.x - fixedRect.x < (movingRect.width  + fixedRect.width) / 2 ) && 
(fixedRect.x - movingRect.x < (movingRect.width  + fixedRect.width) / 2 ))){
movingRect.velocityX = movingRect.velocityX * -1;
//fixedRect.velocityX = fixedRect.velocityX * -1;
} 

if (((movingRect.y - fixedRect.y < (movingRect.height  + fixedRect.height) / 2 ) &&
(fixedRect.y - movingRect.y < (movingRect.height  + fixedRect.height) / 2 ))) {
movingRect.velocityY = movingRect.velocityY * -1;
//fixedRect.velocityY = fixedRect.velocityY * -1;
}






  drawSprites();


}