const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,object
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();//emgine we created
  world=engine.world;//world we created
  var option={isStatic:true}
  object=Bodies.rectangle(200,100,50,70,option);//body we created
  World.add(world,object);//added body to world
  console.log(object)
  console.log(object.position.x)
  console.log(object.position.y)
}

function draw() {
  Engine.update(engine);
  background(0); 
  rect(object.position.x,object.position.y,50,70)
  drawSprites();
}