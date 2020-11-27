const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var bodies;

var ground,ball,line1;
var brick1,brick2,brick3,brick4,brick5,brick6;
var brick7,brick8,brick9,brick10,brick11,brick12;
var brick13,brick14,brick15,brick16,brick17,brick18;
var brick19,brick20,brick21,brick22,brick23,brick24;
var brick25,brick26,brick27,brick28,brick29,brick30;

function setup(){

  createCanvas(1000,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  brick1 = new Bricks(500,600);
  brick2 = new Bricks(560,600);
  brick3 = new Bricks(620,600);
  brick4 = new Bricks(680,600);
  brick5 = new Bricks(740,600);
  brick6 = new Bricks(800,600);

  brick7 = new Bricks(500,500);
  brick8 = new Bricks(560,500);
  brick9 = new Bricks(620,500);
  brick10 = new Bricks(680,500);
  brick11 = new Bricks(740,500);
  brick12 = new Bricks(800,500);

  brick13 = new Bricks(500,400);
  brick14 = new Bricks(560,400);
  brick15 = new Bricks(620,400);
  brick16 = new Bricks(680,400);
  brick17 = new Bricks(740,400);
  brick18 = new Bricks(800,400);

  brick19 = new Bricks(500,300);
  brick20 = new Bricks(560,300);
  brick21 = new Bricks(620,300);
  brick22 = new Bricks(680,300);
  brick23 = new Bricks(740,300);
  brick24 = new Bricks(800,300);

  brick25 = new Bricks(500,200);
  brick26 = new Bricks(560,200);
  brick27 = new Bricks(620,200);
  brick28 = new Bricks(680,200);
  brick29 = new Bricks(740,200);
  brick30 = new Bricks(800,200);

  ball = new Ball(320,400);
  line1 = new Chain(ball.body,{x:320,y:200});

}

function draw(){

  background("lavender");
  rectMode(CENTER);

  Engine.update(engine);

  ground.display();

  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();

  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();

  brick13.display();
  brick14.display();
  brick15.display();
  brick16.display();
  brick17.display();
  brick18.display();

  brick19.display();
  brick20.display();
  brick21.display();
  brick22.display();
  brick23.display();
  brick24.display();

  brick25.display();
  brick26.display();
  brick27.display();
  brick28.display();
  brick29.display();
  brick30.display();

  ball.display();
  line1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

