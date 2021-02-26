//Create all the variables here
var gameState=0;
var score=0;
var playbutton,playbuttonImg,instructions,instructionsImg;
var backbutton,backbuttonImg;
var backgroundImg,background1,background1Img;
var backgroundImg2,backgroundImg3; 

var lion,lionImg,fire,fireImg;
var tiger,tigerImg,stair,stairImg;
var coin,coinImg,invisibleGround,fireGroup,coinGroup;
var grass,grassImg,tree,treeImg,tree2Img,tree2;
var stone,stoneImg,deer,deerImg;
var hunter,hunterImg,cloud,cloudImg;
var sun,sunImg;
var background2,background2Img;
    
var fish,fishImg1,fishImg2,fishImg3,fishImg4;
var shark,sharkGroup;
var sand,sandImg,starfish,starfishImg;
var octopus,octopusImg,turtle,turtleImg,bush,bushImg;
var fishfood,fishfoodImg,instruction2,instructionImg;
var fishfoodGroup,fish3,fish3Img,obststacle1Img;
var level2button,level2buttonImg;
var level3button,level3buttonImg;

var sky,skyImg;
var sky2,sky2Img;
var eagle,eagleImg,sparrow,sparrowImg;
var aeroplane,aeroplaneImg;
var pigeon,pigeonImg,arrow,arrowImg;
var crow,crowImg;
var gamecompletedImg;   
  
var scoreSound,decreaseSound;


function preload(){
//Load all the images here
backgroundImg=loadImage("backgroundS.jpg");
background1Img=loadImage("background1.jpeg");
background2Img=loadImage("sky.jpg");
background3Img=loadImage("jungle-1.jpg");
backgroundImg3=loadImage("start2.jpg");

playbuttonImg=loadImage("play.png");
instructionsImg=loadImage("instructions.png");
instructionImg=loadImage("il1.png");
instructionl1Img=loadImage("il1.jpg");
instructionl2Img=loadImage("il2.jpg"); instructionl3Img=loadImage("il3.jpg");

fishImg1=loadImage("Fish.png");
fishImg2=loadImage("Fish2.png");
fishImg3=loadImage("Fish3.png");
fishImg4=loadImage("Fish4.png");
lionImg=loadImage("lion king2.png");
grassImg=loadImage("grass.png");
treeImg=loadImage("tree.png");
tree2Img=loadImage("tree2.png");
deerImg=loadImage("deer.png");
    
skyImg=loadImage("sky2.jpg");
sky2Img=loadImage("sky.jpg");
sparrowImg=loadImage("sparrow.png");
hunterImg=loadImage("hunter.png");
aeroplaneImg=loadImage("aeroplane.png");
pigeonImg=loadImage("pigeon.png");
arrowImg=loadImage("arrow.png");
crowImg=loadImage("crow.png");
eaglefoodImg=loadImage("eaglefood.png");

obstacle1Img=loadImage("shark-1.png");
sandImg=loadImage("sand.png");
starfishImg=loadImage("starfish.png");
fireImg=loadImage("fire.png");
stairImg=loadImage("stair.png");
coinImg=loadImage("coin.png");
stoneImg=loadImage("stone.png");
cloudImg=loadImage("cloud.png");
sunImg=loadImage("sun.png"); 
eagleImg=loadImage("eagle1.png"); 
    
octopusImg=loadImage("octopus.png");
turtleImg=loadImage("turtle.png")
bushImg=loadImage("bush.png");
fish2Img=loadImage("FishImg.png");
fishfoodImg=loadImage("fishfood.png");
backbuttonImg=loadImage("backbutton.png");
fish3Img=loadImage("fish.png");
backgroundImg2=loadImage("startl2.jpg");
level2buttonImg=loadImage("level 2.png");
level3buttonImg=loadImage("level3.png");
gamecompletedImg=loadImage("completed.jpg");

  
scoreSound=loadSound("score.ogg");
decreaseSound=loadSound("decrease.wav");
gamestart=loadSound("gameStart.mp3");
gameover=loadSound("gameover.wav");
jungleSound=loadSound("sparrow.mp3");
                      }


    
