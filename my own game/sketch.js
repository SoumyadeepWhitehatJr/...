const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var striker,board,boardImg;
var whitePic1,whitePic2,whitePic3,whitePic4,whitePic5,whitePic6,whitePic7,whitePic8,whitePic9;
var blackPic1,blackPic2,blackPic3,blackPic4,blackPic5,blackPic6,blackPic7,blackPic8,blackPic9;
var redPic1,redPicImg;
var gameState=0
var playerCount=0
var database;
var form;
var slingShot
function preload() {
   
    boardImg = loadImage("sprites/carrom board img.png");
    redPicImg= loadImage("sprites/bird.png")
}

function setup(){
    var canvas = createCanvas(1000,1000);
    database = firebase.database();
    engine = Engine.create();
   
    world = engine.world;

striker= new Striker(500,830)
  
slingShot=new Slingshot(striker.body,{x:490,y:830})

blackPic1=new BlackPieces(480,500)
blackPic2=new BlackPieces(440,500)
blackPic3=new BlackPieces(400,500)
blackPic4=new BlackPieces(520,500)
blackPic5=new BlackPieces(560,500)
blackPic6=new BlackPieces(600,500)
blackPic7=new BlackPieces(500,480)
blackPic8=new BlackPieces(500,540)
blackPic9=new BlackPieces(20,20)

whitePic1=new WhitePieces(460,500)
whitePic2=new WhitePieces(420,500)
whitePic3=new WhitePieces(540,500)
whitePic4=new WhitePieces(580,500)
whitePic5=new WhitePieces(500,520)
whitePic6=new WhitePieces(520,480)
whitePic7=new WhitePieces(520,520)
whitePic8=new WhitePieces(20,20)
whitePic9=new WhitePieces(20,20)

redPic1= new RedPieces(500,500)
//redPic1.addImage(redPicImg)
   // slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background(boardImg);
    database=firebase.database();
    Engine.update(engine);
  
if(playerCount===4){

game.update(1)

}
if(gameState===1){

clear()
game.play()


}
if(gameState===2){

game.end()

}




  

//if(gameState=2){



//}
    striker.display();

    blackPic1.display();
    blackPic2.display();
    blackPic3.display();
    blackPic9.display();
    blackPic4.display();
    blackPic5.display();
    blackPic6.display();
    blackPic7.display();
    blackPic8.display();

    whitePic1.display();
    whitePic2.display();
    whitePic3.display();
    whitePic9.display();
    whitePic4.display();
    whitePic5.display();
    whitePic6.display();
    whitePic7.display();
    whitePic8.display();
    
    redPic1.display();

    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
    strokeWeight(4);
    if(striker.isTouching(blackPic1) || striker.isTouching(whitePic1)){
Striker.velocityX=0
Striker.velocityY=0
    }
    
  }


function mouseReleased(){
    slingShot.fly();
}