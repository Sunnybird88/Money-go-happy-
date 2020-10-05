
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(100,200,20,20);
  monkey.addAnimation("running", monkey_running );
  monkey.scale = 0.1;
  
  ground = createSprite(200,350,800,100);
  ground.shapeColor = "green";
  
  bananaGroup = new Group();
  
  obstacleGroup = new Group();
  
  

  
}


function draw() {
background("Aqua");
  
  if(keyDown("space")&& monkey.y === 269.3){
monkey.velocityY = -11;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  ground.velocityX = -6;
  
  if(ground.x < 0){
ground.x = ground.width / 2;

    
  }
  
  food();
  obstacles();
  
  if(monkey.isTouching(bananaGroup)){
bananaGroup.destroyEach();
  }
  
  monkey.collide(obstacleGroup);
  
  
  
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  if(monkey.x < 0){
    textSize(45);
    text("Game Over",90,150);
  bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
  }
  else{
    textSize(20);
  text("Survival Time: "+ survivalTime, 100,50); 
  }
 
  
  console.log(monkey.y);
  
         
 drawSprites(); 
}

function food(){
if(frameCount % 90 === 0){
banana = createSprite(401,200,20,20);
  banana.y = Math.round(random(180,280)); 
  banana.velocityX = -5;
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.lifetime = 500;
  bananaGroup.add(banana);
}
}

function obstacles(){
  if(frameCount % 70 === 0){
obstacle = createSprite(401,285,20,20);
    obstacle.velocityX = -5;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
    
    
  }
}


