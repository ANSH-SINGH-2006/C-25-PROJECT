var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
  d=loadImage("sprites/dustbingreen.png");
 // b=loadImage("sprites/paper.png");
}


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	
	ball=new BallClass(200,120,70);
  ground=new Ground(600,350,1200,20);
  
  
    
  
    dustbin1=new Dustbin(850,330,200,20)
    
    dustbin2= new Dustbin(750,270,20,130);
    dustbin3=new Dustbin(950,270,20,130);
    
    

	Engine.run(engine);
  
}




function draw() {
  rectMode(CENTER);
  
  background("white");
  
  ground.display();
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  image(d,730,190,240,150);
  //image(b,ball.x,ball.y,100,100);
  
  dustbin2.debug=true;
  dustbin3.debug=true;
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:850,y:-850})
}
}


