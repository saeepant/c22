
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var saee_engine, world;



function setup() {
  createCanvas(400,400);

saee_engine = Engine.create();
saee_world = saee_engine.world;

var options = {
  isStatic : true
}

ob1 = Bodies.rectangle(200,380,400,20 , options);
World.add(saee_world , ob1);
console.log(ob1);
console.log(ob1.position.x);

var option1={
  restitution:1
}
ball=Bodies.circle(200,200,20,option1);
World.add(saee_world,ball);
}

function draw() {
  background("black"); 
  
  Engine.update(saee_engine);

  rectMode(CENTER);
  fill("brown");
  rect(ob1.position.x , ob1.position.y , 400, 20 );
  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x , ball.position.y , 20,20)
}