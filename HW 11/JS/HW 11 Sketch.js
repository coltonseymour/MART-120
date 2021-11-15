// Character Variables
var characterX = 20;
var characterY = 20;

// Key Controls
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// Shape1 X & Y
var shape1X = 100;
var shape1Y = 100;
var shapeXSpeed;
var shapeYSpeed;

//Shape2 X & Y
var shape2X = 300;
var shape2Y = 500;
var shapeXSpeed;
var shapeYSpeed;

//Shape3 X & Y
var shape3X = 500;
var shape3Y = 100;
var shapeXSpeed;
var shapeYSpeed;

//Mouseclick Shape
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(1000, 600);
    //Random Shape Speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
}
//Draw Function
function draw()
{
    background(25,75,100);
    stroke(0);
    fill(0);

    //Top Border
    rect(0,0,width,10);
    //Left Border
    rect(0,0,10,height);
    //Right Border
    rect(width-10,0,10,height-65);
    //Bottom Border
    rect(0, height-10,width, 10);
    
    //Exit
    textSize(20);
    text("EXIT", width-65,height-30)

    //Character
    fill(170,20,50);
    rect(characterX,characterY,30);
    
    //Keys
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
    
    //Enemy1 (Shape1)
    fill(10,150,80);
    circle(shape1X, shape1Y,20);

    //Enemy1 Speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);

    //Enemy1 Movement 
    shape1X += shapeXSpeed;
    shape1Y += shapeYSpeed;

    //Enemy1 Boundary
    if(shape1X > width)
    {
        shape1X = 0;
    }
    if(shape1X < 0)
    {
        shape1X = width;
    }
    if(shape1Y > height)
    {
        shape1Y = 0;
    }
    if(shape1Y < 0)
    {
        shape1Y = height;
    }

    //Enemy2 (Shape2)
    fill(90,40,80);
    circle(shape2X, shape2Y,40);

    //Enemy2 Speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    //Enemy2 Movement 
    shape2X += shapeXSpeed;
    shape2Y += shapeYSpeed;

    //Enemy2 Boundary
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }

    //Enemy3 (Shape3)
    fill(20,100,150);
    circle(shape3X, shape3Y,30);

    //Enemy3 Speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);

    //Enemy3 Movement 
    shape3X += shapeXSpeed;
    shape3Y += shapeYSpeed;

    //Enemy3 Boundary
    if(shape3X > width)
    {
        shape3X = 0;
    }
    if(shape3X < 0)
    {
        shape3X = width;
    }
    if(shape3Y > height)
    {
        shape3Y = 0;
    }
    if(shape3Y < 0)
    {
        shape3Y = height;
    }
    
    //Character Boundary
    if(characterX > width)
    {
        shapeX = 0;
    }
    if(characterX < 0)
    {
        characterX = width;
    }
    if(characterY > height)
    {
        characterY = 0;
    }
    if(characterY < 0)
    {
        characterY = height;
    }

    if(characterX > width && characterY > width-900)
    {
        fill(0);
        stroke(5);
        textSize(50);
        text("YOU ROCK!", width/2-135, height/2-20);
    }

    //Create Shape w/ Mouseclick
    fill(0,0,50);
    circle(mouseShapeX, mouseShapeY, 25);
}

//Mouseclick Function
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}