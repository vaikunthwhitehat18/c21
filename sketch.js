var fixedRect,movingRect
var ob1,ob2
function setup(){
createCanvas(800,500);

fixedRect = createSprite(250,250,50,50);
fixedRect.shapeColor="red";
fixedRect.debug = true;

movingRect =createSprite(100,100,50,50);
movingRect.shapeColor="red";
movingRect.debug = true;

ob1 =createSprite(200,300,50,50)
ob2 =createSprite(400,300,50,50);
ob1.shapeColor="red";
ob2.shapeColor="red"
}
function draw(){
background(0);

movingRect.x = mouseX;
movingRect.y = mouseY;

if(collision(movingRect,ob2)){
    movingRect.shapeColor="blue"
    ob2.shapeColor="blue";
}else{
    movingRect.shapeColor="red"
    ob2.shapeColor="red"
    
}

drawSprites();

}
function collision(p1,p2){
    if(p1.x - p2.x <= p2.width/2 + p1.width/2 &&
        p2.x - p1.x <= p2.width/2 + p1.width/2 &&
        p1.y - p2.y <= p2.height/2 + p1.height/2 &&
        p2.y - p1.y <= p2.height/2 + p1.height/2){
    
        return true;
    
    }else{
    
        return false
    }  
}

