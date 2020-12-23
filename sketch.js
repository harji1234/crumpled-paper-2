
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin,paperObject,groundObject
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);
	

	engine = Engine.create();
	world = engine.world;

	groundObject=new ground(700,670,1400,20)
	paperObject=new  Paper(200,450,20)
	bin=new dustbin(1200,650,200,100)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bin.display()
  groundObject.display()
  paperObject.display()
 
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.postition,{x:85,y:-85})
	}
}



