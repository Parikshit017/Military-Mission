var bullet, wall;
var thickness, speed, weight;
var damage;

function setup() {
  createCanvas(800,400);

  thickness = random(22,83)
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50, 200, 50, 30);
  bullet.shapeColor = "black";
  bullet.velocityX = speed;

  wall = createSprite(750, 200, 30, 200);
  wall.shapeColor = "gray";

  damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;
}

function draw() {
  background("Yellow"); 
  

  if(hasCollided() && damage > 10){
    bullet.velocityX = 0;
    wall.shapeColor = "red";
  }

  if(hasCollided() && damage < 10){
    bullet,velocityX = 0;
    wall.shapeColor = "green";;
  }

  drawSprites();
}

function hasCollided(){
  if(bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2
    && bullet.y - wall.y < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.heoght/2){
      return true
    } 
    else {
      return false
    }
}