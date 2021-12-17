//PING PONG GAME!

//X & Y POSITION
xposition = 600
yposition = 400

//X & Y DIRECTION
xdirection = 6;
ydirection = 5;

//CREATE CANVAS
function setup() {
  createCanvas(1200, 800);

//ALERT
alert('WELCOME TO MY PING PONG PADDLE PARTY GAME / ART PIECE! \n\nDIRECTIONS: Use your mouse to move the paddel to the right up and down.\n\n ENJOY!');
}

//RANDOM BACKGROUND COLOR
setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#"+randomColor;
    },1000);

//DRAW
function draw() {
  background(46,139,87);

//QUARTER-LINE
for (var i=0; i < 1200; i+=1) {
    stroke('white')
    line(i,400,i,400);
    }

//NET LINE
for (var i=0; i < 1200; i+=1) {
    stroke('white');
    line(595,i,605,i);
    stroke('black')
    line(598,i,602,i);
    } 

//CREATE BORDERS
  createBorders(10);

//ENEMY PADDLE
  rect(20,yposition,15,120);

//PLAYER PADDLE
  rect(1165,mouseY,15,120);

//BALL
  fill(173,255,47)
  ellipse(xposition,yposition,40,40);
  if (xposition>=width-60 || xposition==60)
    {
      xdirection = -xdirection
    }
  if (yposition>=height-40 || yposition==40)
    {
      ydirection = -ydirection
    }

//TEXT
  fill('white');
  textSize(60);
  stroke('black');
  strokeWeight(4);
  text('P     I     N     G',90,80);
  text('P     O     N     G',690,80);
  text('P   A   D   D   L   E',55,760)
  text('P   A   R   T   Y',690,760)

//NET POSTS
  ellipse(600,5,25,25);
  ellipse(600,795,25,25);

//CREATE BORDERS FUNCTION
function createBorders(thickness)
{
    stroke('white')
    fill('black')
    strokeWeight(4)
    //Left Border
    rect(0,0,thickness,height);
    //Right Border
    rect(width-thickness,0,thickness,height);
    //Top Border
    rect(0,0,width,thickness);
    //Bottom Border
    rect(0, height-thickness,width, thickness);
    }

  xposition = xposition +xdirection;
  yposition = yposition +ydirection;
}
