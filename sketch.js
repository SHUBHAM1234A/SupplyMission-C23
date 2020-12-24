var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bgSpriteIMG,bgSprite;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3

function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
	bgSpriteIMG = loadImage("bg.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);
	
	bgSprite = createSprite(width/2,height/2,30,30);
	bgSprite.addImage(bgSpriteIMG);
	bgSprite.scale = 0.5;

	box1=createSprite(505, 645, 10,50);
	box1.shapeColor=color("red");

	box2=createSprite(width/2,height-35,200,10);
	box2.shapeColor=color("red");

	box3=createSprite(300, 645,10,50);
	box3.shapeColor=color("red");

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	box1 = Bodies.rectangle(505, 645, 10,50 , {isStatic:true} );
	World.add(world, box1);

	box2 = Bodies.rectangle(width/2,height-35,200,10 , {isStatic:true} );
	World.add(world, box2);

	box3 = Bodies.rectangle(300, 645,10,50 , {isStatic:true} );
	World.add(world, box3);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
 
  drawSprites();
 
  if(keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);
   }
  }