function setup(){
createCanvas(400,400);

//Create the sprite for playbutton here
  playbutton=createSprite(70,30,20,20);
  playbutton.addImage(playbuttonImg);
  playbutton.scale=0.3;


//Create the sprite for instruction here
  instructions=createSprite(330,30,20,20);
  instructions.addImage(instructionsImg);
  instructions.scale=0.3;


//Create the sprite for level2button here
  level2button=createSprite(180,50,20,20);
  level2button.addImage(level2buttonImg);
  level2button.visible=false;
  level2button.scale=0.1;
      
    
//Create the sprite for leve3button here
  level3button=createSprite(180,30,20,20);
  level3button.addImage(level3buttonImg);
  level3button.visible=false;
  level3button.scale=0.5;


//Create the sprite for background here
  background1=createSprite(200,200,400,400);
  background1.addImage(background1Img);
  background1.visible=false;
  background1.scale=3;
  background1.velocityX=-1;

    
//Create the sprite for background2 here
  background2=createSprite(200,200,400,400);
  background2.addImage(background2Img);
  background2.visible=false;
  background2.scale=1.2;
  background2.velocityX=-1;

    
//Create the sprite for background3 here
  background3=createSprite(200,200,400,400);
  background3.addImage(background3Img);
  background3.visible=false;
  background3.scale=1.2;
  background3.velocityX=-1;

      
//Create the sprite for background4 here
  background4=createSprite(200,200,400,400);
  background4.addImage(background2Img);
  background4.visible=false;
  background4.scale=1.2;
  background4.velocityX=-1;


//Create the sprite for sand here
  sand=createSprite(150,370,20,20);
  sand.addImage(sandImg);
  sand.visible=false;
  sand.scale=1;


//Create the sprite for starfish here
  starfish=createSprite(200,340,20,20);
  starfish.addImage(starfishImg);
  starfish.visible=false;
  starfish.scale=0.1;


//Create the sprite for octopus here
  octopus=createSprite(100,370,20,20);
  octopus.addImage(octopusImg);
  octopus.visible=false;
  octopus.scale=0.2;


//Create the sprite for turtle here
  turtle=createSprite(50,370,20,20);
  turtle.addImage(turtleImg);
  turtle.velocityX=-0.05;
  turtle.visible=false;
  turtle.scale=0.2;


//Create the sprite for bush here
  bush=createSprite(380,350,20,20);
  bush.addImage(bushImg);
  bush.visible=false;
  bush.scale=0.2;


//Create the sprite for bush2 here
  bush2=createSprite(30,350,20,20);
  bush2.addImage(bushImg);
  bush2.visible=false;
  bush2.scale=0.2;


//Create the sprite for instructions of level1 here
  instruction2=createSprite(200,30,20,20);
  instruction2.addImage(instructionImg);
  instruction2.visible=false;
  instruction2.scale=0.20;

      
//Create the sprite for instructions of level2 here
  instruction3=createSprite(200,380,20,20);
  instruction3.addImage(instructionImg);
  instruction3.visible=false;
  instruction3.scale=0.18;
      
//Create the sprite for instructions of level3 here
  instruction4=createSprite(70,30,20,20);
  instruction4.addImage(instructionImg);
  instruction4.visible=false;
  instruction4.scale=0.25;


//Create the sprite for backbutton here
  backbutton=createSprite(200,350,20,20);
  backbutton.addImage(backbuttonImg);
  backbutton.visible=false;
  backbutton.scale=0.18;


//Create the sprite for fish here
  fish=createSprite(150,200,20,20);
  fish.addImage(fishImg1);
  fish.visible=false;
  fish.setCollider("circle",0,0,40);
  fish.debug=false;
  fish.scale=0.1;


//Create the sprite for sky here
  sky=createSprite(350,30,20,20);
  sky.addImage(skyImg);
  sky.visible=false;
  sky.scale=1;


//Create the sprite for grass here
  grass=createSprite(200,620,20,20);
  grass.addImage(grassImg);
  grass.visible=false;
  grass.scale=0.5;

    
//Create the sprite for cloud here
  cloud=createSprite(100,60,20,20);
  cloud.addImage(cloudImg);
  cloud.visible=false;
  cloud.scale=0.2;


//Create the sprite for cloud here
  cloud2=createSprite(200,150,20,20);
  cloud2.addImage(cloudImg);
  cloud2.visible=false;
  cloud2.scale=0.2;


//Create the sprite for cloud here
  cloud3=createSprite(100,240,20,20);
  cloud3.addImage(cloudImg);
  cloud3.visible=false;
  cloud3.scale=0.2;


//Create the sprite for cloud here 
  cloud4=createSprite(300,260,20,20);
  cloud4.addImage(cloudImg);
  cloud4.visible=false;
  cloud4.scale=0.2;


//Create the sprite for cloud here
  sun=createSprite(300,80,20,20);
  sun.addImage(sunImg);
  sun.visible=false;
  sun.scale=0.3;


//Create the sprite for tree here
  tree=createSprite(210,170,20,20);
  tree.addImage(treeImg);
  tree.visible=false;
  tree.scale=0.09;


//Create the sprite for tree here
  tree2=createSprite(50,190,20,20);
  tree2.addImage(tree2Img);
  tree2.visible=false;
  tree2.scale=0.3;


//Create the sprite for tree here
  tree3=createSprite(350,190,20,20);
  tree3.addImage(tree2Img);
  tree3.visible=false;
  tree3.scale=0.3;

    
//Create the sprite for lion here
  lion=createSprite(50,300,20,20);
  lion.addImage(lionImg);
  lion.visible=false;
  lion.setCollider("circle",0,0,40);
  lion.debug=false;
  lion.scale=0.15;
    
    
//Create the sprite for eagle here
  eagle=createSprite(300,140,20,20);
  eagle.addImage(eagleImg);
  //eagle.velocityX=-0.05;
  eagle.visible=false;
  eagle.setCollider("circle",0,0,40);
  eagle.debug=false;
  eagle.scale=0.12;
  

//Create the sprite for invisible ground here
  invisibleGround = createSprite(190,350,1000,10);
  invisibleGround.visible = false;


//Create all the groups here
  sharkGroup=new Group();
  stoneGroup=new Group();
  fishGroup=new Group();
  fireGroup=new Group();
  coinGroup=new Group();
  deerGroup=new Group();
  hunterGroup=new Group();
  fishGroup2=new Group();
  fishfoodGroup=new Group();
  sparrowGroup=new Group();
  aeroplaneGroup=new Group();
  pigeonGroup=new Group();
  arrowGroup=new Group();
  crowGroup=new Group();
  eaglefoodGroup=new Group();

                    }

    
     
