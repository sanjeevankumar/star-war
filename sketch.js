var bg
var bgImg
var ship1
var shipimg
var vil1
var vil1img
var vil2
var vil2img
var vil3
var vil3img
var bullet
var bulletimg

function setup() {
  createCanvas(windowWidth,windowHeight);
 bgImg= loadImage("assets/background spacs.jpg")
shipimg = loadImage("assets/project starwar.png")
vil1img = loadImage("assets/vil1.png")
vil2img = loadImage("assets/pro.png")
vil3img = loadImage("assets/roc.png")
bulletimg= loadImage("assets/_Bullet_Concept_Space.jpg")
}
 function preload() {}


function draw() {
 bg = createSprite(900,400)
 bg.addImage(bgImg)


  ship1 = createSprite(700,550,100,100)
  
  vil1 = createSprite(700,50,100,100)
  vil2 = createSprite(400,50,100,100)
  vil3 = createSprite(950,50,100,100)
 ship1.addImage(shipimg)
  ship1.scale=0.1

 vil1.addImage(vil1img)
  vil1.scale=0.1

  vil2.addImage(vil2img)
  vil2.scale=0.3

  vil3.addImage(vil3img)
  vil3.scale=0.1

 

 
 if(keyWentDown( "space" ) ){
   bullet = createSprite(ship1.x,480,100,100)
   bullet.addImage(bulletimg)
   bullet.velocityY=20
   bullet.scale=0.2
 }
  


  
  drawSprites();

  
  
}
