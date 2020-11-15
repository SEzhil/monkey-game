
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var score

function preload()
{
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() 
{
  createCanvas(600,600);
  //to Create monkey
  monkey=createSprite(80,500,20,20);
  //to add animation
  monkey.addAnimation("monkey",monkey_running);
  //to resize
  monkey.scale=0.2
  //to Create floor
  ground=createSprite(300,570,800,20);
  //to add velocity
  ground.velocityX=-5
  
  
  //to create group
  addenergy=new Group()
  obstaclegroup=new Group() 
}


function draw() 
{
  //to give background color
  background("white");
  //to reset the ground
  if (ground.x < 200)
  {
      ground.x = ground.width/2;
  }
  
  //to make the monkey jump
  if(keyDown("space") && monkey.y>490) 
  {
    monkey.velocityY = -18;    
  }  
  //to add gravity to the monkey
  monkey.velocityY = monkey.velocityY + 0.6
  //to make monkey collide the ground 
  monkey.collide(ground);
  //to create obstacles
  if(frameCount %230 === 0)
  {
  obstacle=createSprite(610,530,50,50);
  obstacle.velocityX=-5;
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale=0.16
  obstacle.lifetime=140 
  obstaclegroup.add(obstacle); 
  }
  
  //to create banana
   if(frameCount%120===0)
  {
  banana=createSprite(600,200,20,20)
  banana.addImage("q",bananaImage)
  banana.y=Math.round(random(200,415))
  banana.scale=0.09
  banana.velocityX=-5
  banana.lifetime=140
  addenergy.add(banana)
  }
  //to destroy banana when monkey touches it
   if(monkey.isTouching(addenergy)){
    addenergy.destroyEach();    
  }
  
  //to create survival time
  var score=0
  stroke("white")
  textSize(20)
  fill("black")
  score=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+score,180,50)
  
  //to display
  drawSprites();
}