function draw(){
background("red");

//Make all the gamestates here
     
  if(gameState==0){
     gameStart();
    //gamestart.play();

      
  if(mousePressedOver(instructions)){
     gameState=0.5;
                                    }

  
  else if(mousePressedOver(playbutton)){
          gameState=2;
          playbutton.visible=false;
          instructions.visible=false;

                                       }


  if(mousePressedOver(level2button)){
     gameState=3;
     playbutton.visible=false;
     instructions.visible=false;
                                    }
         
  
  if(mousePressedOver(level3button)){
     gameState=4;
     playbutton.visible=false;
     instructions.visible=false;
                   }
         
        
                      }


 if(gameState==0.5){
    background("red");
      
    instruction();
    playbutton.y=300;

 if(mousePressedOver(playbutton)){
    playbutton.visible=false; 
    gameState=2;
    instructions.visible=false;

                                  }
      
                    }


if(gameState==1){
    level2Start();
    
    level2button.visible=true;
      
if(mousePressedOver(level2button)){
    gameState=3;
    playbutton.visible=false;
    instructions.visible=false;
                                  }

                      }

      
if(gameState==2){
  //jungleSound.play();
   level1();
   Fire();
   level1Obstacle()
   level1Coins();
   Deer();
   Hunter()

      
 background2.visible=true;
 instruction2.visible=true;

       
if(background2.x<520){
   background2.x=background2.width/2;
                           }
           

if(mousePressedOver(instruction2)){
   gameState=2.5;
                                  }

       
if(keyDown("UP_ARROW")){
   lion.velocityY=-5;
                              }
   lion.velocityY = lion.velocityY + 0.8

         
if(keyDown("RIGHT_ARROW")){
   lion.x=lion.x+5;
                                 }
  
if(keyDown("LEFT_ARROW")){
   lion.x=lion.x-5;
                                }
       
         
      
if(coinGroup.isTouching(lion)){
   coinGroup.destroyEach();
   score=score+10;
   scoreSound.play();
                              }
         
       
if(fireGroup.isTouching(lion)){
   fireGroup.destroyEach();
   score=score-5;
   decreaseSound.play();
                              }

        
if(deerGroup.isTouching(lion)){
   deerGroup.destroyEach();
   score=score+15;
   scoreSound.play();
                                     }

if(score>=100){
   gameState=1
  
              }


if(stoneGroup.isTouching(lion)){
   stoneGroup.destroyEach();
   gameState=6;
   gameover.play();
         }
         
if(hunterGroup.isTouching(lion)){
   hunterGroup.destroyEach();
   gameState=6;
   gameover.play();
                                }
         
  lion.collide(invisibleGround);
                                }
       
if(gameState==2.5){
   background("red");
   lion.collide(invisibleGround);
   instructionsL1();
   lion.visible=false;
   hunterGroup.destroyEach();
   stoneGroup.destroyEach();
   deerGroup.destroyEach();
   fireGroup.destroyEach();
   coinGroup.destroyEach();
   background2.visible=false;
   grass.visible=false;
   cloud.visible=false;
   cloud2.visible=false;
   cloud3.visible=false;
   cloud4.visible=false;
   sun.visible=false;
   instruction2.visible=false;

  if(mousePressedOver(backbutton)){
   gameState=2;
   backbutton.visible=false;
                                }
                   }
       
if(gameState==3){
         
   level2();
   level2Obstacles();
   level2Fishes();
   fishFood();
   level2Fish();
         
   background1.visible=true;
   playbutton.visible=false; 
   instructions.visible=false;
   level2button.visible=false;
         

if(background1.x<130){
   background1.x=background1.width/2;
                     }
         

if(score>=250){
   level3Start();
   
           
if(mousePressedOver(level3button)){
   gameState=4;
   playbutton.visible=false;
   instructions.visible=false;
                                  }
            }


//Add the key controls to your fish 
if(keyDown("UP_ARROW")){
   fish.y=fish.y-5;
   fish.addImage(fishImg3);

                      }
          
if(keyDown("DOWN_ARROW")){
   fish.y=fish.y+5;
   fish.addImage(fishImg4);
                         }

          
if(keyDown("RIGHT_ARROW")){
   fish.x=fish.x+5;
   fish.addImage(fishImg1);
                          }

if(keyDown("LEFT_ARROW")){
   fish.x=fish.x-5;
   fish.addImage(fishImg2);
                         }
         
         
//Add the touching conditions here.

if(sharkGroup.isTouching(fish)){
   gameState=5;
   gameover.play();
                               }
          
if(turtle.isTouching(instruction3)){
   turtle.velocityX=0;
                                   }

if(mousePressedOver(instruction3)){
   gameState=3.5;
   

                                  }

if(fishGroup2.isTouching(fish)){
   fishGroup2.destroyEach();
   score=score+20;
   scoreSound.play();
                               }
        
if(fishfoodGroup.isTouching(fish)){
   fishfoodGroup.destroyEach();
   score=score+10;
   scoreSound.play();
                                  }
         
if(fishGroup.isTouching(fish)){
   fishGroup.destroyEach();
   score=score-5;
   decreaseSound.play();
                              }

         

                              }
       
if(gameState==3.5){
   //background("red");
   instructionsL2();
   instruction3.visible=false;
   fish.visible=false;
   sand.visible=false;
   starfish.visible=false;
   octopus.visible=false;
   turtle.visible=false;
   bush.visible=false;
   bush2.visible=false;
   sharkGroup.visible=false;
   background1.visible=false;
   fishGroup.visible=false;
   fishGroup2.visible=false;
   fishfoodGroup.visible=false;
   instruction2.visible=false;
    instruction3.visible=false;
         
if(mousePressedOver(backbutton)){
   gameState=3;
   backbutton.visible=false;
                                }

                  }

      
if(gameState==4){
   
   level3();
   Sparrows();
   Aeroplane();
   Pigeon();
   level3Arrows();
   Crows();
   Eaglefood();
   instruction3.visible=false;
        
if(background4.x<120){
   background4.x=background4.width/2;
                    }
        
        
if(keyDown("UP_ARROW")){
   eagle.y=eagle.y-5;
                              }
         
if(keyDown("DOWN_ARROW")){
   eagle.y=eagle.y+5;
                                }
         
if(keyDown("RIGHT_ARROW")){
   eagle.x=eagle.x+5;
                                 }
if(keyDown("LEFT_ARROW")){
   eagle.x=eagle.x-5;
                                }
        
if(sparrowGroup.isTouching(eagle)){
   sparrowGroup.destroyEach();
   score=score+30;
   scoreSound.play();
                                  }
        
if(aeroplaneGroup.isTouching(eagle)){
   aeroplaneGroup.destroyEach();
   gameState=7;
   gameover.play();
                                     }
        
if(pigeonGroup.isTouching(eagle)){
   pigeonGroup.destroyEach();
   score=score-5;
   decreaseSound.play();
                                     }
        
if(eaglefoodGroup.isTouching(eagle)){
   eaglefoodGroup.destroyEach();
   score=score+15;
  scoreSound.play();
                                     }
        
if(arrowGroup.isTouching(eagle)){
   arrowGroup.destroyEach();
   gameState=7;
   gameover.play();
                                     }

if(mousePressedOver(instruction4)){
   gameState=4.5;

                                   }
  
  if(score>=400){
   gameState=9;
  }



       
      }
        

if(gameState==4.5){
   background("red");
   instructionsL3();
   eagle.visible=false;
   instruction4.visible=false;
   level3button.visible=false;
   sparrowGroup.destroyEach();
   arrowGroup.destroyEach();
   aeroplaneGroup.destroyEach();
   pigeonGroup.destroyEach();
   background4.visible=false;
   sun.visible=false;
   instruction3.visible=false;

         
if(mousePressedOver(backbutton)){
   gameState=4;
   backbutton.visible=false;
                                }

                  }

      
if(gameState==5){
   background("black");
   fish.visible=false;
   sand.visible=false;
   starfish.visible=false;
   octopus.visible=false;
   turtle.visible=false;
   bush.visible=false;
   bush2.visible=false;
   sharkGroup.visible=false;
   background1.visible=false;
   fishGroup.visible=false;
   fishGroup2.visible=false;
   fishfoodGroup.visible=false;
   instruction2.visible=false;
    instruction3.visible=false;
   textSize(15);
   fill("yellow");
   text("Oops!Please refresh the screen to play again!",50,200);
      }

if(gameState==6){
   background("black");
   lion.visible=false;
   hunterGroup.destroyEach();
   stoneGroup.destroyEach();
   deerGroup.destroyEach();
   fireGroup.destroyEach();
   coinGroup.destroyEach();
   background2.visible=false;
   grass.visible=false;
   cloud.visible=false;
   cloud2.visible=false;
   cloud3.visible=false;
   cloud4.visible=false;
   sun.visible=false;
     instruction3.visible=false;
   textSize(15);
   fill("yellow");
   text("Oops!Please refresh the screen to play again!",50,200);
      }
      
if(gameState==7){
   background("black");
   eagle.visible=false;
   instruction4.visible=false;
   level3button.visible=false;
   sparrowGroup.destroyEach();
   arrowGroup.destroyEach();
   aeroplaneGroup.destroyEach();
   pigeonGroup.destroyEach();
   background4.visible=false;
   sun.visible=false;
   instruction3.visible=false;

    textSize(15);
    fill("yellow");
    text("Oops!Please refresh the screen to play again!",50,200);
      }
  
  if(gameState==9){
    gameOver();
  }
       

  drawSprites();
      
if(gameState!==0&&gameState!==0.5&&gameState!==6&&gameState!==2.5&&gameState!==3.5&&gameState!==4.5&&gameState!==9){
   textSize(20);
   textFont("Comic Sans MS");
   fill("yellow");
   text("SCORE:"+score,250,30);
      }
  

      

    }
