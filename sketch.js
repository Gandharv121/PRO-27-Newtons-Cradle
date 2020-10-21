
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	//chain = this.chain


	Engine.run(engine);


	ball = new Bob (500,410,30,30)
	ball2 = new Bob (570,410,30,30)
	ball3 = new Bob (640,410,30,30)
	ball4 = new Bob (430,410,30,30)
	ball5 = new Bob (360,410,30,30)

	top1 = new Roof (500,200,350,30)

	var options = {
	bodyA: top1.body,
	bodyB: ball.body,
	stiffness: 0.04,
	length: 10,

	}

	var chain = Constraint.create(options);
  World.add(world, chain)
}


function draw() {
  rectMode(CENTER);
  background("white");


  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  top1.display();

  line(ball.body.position.x,ball.body.position.y,top1.body.position.x,top1.body.position.y)
  line(ball2.body.position.x,ball2.body.position.y,top1.body.position.x,top1.body.position.y)
  line(ball3.body.position.x,ball3.body.position.y,top1.body.position.x,top1.body.position.y)
  line(ball4.body.position.x,ball4.body.position.y,top1.body.position.x,top1.body.position.y)
  line(ball5.body.position.x,ball5.body.position.y,top1.body.position.x,top1.body.position.y)
 
}



