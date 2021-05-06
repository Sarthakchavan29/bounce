var moving, fixed;

function setup() {
  createCanvas(800,400);
  moving = createSprite(600, 200, 150, 100);
  moving.shapeColor="green"
  moving.velocityX=-1;

  fixed = createSprite(100,200,50,50)
  fixed.shapeColor="yellow"
  fixed.velocityX=1;
}



function draw() {
  //moving.x=World.mouseX
  //moving.y=World.mouseY
  background('black');  

  console.log(moving.x-fixed.x)

/*


  if(moving.x-fixed.x<moving.width/2 + fixed.width/2  && fixed.x-moving.x<moving.width/2 + fixed.width/2 
    && moving.y-fixed.y<moving.height/2 + fixed.height/2 &&  fixed.y-moving.y<moving.height/2 + fixed.height/2  )
  {
    fixed.shapeColor="red"
    moving.shapeColor='red'
  }
  else{
    moving.shapeColor="green"
    fixed.shapeColor="green"
  }
  */

  if(moving.x-fixed.x<moving.width/2 + fixed.width/2 ){

    moving.velocityX=moving.velocityX*(-1)
    fixed.velocityX=fixed.velocityX*(-1);
  }
  drawSprites();
}