var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	star.velocityX = starBody.velocity.x;
	star.velocityY = starBody.velocity.y;
	star.x = starBody.position.x;
	star.y = starBody.position.y;

}


function draw() {
  background(bgImg);

  fairyVoice.play();

  keyPressed();

  drawSprites();

}

function keyPressed() {

	if(keyDown("LEFT_ARROW")) {
		fairy.x = fairy.x -5;
	}

	if(keyDown("RIGHT_ARROW")) {
		fairy.x = fairy.x + 5;
	}

	if(keyDown("DOWN_ARROW")) {
		star.velocityY = star.velocityY + 5;
	}

	if(star.y>750) {
       star.y = 30;
	   star.velocityY = 0;
	}

	if(fairy.x == 450 && star.y == 485) {
        star.velocityY = 0;
	}
}
