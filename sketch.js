var ninja,robot,zombie,bg,ninjaA,ninjaR,ninjaJ,robot1,zombie1,gameOver,restart,gameOver1,restart1,bg1,zombieGroup
var ground
function preload(){
  bg=loadImage("ASSETS/dungeon background.jpg")
  ninjaA=loadAnimation("ASSETS/ninja/Attack__000.png","ASSETS/ninja/Attack__001.png","ASSETS/ninja/Attack__002.png","ASSETS/ninja/Attack__003.png","ASSETS/ninja/Attack__004.png","ASSETS/ninja/Attack__005.png","ASSETS/ninja/Attack__006.png","ASSETS/ninja/Attack__007.png","ASSETS/ninja/Attack__008.png","ASSETS/ninja/Attack__009.png")
  zombieA=loadAnimation("ASSETS/zombies/female/Attack (1).png","ASSETS/zombies/female/Attack (2).png","ASSETS/zombies/female/Attack (3).png","ASSETS/zombies/female/Attack (4).png","ASSETS/zombies/female/Attack (5).png","ASSETS/zombies/female/Attack (6).png","ASSETS/zombies/female/Attack (7).png","ASSETS/zombies/female/Attack (8).png")
  ninjaJ=loadAnimation("ASSETS/ninja/Jump__000.png","ASSETS/ninja/Jump__001.png","ASSETS/ninja/Jump__002.png","ASSETS/ninja/Jump__003.png","ASSETS/ninja/Jump__004.png","ASSETS/ninja/Jump__005.png","ASSETS/ninja/Jump__006.png","ASSETS/ninja/Jump__007.png","ASSETS/ninja/Jump__008.png","ASSETS/ninja/Jump__009.png") 
  ninjaR=loadAnimation("ASSETS/ninja/Run__000.png","ASSETS/ninja/Run__001.png","ASSETS/ninja/Run__002.png","ASSETS/ninja/Run__003.png","ASSETS/ninja/Run__004.png","ASSETS/ninja/Run__005.png","ASSETS/ninja/Run__006.png","ASSETS/ninja/Run__007.png","ASSETS/ninja/Run__008.png","ASSETS/ninja/Run__009.png")
  zombieW=loadAnimation("ASSETS/zombies/female/Walk (1).png","ASSETS/zombies/female/Walk (2).png","ASSETS/zombies/female/Walk (3).png","ASSETS/zombies/female/Walk (4).png","ASSETS/zombies/female/Walk (5).png","ASSETS/zombies/female/Walk (6).png","ASSETS/zombies/female/Walk (7).png","ASSETS/zombies/female/Walk (8).png","ASSETS/zombies/female/Walk (9).png","ASSETS/zombies/female/Walk (10).png")
}
function setup() {
createCanvas(displayWidth,displayHeight)
bg1=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
bg1.addImage("bg",bg)
bg1.scale=2.5
ninja=createSprite(40,displayHeight-35,100,100)
ninja.scale=0.2;
ninja.addAnimation("ninjaRun",ninjaR)
ninja.addAnimation("ninjaAttack",ninjaA)
ninja.addAnimation("ninjaJump",ninjaJ)
ground=createSprite(displayWidth/2,displayHeight-30,displayWidth,20)
zombieGroup=new Group ()
}

function draw() {
 background("grey");
 if(bg1.x<0){
  bg1.x=bg1.width/22
 }
 bg1.velocityX=-5                           
 if(keyWentDown("W")){
ninja.velocityY=-3;
ninja.changeAnimation("ninjaJump",ninjaJ)
 }
 if(keyWentUp("W")){
  ninja.velocityY=-16;
  ninja.changeAnimation("ninjaRun",ninjaR)
   }
 if(keyWentDown("SPACE")){
  ninja.changeAnimation( "ninjaAttack",ninjaA)
   }
   if(keyWentUp("SPACE")){
    ninja.changeAnimation( "ninjaRun",ninjaR)
     }
  if(zombieGroup.isTouching(ninja)){
    text("GAME OVER",displayWidth/2,displayHeight/2)
  }
 // zombieGroup.collide(ground)
 ninja.velocityY+=0.8;
 //createEdgeSprites();
 ninja.collide(ground)
  spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  if(World.frameCount % 120 === 0) {
    var obstacle = createSprite(displayWidth,displayHeight-60,10,40);
    obstacle.velocityX = -6;
    obstacle.addAnimation("zombieAttack",zombieA)
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = displayWidth;
   zombieGroup.add(obstacle);
   
    
  }
}




  