function instruction(){
      textSize(15);
      fill("blue");
      text("INSTRUCTIONS FOR THE GAME ARE AS FOLLOWS:",10,50);
      fill("yellow");
      text("1)In the game there will be 3 levels",10,70);
      text("2)There will be 1 animal in each level",10,100);
    text("3)You can control the animal using the arrow keys" ,10,130);
    text("4)The aim of each animal is to reach to their prey or food",10,160);
     text("5)There will be energy boosters in each level which will",10,190);
       text("    increase the score of the animal.",10,210);

       instructions.visible=false;



    }

function gameStart(){
background(backgroundImg);
textSize(35);
text("🍴",50,310);
text("🍴",300,310);

                      }
function gameOver(){
background(gamecompletedImg);
eagle.visible=false;
level3button.visible=false;
instruction4.visible=false;
sun.visible=false;
background4.visible=false;


                      }
function level2Start(){
background(backgroundImg2);
fish.visible=false;
sand.visible=false;
starfish.visible=false;
octopus.visible=false;
turtle.visible=false;
bush.visible=false;
bush2.visible=false;
sharkGroup.visible=false;
background1.visible=false;
fishGroup.visible=false;
fishfoodGroup.visible=false;
instruction2.visible=false; 
level2button.visible=true;
background2.visible=false;
grass.visible=false;
sun.visible=false;
cloud2.visible=false;
cloud.visible=false;
cloud3.visible=false;
cloud4.visible=false;
lion.visible=false;
hunterGroup.destroyEach();
fireGroup.destroyEach();
     
      }


