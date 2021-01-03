
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var divisions=[];
var plinko=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine=Engine.create()
  world=engine.world;
  ground=new Ground(480,800,1000,50)
  for(var k=0; k <=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }

  for (var j=40; j<=width; j=j+50){
    plinko.push (new Plinko(j,75));
  }
  for (var j=15; j<=width-10; j=j+50){
    plinko.push (new Plinko(j,175));
  }
 
 
}

function draw() {
  
 
  background(0);  
  for(var i = 0; i < divisions.length; i++) { 
    divisions[i].display()}
  drawSprites();
  
  ground.display()
}