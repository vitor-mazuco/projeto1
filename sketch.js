var ship,sea;
//variaveis
var seaImage,shipImage;
function preload(){
  shipImage = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");

  

 seaImage = loadImage("sea.png");
}


function setup(){
  createCanvas(400,400);
  //sprite sea
  sea = createSprite(400,200);
sea.addImag(seaImage);
sea.scale = 0.3;
//sprite ship
ship = createSprite(130,200,30,30);
ship.addAnimation("ship",shipImage );
ship.scale = 0.25;
}

function draw() {
  background("blue");
  
    drawSprites();

if(sea.x < 0){
  sea.x.width/2;
}
 
}
