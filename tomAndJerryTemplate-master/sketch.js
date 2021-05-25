var cat,mouse,catimg1,mouseimg,catimg2,catimg3,mouseimg2,mouseimg3,garden,gardenimg
function preload() {
    catimg1=loadAnimation("images/cat1.png")
    catimg2=loadAnimation("images/cat2.png","images/cat3.png")
    catimg3=loadAnimation("images/cat4.png")
    mouseimg=loadAnimation("images/mouse1.png")
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseimg3=loadAnimation("images/mouse3.png")
    gardenimg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(500,400,1000,800)
garden.addImage("gardenimg",gardenimg)
cat=createSprite(700,620)

cat.addAnimation("sleep",catimg1)
cat.addAnimation("walk",catimg2)
cat.addAnimation("stop",catimg3)
cat.scale=0.2
mouse=createSprite(100,600)
mouse.addAnimation("eating",mouseimg)
mouse.addAnimation("teasing",mouseimg2)
mouse.addAnimation("teasing2",mouseimg3)
mouse.scale=0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.changeAnimation("stop",catimg2)
        cat.velocityX=0
    }
keyPressed()
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
cat.changeAnimation("walk",catimg2)
cat.velocityX=-3
}
if(keyDown(RIGHT_ARROW)){
    mouse.changeAnimation("teasing",mouseimg2)

}
}
