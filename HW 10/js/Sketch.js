//variables
var leftArmX = 125;
var leftArmY = 225;
var leftArmDirection = Math.floor(Math.random() * 5) + 1;

var rightArmX = 325;
var rightArmY = 225;
var rightArmDirecetion = Math.floor(Math.random() * 3) + 3;

var leftLegX = 175;
var leftLegY = 425;
var leftLegDirection = Math.floor(Math.random() * 7) + 1;

var rightLegX = 275;
var rightLegY = 425;
var rightLegDirection = Math.floor(Math.random() * 4) + 2;

var bodyX = 175;
var bodyY = 225;
var bodyDirection = 3;

var planetX = 400;
var planetY = 100;
var planetDirection = Math.floor(Math.random() * 6) + 2;

var titleSize = 80;
var titleSizeDirection = 5;
var count = 0;

function setup()
{
    createCanvas(500, 800)
}
function draw()
{
  //global
    background(50);
    strokeWeight(3)
    stroke('black')
  //moon
    fill(150)
    ellipse(250,1500,2000);
  //planet
    stroke('orange');
    strokeWeight(40);
    point(planetX,planetY);
    planetX += planetDirection;
    planetY += planetDirection;
    if(planetX <= 0 || planetX >= 500)
    {
      planetDirection *= -1;
    }
    if(planetY <= 0 || planetY >= 650)
    {
      planetDirection *= -1;
    }
  //neck/shoulders
    strokeWeight(3)
    stroke('black')
    fill(250)
    triangle(135,225,250,190,365,225);
  //helmet
    fill(250);
    circle(250,150,150);
  //head
    fill(0)
    circle(250,150,120);
  //body
    fill(250)
    rect(175,225,150,200);
  //left leg
    rect(leftLegX,leftLegY,50,200);
    leftLegX += leftLegDirection;
    if(leftLegX <= 0 || leftLegX >= 450)
    {
      leftLegDirection *= -1;
    }
  //right leg
    rect(rightLegX,rightLegY,50,200);
    rightLegX += rightLegDirection;
    if(rightLegX <= 0 || rightLegX >= 450)
    {
      rightLegDirection *= -1;
    }
  //left arm
    rect(leftArmX,leftArmY,50,225);
    leftArmY += leftArmDirection;
    if(leftArmY <= 0 || leftArmY >= 600)
    {
      leftArmDirection *= -1;
    }
  //right arm
    rect(rightArmX,rightArmY,50,225);
    rightArmY += rightArmDirecetion;
    if(rightArmY <= 0 || rightArmY >= 600)
    {
      rightArmDirecetion *= -1;
    }
  //front pack
    fill(0);
    rect(200,250,100,50);
  //NASA
    fill(300);
    textSize(25);
    text('NASA',217.5,285,);
  //stars
    stroke('white');
    strokeWeight(5);
    point(10,75);
    point(50,90);
    point(100,20);
    point(130,70);
    point(200,40);
    point(280,50);
    point(370,30);
    point(450,80);
    point(20,200);
    point(100,180);
    point(400,150);
    point(475,200);
    point(60,300);
    point(425,280);
    point(90,400);
    point(40,450);
    point(420,370);
    point(470,470);
  //eyes
    fill(0);
    circle(230,145,10);
    circle(270,145,10);
  //mouth
    stroke('white');
    strokeWeight(4);
    line(230,175,270,175)
    arc(250, 175, 40, 30, 0, 3.14);
  //title
    stroke('white');
    strokeWeight(5);
    textSize(titleSize);
    titleSize += titleSizeDirection;
    count ++;
    if(count > 5)
    {
      titleSizeDirection *= -1;
      count = 0;
    }
    text('SPACE MAN',15,720)
  //colton
    stroke('white');
    strokeWeight(4);
    textSize(40);
    text('CoLToN',180,770)
}