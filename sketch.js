const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var tree, treeImg

function preload(){
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1300, 700);
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(300,600);
	boy.addImage(boyImg);
	boy.scale=0.09;
	tree = createSprite(950,440);
	tree.addImage(treeImg);
	tree.scale=0.35;

	//Create the Bodies Here.
	
	mango1 = new Mango(950,260);
	mango2 = new Mango(800,360);
	mango3 = new Mango(900,300);
	mango4 = new Mango(1050,350);
	mango5 = new Mango(950,350);
	mango6 = new Mango(900,400);

	stone = new Stone(250,550);
	chain = new Chain(stone.body,{x:250,y:550});

	ground = new Ground(650,650,1300,20);

	Engine.run(engine);
  
}


function draw() {
  background(110,210,255);
  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone.display();
  chain.display();

  ground.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
	chain.fly();
  }

  function detectCollision(stone,mango){
	  mangoBodyPosition = mango.body.position;
	  stoneBodyPosition = stone.body.position;

	  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	  if(distance <= mango.r + stone.r){
		  Matter.Body.setStatic(mango.body, false);
	  }
  }