function level1(){
background2.visible=true;
instruction2.visible=true;
grass.visible=true;
sun.visible=true;
cloud2.visible=true;
cloud.visible=true;
cloud3.visible=true;
cloud4.visible=true;
lion.visible=true;
      
                }

function Fire(){ 
if(frameCount%400==0){
fire = createSprite(300,-30,20,20);
fire.addImage(fireImg);
fire.scale=0.08;
fire.x=Math.round(random(100,500));
fire.velocityY=2;
fire.lifetime=400;
fireGroup.add(fire);
                          }

                  }


function level1Coins(){
if(frameCount%550==1){
coin = createSprite(200,30,20,20);
coin.addImage(coinImg);
coin.scale=0.01;
coin.lifetime=640;
coin.velocityY=2;
coinGroup.add(coin);
                         }
                       }

    
function level1Obstacle(){
if(frameCount%3050==1){
stone =createSprite(200,330,20,20);
stone.addImage(stoneImg);
stone.scale=0.1;
stone.lifetime=640;
stone.velocityX=-2;
stoneGroup.add(stone);
      }
    }

function Deer(){
if(frameCount%1050==1){
deer=createSprite(350,340,20,20);
deer.addImage(deerImg);
deer.scale=0.18;
deer.lifetime=640;
deer.velocityX=-2;
deerGroup.add(deer);
                       }
              }


