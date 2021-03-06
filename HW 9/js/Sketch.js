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
  //neck/shoulders
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
  //legs
    rect(175,425,50,200);
    rect(275,425,50,200);
  //arms
    rect(125,225,50,225);
    rect(325,225,50,225);
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
  //planet
    stroke('orange');
    strokeWeight(40);
    point(400,100);
  //title
    stroke('white');
    strokeWeight(5);
    textSize(100);
    text('CoLToN',70,750)
}