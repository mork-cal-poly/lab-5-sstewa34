function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent-organic");
  // So draw() only runs 1x instead of 60fps
  noLoop();
}

function draw() {
  drawBackground(100,100)
  
  let i = 0;
  while (i<40) {
    drawRain(random(5,400),random(90,250),random(0.2,1))
    i++;
  }
  
}

function drawRain(x,y,s) {  //raindrop
  push()
  translate(x,y)
  scale(s)
  
  fill(190,230,255)
  noStroke();
  ellipse(-100,100,50)
  triangle(-120,85,-100,50,-80,85)
 
  pop()
}

function drawBackground(x,y) {
  push()
  translate(x,y);
  // background
  background(20,130,200);
  //clouds
  drawCloud2(x,y,0.5)
  drawCloud1(x,y,0.5)
  noStroke();
  fill(50,125,0)
  rect(-100,250,400,50)
  pop()
}

function drawCloud1(x,y,s){  //left cloud
  push()
  translate(x,y)
  scale(s)
  
  fill(255)
  beginShape();
    curveVertex(-400,-200)
    curveVertex(-325,-180)
    curveVertex(-250,-200)
    curveVertex(-130,-220)
    curveVertex(-80,-275)
    curveVertex(30,-330)
    curveVertex(30,-400)
    vertex(-400,-400)
  endShape(CLOSE);
  
  pop()
}

function drawCloud2(x,y,s){  //right cloud
  push()
  translate(x,y)
  scale(s)
  
  fill(255)
  beginShape();
    curveVertex(-30,-300)
    curveVertex(50,-275)
    curveVertex(100,-290)
    curveVertex(160,-270)
    curveVertex(220,-280)
    curveVertex(300,-250)
    curveVertex(400,-260)
    vertex(400,-400)
    vertex(-30,-400)
  endShape(CLOSE);
 
  pop()
}