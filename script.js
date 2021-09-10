var x, y, vx, vy, z, w, vz, vw;

function setup() {
  createCanvas(500, 400);
  x = 55;
  y = 200;
  vx = 5;
  vy = 5;
  z = 20;
  w = 10;
  vz = 1;
  vw = 1;
  a = 60;
  b = 100;
  va = 10;
  vb = 10;
  c = 30;
  d = 150;
  vc = 8;
  vd = 8;
}

function draw() {
  background('blue');

  ellipse(x, y, 50, 50);
    x = x + vx;
    y = y + vy;
    fill(50,255,10)

  if (x <= 0 || x > 500){
    vx = vx * -1;
  }
  if (y <= 0 || y > 400){
    vy = vy * -1;
  }
   ellipse(z, w, 30, 30);
    z = z + vz;
    w = w + vw;
    fill(250,20,255)

  if (z <= 0 || z > 500){
    vz = vz * -1;
  }
  if (w <= 0 || w > 400){
    vw = vw * -1;
  }
     ellipse(a, b, 65, 65);
    a = a + va;
    b = b + vb;
    fill(25,255,255)

  if (a <= 0 || a > 500){
    va = va * -1;
  }
  if (b <= 0 || b > 400){
    vb = vb * -1;
  }
     ellipse(c, d, 80, 80);
    c = c + vc;
    d = d + vd;
    fill(250,20,33)

  if (c <= 0 || c > 500){
    vc = vc * -1;
  }
  if (d <= 0 || d > 400){
    vd = vd * -1;
  }
}
   
