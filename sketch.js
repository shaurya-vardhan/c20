var movingRect,fixedRect;


function setup() {
  createCanvas(1200,800);
 fixedRect=createSprite(400, 200, 50, 50);
 movingRect=createSprite(700,200,50,50);
 fixedRect.velocityX=2;
 movingRect.velocityX=-2;
 movingRect.shapeColor="green";
 fixedRect.shapeColor="green";
}

function draw() {
  background(0); 
  // movingRect.x=mouseX; 
  // movingRect.y=mouseY;

// if(movingRect.x-fixedRect.x<=fixedRect.width/2 + movingRect.width/2 &&
//   fixedRect.x-movingRect.x<=fixedRect.width/2 + movingRect.width/2 &&
//   fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2 &&
//   movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2){
//   movingRect.shapeColor="red";
//  fixedRect.shapeColor="red";
// }
// else{
//   movingRect.shapeColor="green";
//  fixedRect.shapeColor="green"; 
// }
 if(movingRect.x-fixedRect.x<=fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x-movingRect.x<=fixedRect.width/2 + movingRect.width/2 ){
    movingRect.velocityX=-1*movingRect.velocityX;
    fixedRect.velocityX=-1*fixedRect.velocityX;
  }
  drawSprites();
}