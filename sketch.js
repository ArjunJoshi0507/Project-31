const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine=Engine.create()
  world=engine.world

  ground=new Ground(width/2,height,width,20);
  
  for(var i=0 ; i<width; i=i+80){
    divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
  }
  for(var i=50 ; i<width ; i+=80){
    plinkos.push(new Plinko(i,75))
  }

  for(var i=50 ; i<width ; i+=80){
    plinkos.push(new Plinko(i,175))
  }

  for(var i=50 ; i<width ; i+=80){
    plinkos.push(new Plinko(i,275))
  }

  for(var i=50 ; i<width ; i+=80){
    plinkos.push(new Plinko(i,375))
  }

}
function draw() {
  background(0);  
  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(100,300),10,6))
  }
  for(var i=0 ; i<particles.length ; i++){
    particles[i].display()
  }
  
  ground.display()
  for(var i=0 ; i<divisions.length ; i++){
    divisions[i].display()
  }
  for(var i=0 ; i<plinkos.length ; i++){
    plinkos[i].display()
  }
}