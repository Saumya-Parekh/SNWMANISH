const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var backgroundimage,character,engine,world;
var snow = [];
var maxsnow = 15;
function preload() {
  backgroundimage = loadImage("snow1.jpg");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  character = new Character(300,200,150);

    for(var i = 0; i<maxsnow; i++) {
      snow.push(new Snowflake(random(0,800),random(0,100)));
    }
}

function draw() {
  background(backgroundimage);
  Engine.update(engine);
  
  for(var i = 0; i < maxsnow; i++) {
    print(snow[i]);
    snow[i].display();
    snow[i].update();   
}
character.display();  
drawSprites(); 
}