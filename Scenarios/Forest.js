class Forest{
  constructor(){
    this.groundSprite = createSprite(displayWidth - 300, displayHeight - 200, displayWidth*2, 10)
    /*this.ImageForest = loadImage("Images/Forest/ForestBackground.png")
    this.ImageDesert = loadImage("Images/Desert/desertBackground.png")
    this.ImageCity = loadImage("Images/City/cityBackground.png")*/
    

    this.backgroundSprite1 = createSprite(displayWidth/2, displayHeight/2, displayWidth * 3, displayHeight)
    this.backgroundSprite2 = createSprite(this.backgroundSprite1.x + this.backgroundSprite1.width-500, displayHeight/2, displayWidth * 3, displayHeight)
    this.ImageCity = loadImage("Images/Forest/ForestBackground.png")




    this.obstacle1 = loadImage("Images/Forest/Tree1.png")
    this.obstacle2 = loadImage("Images/Forest/Tree2.png")
    this.obstacle3 = loadImage("Images/Forest/Tree3.png")
    this.obstacle4 = loadImage("Images/Forest/porcupine1.png")
    this.obstacle5 = loadImage("Images/Forest/porcupine2.png")
 //   this.obstacle6 = loadImage("Images/Forest/Landform3.png")
    this.obstacle6 = loadImage("Images/Forest/logs.png")
    this.obstacle7 = loadImage("Images/Forest/treeStump.png")
  




    
}

display(){
  //this.ground.addImage(this.image)
  this.backgroundSprite1.addImage(this.ImageDesert)
  this.backgroundSprite1.velocityX = -6
  this.backgroundSprite2.addImage(this.ImageDesert)
  this.backgroundSprite2.velocityX = -6

  if(this.backgroundSprite2.x < this.backgroundSprite2.width/2){
     this.backgroundSprite1.x = this.backgroundSprite2.x + this.backgroundSprite2.width-10;    
   }

  if(this.backgroundSprite1.x < this.backgroundSprite1.width/2){
    this.backgroundSprite2.x = this.backgroundSprite1.x + this.backgroundSprite1.width-20;    
   }
}

spawn(){


  if (frameCount % 120 === 0){
  var obstacleRest = createSprite(displayWidth + 200,displayHeight-75,100,100);
  obstacleRest.velocityX = -12;
  
   //generate random obstacles
   var rand = Math.round(random(4,7));
   switch(rand) {
     case 4: obstacleRest.addImage(this.obstacle4);
             break;
     case 5: obstacleRest.addImage(this.obstacle5);
             break;
     case 6: obstacleRest.addImage(this.obstacle6);
             break;
     case 7: obstacleRest.addImage(this.obstacle7);
             break;
   
  
     default: break;
   }
  
   //assign scale and lifetime to the obstacle           
 
   obstacleRest.lifetime = 300;
   obstacleRest.scale = 1.5;
  
  //add each obstacle to the group
   obstaclesGroup.add(obstacleRest);
}



if (frameCount % 270 === 0){
var obstacleTree = createSprite(displayWidth + 200,displayHeight/2-25,100,100);
obstacleTree.velocityX = -12;

 //generate random obstacles
 var rand1 = Math.round(random(1,3));
 switch(rand1) {
  
   case 1: obstacleTree.addImage(this.obstacle1);
     //      var obstacleTreeBranch = createSprite(displayWidth + 100,displayHeight/2-25,100,100);
     //      obstacleTreeBranch.addImage(this.obstacle11)
    //       obstacleTreeBranch.velocityX = -12;
           break;
   case 2: obstacleTree.addImage(this.obstacle2);
     //      var obstacleTreeBranch = createSprite(displayWidth + 100,displayHeight/2-25,100,100);
     //      obstacleTreeBranch.addImage(this.obstacle12)
     //     obstacleTreeBranch.velocityX = -12;
           break;
   case 3: obstacleTree.addImage(this.obstacle3);
     //     var obstacleTreeBranch = createSprite(displayWidth + 100,displayHeight/2-25,100,100);
     //     obstacleTreeBranch.addImage(this.obstacle13)
     //     obstacleTreeBranch.velocityX = -12;
           break;
  

   default: break;
 }

 //assign scale and lifetime to the obstacle           

 obstacleTree.lifetime = 300;
 obstacleTree.scale = 2.75;

//add each obstacle to the group
 obstaclesGroup.add(obstacleTree);
}

}
}