function Hunter(){
if(frameCount%850==1){
hunter=createSprite(350,310,20,20);
hunter.addImage(hunterImg);
hunter.scale=0.03;
hunter.lifetime=540;
hunter.velocityX=-2;
hunterGroup.add(hunter);
      }
    }



function level2(){
background(background1Img);
fish.visible=true;
sand.visible=true;
starfish.visible=true;
octopus.visible=true;
turtle.visible=true;
bush.visible=true;
bush2.visible=true;
instruction3.visible=true;
     
                 }


function level2Obstacles(){
   if(frameCount%550==1){
   shark=createSprite(400,300,20,20);
   shark.addImage(obstacle1Img);
   shark.lifetime =500;
   shark.y=Math.round(random(10,380));
   shark.velocityX=-1;
   shark.scale=0.05;
   sharkGroup.add(shark);
                        }
                            }


function level2Fishes(){
  if(frameCount%300==1){
  fish2=createSprite(400,300,20,20);
  fish2.addImage(fish2Img);
  fish2.lifetime = 500;
  fish2.y=Math.round(random(10,380));
  fish2.velocityX=-1;
  fish2.scale=0.07;
  fishGroup.add(fish2);
                        }
                         }

function level2Fish(){
  if(frameCount%1500==1){
  fish3=createSprite(400,200,20,20);
  fish3.addImage(fish3Img);
  fish3.lifetime = 500;
  fish3.y=Math.round(random(10,380));
  fish3.velocityX=-1;
  fish3.scale=0.01;
  fishGroup2.add(fish3);
                          }
                     }

    
function fishFood(){
  if(frameCount%150==1){
  fishfood=createSprite(400,300,20,20);
  fishfood.addImage(fishfoodImg);
  fishfood.lifetime = 500;
  fishfood.y=Math.round(random(10,380));
  fishfood.velocityX=-1;
  fishfood.scale=0.1;
  fishfoodGroup.add(fishfood);
                      }
                    }
    

    
    

