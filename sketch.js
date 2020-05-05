const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let timer = 59;

var gameState = "onSling";

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(100,100);
  slingshot = new Sling(ball.body,{x:200, y:500});
  
  boxA1 = new Box(490,170);
  boxA2 = new Box(520,170);
  boxA3 = new Box(550,170);
  boxA4 = new Box(580,170);
  boxA5 = new Box(610,170);
  boxA6 = new Box(500,120);
  boxA7 = new Box(530,120);
  boxA8 = new Box(560,120);
  boxA9 = new Box(590,120);

  boxB1 = new Box(990,370);
  boxB2 = new Box(1020,370);
  boxB3 = new Box(1050,370);
  boxB4 = new Box(1080,370);
  boxB5 = new Box(1100,370);
  boxB6 = new Box(1000,320);
  boxB7 = new Box(1030,320);
  boxB8 = new Box(1060,320);
  boxB9 = new Box(1090,320);

  boxC1 = new Box(490,570);
  boxC2 = new Box(520,570);
  boxC3 = new Box(550,570);
  boxC4 = new Box(580,570);
  boxC5 = new Box(610,570);
  boxC6 = new Box(500,520);
  boxC7 = new Box(530,520);
  boxC8 = new Box(560,520);
  boxC9 = new Box(590,520);

  support1 = new Support(550,200);
  support2 = new Support(1050,400);
  support3 = new Support(550,600);
  ground = new Ground(600,height,1200,20);

  stacker1 = new Stacker(550,120,150);
  stacker2 = new Stacker(1040,350,150);
  stacker3 = new Stacker(550,520,150);

}

function draw() {
  background(20);  
  Engine.update(engine);

  fill("yellow");
  textSize(40);
  text("TIME LEFT:" + timer, 800,200);

  if(frameCount%30==0 && timer > 0){
    timer = timer - 1;
  }

  if(timer === 0){
    fill("yellow");
    textSize(70);
    text("GAME OVER!!", 450,350);
    World.remove(this.body);
  }

  fill(255);
  textSize(30);
  text("SLINGSHOT GAME", 70,140);
  textSize(20);
  text("Drag the ball with the mouse to shoot", 50, 170);
  text("Press the space key to get a new ball", 50, 200);

  fill("yellow");
  boxA1.display();  
  boxA3.display();
  boxA5.display();
  boxA7.display();
  boxA9.display();

  fill("red");
  boxA2.display();
  boxA4.display();
  boxA6.display();
  boxA8.display();

  fill("green");
  boxB1.display();
  boxB3.display();
  boxB5.display();
  boxB7.display();
  boxB9.display();

  fill("orange");
  boxB2.display();
  boxB4.display();
  boxB6.display();
  boxB8.display();

  fill("purple");
  boxC1.display();  
  boxC3.display();
  boxC5.display();
  boxC7.display();
  boxC9.display();

  fill("lightblue");
  boxC2.display();
  boxC4.display();
  boxC6.display();
  boxC8.display();

  ball.display();
  slingshot.display();
  ground.display();
  support1.display();
  support2.display();
  support3.display();
  stacker1.display();
  stacker2.display();
  stacker3.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(ball.body);
    Matter.Body.setPosition(ball.body, {x:200, y:350});
  }
}