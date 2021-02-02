var bck, bckImage;
var tom, tomAnimation, tomRunAnimation, tomcuteAnimation;
var jerry, jerryAnimation, jerryTeasingAnimation, jerryStopTeasingAnimation;

function preload() {
    //load the images here
    bckImage = loadImage("images/garden.png");

    tomAnimation = loadAnimation("images/cat1.png");
    jerryAnimation = loadAnimation("images/mouse1.png");

    tomRunAnimation = loadAnimation("images/cat2.png","images/cat3.png");
    jerryTeasingAnimation = loadAnimation("images/mouse2.png","images/mouse3.png");

    tomcuteAnimation = loadAnimation("images/cat4.png");
    jerryStopTeasingAnimation = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,650);
    tom.addAnimation("tom sitting",tomAnimation);
    tom.addAnimation("tom running",tomRunAnimation);
    tom.addAnimation("tom cute",tomcuteAnimation);
    tom.scale=0.1;

    jerry = createSprite(400,650);
    jerry.addAnimation("jerry sitting",jerryAnimation);
    jerry.addAnimation("jerry teasing",jerryTeasingAnimation);
    jerry.addAnimation("jerry stop teasing",jerryStopTeasingAnimation);
    jerry.scale=0.1;

}

function draw() {

    background(bckImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < tom.width/2 - jerry.width/2){
        tom.changeAnimation("tom cute",tomcuteAnimation);
        jerry.changeAnimation("jerry stop teasing",jerryStopTeasingAnimation);
        tom.velocityX=0;
        tom.x=450;
    }

    drawSprites();
}


function keyPressed(){


  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX=-5;
      tom.changeAnimation("tom running",tomRunAnimation);
      jerry.changeAnimation("jerry teasing",jerryTeasingAnimation);

  }


}
