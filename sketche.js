/*var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudsGroup,cloudImage ;
var cactusGroup,cactus1,cactus2,cactus3,cactus4,cactus5,cactus6,cactus;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  cactus1 = loadImage("obstacle1.png");
  cactus2 = loadImage("obstacle2.png");
  cactus3 = loadImage("obstacle3.png");
  cactus4 = loadImage("obstacle4.png");
  cactus5 = loadImage("obstacle5.png");
  cactus6 = loadImage("obstacle6.png");
}
function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  
  cactusGroup = new Group();
}

function draw() {
  background(180);
  var score = score + Math.round(getFrameRate()/60);
  text("Score: " + score,500,50)
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnClouds();
  drawSprites();
}                    


function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloudsGroup.add(cloud);
  }
  
}
function spawnCactus() {
  if(frameCount % 60 === 0) {
     cactus = createSprite(600,165,10,40);
    cactus.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1: cactus.addImage(obstacle1);     
      break;
      case 2: cactus.addImage(obstacle2);     
      break;
      case 3: cactus.addImage(obstacle3);     
      break;
      case 4: cactus.addImage(obstacle4);     
      break;  
      case 5: cactus.addImage(obstacle5);     
      break;  
      case 6: cactus.addImage(obstacle6);     
      break;  
      default: break;   
    }
    //assign scale and lifetime to the obstacle           
    cactus.scale = 0.5;
   cactus.lifetime = 100;
   cactusGroup.add(cactus); 
  }
}*/