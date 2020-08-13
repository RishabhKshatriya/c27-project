
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

bob1 = new BobObject1 (300,400,30,30);
bob2 = new BobObject2 (310,400,30,30);
bob3 = new BobObject3 (320,400,30,30);
bob4 = new BobObject4 (330,400,30,30);
bob5 = new BobObject3 (340,400,30,30);
r = new Roof(300,280,150,30);
rope1 = new Rope(BobObject1.body,roofObject.body,bobDaimeter*2,0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  bob1.display();
 r.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
}



