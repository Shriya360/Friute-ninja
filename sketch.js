var PLAY=1;
var END=0;
var gameState=1;
var knife,knife1,knife2;
var score=0;
var fruitGroup,enemyGroup;
var fruit1,fruit2,fruit3,fruit4,enemy1,enemy2;
var fruit,enemy;
var r ,r1;
var knifeSwooshSound;
var gameo;
var r2 ;
function preload(){
  knife1=loadImage("sword.png")
  knife2=loadImage("gameover.png")
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  enemy1=loadImage("alien1.png")
  enemy2=loadImage("alien2.png")
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3")
  gameo=loadSound("gameover.mp3")
}
function setup() {
   createCanvas(600,600);

  
  knife=createSprite(40,200,20,20);
  knife.addImage("knife",knife1);
  
  enemyGroup = createGroup();
  fruitGroup = createGroup();
}

function draw(){
  background("blue");
  
 if (gameState===PLAY){
  knife.x=mouseX
  knife.y=mouseY
    if (fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach();
    score=score+1
      knifeSwooshSound.play();
    }
    if (enemyGroup.isTouching(knife)){
    gameState=END
      gameo.play();
    }
 }
  if (gameState===END){
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityEach=0;
    enemyGroup.setVelocityEach=0;
    knife.x=300;
    knife.y=200;
    knife.addImage("knife",knife2)
    knife.scale = 2;
    
  }
  enemy();
  fruit();
  drawSprites();
  textSize(20);
  text("Score:"+score,300,50)
}

function fruit(){
  if (frameCount % 80===0){
   r2 = Math.round(random(1,2))
    switch (r2){
      case 1:  var fruit = createSprite(650,300,10,10)
    r=Math.round(random(1,4))
    switch (r){
      case 1 : fruit.addImage("fruit",fruit1)
      break;
      case 2 : fruit.addImage("fruit",fruit2)
      break;
      case 3 : fruit.addImage("fruit",fruit3)
      break;
      case 4 : fruit.addImage("fruit",fruit4)
      break;
    }
 
 
    fruit.scale=0.2
     fruit.velocityX=-2;
     fruit.y=Math.round(random(100,500))
    fruit.lifeTime=300;
    fruitGroup.add(fruit);
  if (score>3){
   fruit.velocityX=-4;
   }
        break;
        case 2: fruit =createSprite(-50,300,10,10)
    r=Math.round(random(1,4))
    switch (r){
      case 1 : fruit.addImage("fruit",fruit1)
      break;
      case 2 : fruit.addImage("fruit",fruit2)
      break;
      case 3 : fruit.addImage("fruit",fruit3)
      break;
      case 4 : fruit.addImage("fruit",fruit4)
      break;
    }
    
    fruit.scale=0.2
     fruit.velocityX=2;
     fruit.y=Math.round(random(100,500))
    fruit.lifeTime=300;
    fruitGroup.add(fruit);
    if (score>3){
    fruit.velocityX=4;
    }
    break;
    }
    
  }
   
}
function enemy(){
    if (frameCount % 200===0){
      var enemy=createSprite(650,300,10,10)
      r1=Math.round(random(1,2))
      switch (r1){
        case 1: enemy.addImage("enemy",enemy1)
        break;
        case 2 :enemy.addImage("enemy",enemy2)
        break;
          
      }
     enemy.scale=1.5
     enemy.velocityX=-4;
     enemy.y=Math.round(random(100,500))
     enemy.lifeTime=150;
     enemyGroup.add(enemy);
      if (score>8){
        enemy.velocityX=-8      }  
    } 
}

