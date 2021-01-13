
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;

	// let canvasMouse = Mouse.create(canvas.elt);
	// canvasMouse.pixelRatio = pixelDensity();

	// let options = {
	// 	mouse : canvasMouse
	// }
	// mConstraint = Constraint.create(engine , options);
	// World.add(world, mConstraint);

	//Create the Bodies Here.
	roof=new Ground(width/2,height/2-250,width/2,30);
  
	bob1=new Bob(width/2-200,height/2-250,52, 235, 229);
	bob2=new Bob(width/2-100,height/2-250,52, 235, 229);
	bob3=new Bob(width/2    ,height/2-250,52, 235, 229);
	bob4=new Bob(width/2+100,height/2-250,52, 235, 229);
	bob5=new Bob(width/2+200,height/2-250,52, 235, 229);
   
	rope1=new String(bob1.bob,{x : width/2-200 , y : height/2-250});
	rope2=new String(bob2.bob,{x : width/2-100 , y : height/2-250});
	rope3=new String(bob3.bob,{x : width/2     , y : height/2-250});
	rope4=new String(bob4.bob,{x : width/2+100 , y : height/2-250});
	rope5=new String(bob5.bob,{x : width/2+200 , y : height/2-250});
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display(); 
  
  drawSprites();
 
}

function mouseDragged() {
	 Matter.Body.setPosition(bob1.bob,{x:mouseX , y : mouseY});
}