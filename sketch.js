const Engine=Matter.Engine;
const world=Matter.world;
const Bodies=Matter.Bodies;
var engine,World;
var bgimg;
var fairy,farryimg;
var star,starimg;
var sound;

function preload()
{
   //preload the images here
   fairyimg = loadAnimation("images/fairy.png","images/fairy1.png","images/fairy2.png");
   bgimg=loadImage("images/starnight.png");
   starimg=loadImage("images/star.png");
  sound=loadSound("sound/joyMusic.mp3");

}

function setup() {
  createCanvas(800, 750);
  fairy = createSprite(100,550,20,20);
  fairy.addAnimation("fairyflying",fairyimg);
  fairy.scale=0.2;

  star = createSprite(650,30);
  star.addImage(starimg);
  star.scale=0.2;

  engine = Engine.create();
  World = engine.World;

  starBody = Bodies.circle(650,30,5,{restitution:0.5,Istatic:true});
  world.add(world,starBody);

  Engine.run(engine);
}


function draw() {
  background(bgimg);
  sound.PLAY();
star.x= starBody.position.x
star.y= starBody.position.y


if(star.y>470 && starBody.position.y>470){
  Matter.Body.setstatic(starBody,true);
}


drawSprites();
}


function keyPressed(){

  if(keyCode===RIGHT_ARROW){
    fairy.x=fary.x+20;
  }
   if(keyCode===LEFT_ARROW){
     farryimg.x=farry.x-20;
   }
   if(keyCode===DOWN_ARROW){
     Matter.Body.setstatic(starbody,false);
   }
}
