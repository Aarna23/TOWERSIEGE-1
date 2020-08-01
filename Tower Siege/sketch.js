const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var box1;
var box2,box3,box4;
var box5,box6,box7,box8,box9;


function setup() {
  var canvas = createCanvas(800,400);
  
  

  ground1 = new ground(600,height,1200,20);
  platform = new ground(150, 305, 300, 170);

  //top
  box1 = new box(390,155,30,40);
  //middle
  box2 = new box(360,195,30,40);
  box3 = new box(390,195,30,40);
  box4 = new box(420,195,30,40);
  //bottom
  box5 = new box(330,235,30,40);
  box6 = new box(360,235,30,40);
  box7 = new box(390,235,30,40);
  box8 = new box(420,235,30,40);
  box9 = new box(450,235,30,40);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    platform.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    mouseDragged();
    mouseReleased();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}