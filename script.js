var x, y, vx, vy;

function setup() {
  createCanvas(500, 500);
  x = 50;
  y = 50;
  vx = 5;
  vy = 5;
}

function draw() {
   background(225);

   ellipse(x, y, 50, 50);
    x = x + vx;
    y = y + vy;

  if (x <= 0 || x > 500){
    vx = vx * -1;
  }
  if (y <= 0 || y > 500){
    vy = vy * -1;
  }
}
   