function instructionsL1(){
 background(instructionl1Img);
      fish.visible=false;
      sand.visible=false;
      starfish.visible=false;
      octopus.visible=false;
      turtle.visible=false;
      bush.visible=false;
      bush2.visible=false;
      sharkGroup.visible=false;
      background1.visible=false;
      fishGroup.visible=false;
      fishfoodGroup.visible=false;
      instruction2.visible=false;
      backbutton.visible=true;
      grass.visible=false;
      cloud.visible=false;
      cloud2.visible=false;
      cloud3.visible=false;
      cloud4.visible=false;
      lion.visible=false;
      background2.visible=false;
      sun.visible=false;



    }

  function instructionsL2(){
      background(instructionl2Img);
      fish.visible=false;
      sand.visible=false;
      starfish.visible=false;
      octopus.visible=false;
      turtle.visible=false;
      bush.visible=false;
      bush2.visible=false;
      sharkGroup.visible=false;
      background1.visible=false;
      fishGroup.visible=false;
      fishfoodGroup.visible=false;
      instruction3.visible=false;
      backbutton.visible=true;

}

function instructionsL3(){
       background(instructionl3Img);
       background4.visible=false;
       eagle.visible=false;
       sun.visible=false;
       instruction4.visible=false;
       level3button.visible=false;
       backbutton.visible=true;

 }

 
     
   function level3Start(){
    background(backgroundImg3);
      fish.visible=false;
      sand.visible=false;
      starfish.visible=false;
      octopus.visible=false;
      turtle.visible=false;
      bush.visible=false;
      bush2.visible=false;
      sharkGroup.destroyEach();
      background1.visible=false;
      fishGroup.destroyEach();
      fishGroup2.destroyEach();
      fishfoodGroup.destroyEach();
      instruction2.visible=false;
      level2button.visible=false;
      level3button.visible=true;
      background2.visible=false;
      grass.visible=false;
   }
    
    


   function level3(){
     background4.visible=true;
      eagle.visible=true;
      sun.visible=true;
      instruction4.visible=true;
   }


   function Sparrows(){
     if(frameCount%1350==1){
       sparrow=createSprite(50,340,20,20);
       sparrow.addImage(sparrowImg);
       sparrow.scale=0.12;
       sparrow.lifetime=640;
       sparrow.y=Math.round(random(10,380));
       sparrow.velocityX=1;
       sparrowGroup.add(sparrow);
      }
   }


  function Aeroplane(){
     if(frameCount%750==1){
       aeroplane=createSprite(50,340,20,20);
       aeroplane.addImage(aeroplaneImg);
       aeroplane.scale=0.7;
       aeroplane.lifetime=640;
       aeroplane.y=Math.round(random(10,380));
       aeroplane.velocityX=1;
       aeroplaneGroup.add(aeroplane);
      }
   }

  function Pigeon(){
     if(frameCount%950==1){
       pigeon=createSprite(50,300,20,20);
       pigeon.addImage(pigeonImg);
       pigeon.scale=0.3;
       pigeon.lifetime=640;
       pigeon.x=Math.round(random(10,380));
       pigeon.velocityX=1;
       pigeonGroup.add(pigeon);
      }
   }



 function level3Arrows(){
      if(frameCount%1150==1){
        arrow = createSprite(200,370,20,20);
        arrow.addImage(arrowImg);
        arrow.scale=0.2;
        arrow.lifetime=640;
        arrow.x=Math.round(random(10,380));
        arrow.velocityY=-2;
        arrowGroup.add(arrow);
      }
    }


  function Crows(){
      if(frameCount%1250==1){
        crow = createSprite(200,370,20,20);
        crow.addImage(crowImg);
        crow.scale=0.2;
        crow.lifetime=640;
        crow.x=Math.round(random(10,380));
        crow.velocityX=2;
        crowGroup.add(crow);
      }
    }

 

      function Eaglefood(){
      if(frameCount%1050==1){
        eaglefood = createSprite(200,370,20,20);
        eaglefood.addImage(eaglefoodImg);
        eaglefood.scale=0.02;
        eaglefood.lifetime=640;
        eaglefood.x=Math.round(random(10,380));
        eaglefood.velocityX=1;
        eaglefoodGroup.add(eaglefood);
      }
    }

 





