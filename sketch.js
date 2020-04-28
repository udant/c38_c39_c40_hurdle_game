var canvas,backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount;
var database;
var hurdle1,hurdle2,hurdle3,hurdle4;
var form,player,game,greeting;
var runners,runner1,runner2,runner3,runner4;
var runner_1,runner_2,runner_3,runner_4,hurdle;
function preload() {
  backgroundImage = loadImage("images/race_track.png");  
  runner_1 = loadImage("images/running_1_1.png");  
  runner_2 = loadImage("images/running_2_1.png");  
  runner_3 = loadImage("images/running_3_1.png");  
  runner_4 = loadImage("images/running_4_1.png");  
  hurdle = loadImage("images/hurdle_1.png");  
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-200);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  //background(backgroundImage);
  if (playerCount ===4) {
     game.update(1) ;
  }  
  if (gameState ===1) {
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
 /* if (player.distance > 3860) {
    //gameState = 2;
    console.log("you won");
    text("you won",displayWidth/2,displayHeight/2);

  }*/
  
  drawSprites();
}
