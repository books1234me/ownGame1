var food
var bananaImage
var player
function preload(){
  bananaImage = loadImage("bananaSprite.png")  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  food = new Group()
  player = new Player()
}

function draw() {
  background(255,255,255);
  if(frameCount%20 === 0){
    spawnFood();
  } 
  if(food !== undefined){
    /*for(var i in food){
      if(food.get(i).isTouching(player)){
        score = score+1
        food.get(i).destroy();
      }
    }*/
  }
  drawSprites();
  text("score: "+player.score,100,100)
}
function spawnFood(){
  var banana = createSprite(400,200,10,10)
  banana.addImage("banana",bananaImage)
  banana.scale = 0.5
  banana.x = random(0,windowWidth);
  banana.y = random(0,windowHeight);
  banana.lifetime = 100
  food.add(banana)
}
 function keyPressed(){
  if(keyCode === UP_ARROW){
    player.body.y = player.body.y-10
  }
  if(keyCode === DOWN_ARROW){
    player.body.y = player.body.y+10
  }
  if(keyCode === RIGHT_ARROW){
    player.body.x = player.body.x+10
  }
  if(keyCode === LEFT_ARROW){
    player.body.x = player.body.x-10
  }
}