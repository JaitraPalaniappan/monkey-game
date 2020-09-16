
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score;
var ground;
var fruits;
var bananaImage;
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  monkey=createSprite(100,385,20,50)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2
  
  
 
  ground = createSprite(400,450,900,10); 
  ground.velocityX=-4; 
  ground.x=ground.width/2;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  
}


function draw() {
  background("white")

  if(keyDown("space")&& monkey.y >=355) {
    monkey.velocityY=-20
    
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
        
 fruits();
 obstacles()
  stroke("black")
  textSize=(20);
  fill("black")
  survivalTime=Math.ceil(frameCount%
  text("Survival Time:"+survivalTime ,100,50))
  
  drawSprites();
  if(ground.x<0) { 
    ground.x=ground.width/2; 
  }
  
}
function fruits(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,220,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
   bananaGroup.add(banana)
  
  }
}

function obstacles(){
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,450,40,10);
    obstacle.y = Math.round(random(400,400));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -3;
    obstacle.lifetime=200
    obstacleGroup.add(obstacle)
}
}
