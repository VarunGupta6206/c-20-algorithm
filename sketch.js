var Rectangle2
var rectangle1

function setup() {
  createCanvas(800,400);
 rectangle1= createSprite(400, 200, 50, 50);
Rectangle2=createSprite(100,100,50,80);



}

function draw() {
  background(255,255,255);  
  Rectangle2.shapeColor="green";
  rectangle1.shapeColor="green";
  Rectangle2.x=mouseX;
  Rectangle2.y=mouseY;
  
  var width1=rectangle1.width/2+Rectangle2.width/2;
  var height1=rectangle1.height/2+Rectangle2.height/2;
  if(Rectangle2.x-rectangle1.x<width1&&rectangle1.x-Rectangle2.x<width1 && 
    rectangle1.y-Rectangle2.y<height1&&Rectangle2.y-rectangle1.y<height1){
    Rectangle2.shapeColor="red";
    rectangle1.shapeColor="red";

  }
  else{
    Rectangle2.shapeColor="green";
    rectangle1.shapeColor="green";

  }
  
  drawSprites();
}