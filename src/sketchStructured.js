let xCoord = 0;
function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent-structured");
  // So draw() only runs 1x instead of 60fps
  noLoop();
}

function draw() {
  drawBackground();
  
  let i = 0;
  for (i = 0; i < 10; i++) {
  rectWidth = random(50, 100);
  rectHeight = random(50, 300);
    
    drawBuilding(xCoord, height - rectHeight, rectWidth, rectHeight);
    
    xCoord += rectWidth;
  }
}

  function drawBuilding(x,y,w,h) {
  push();
  fill(125)
  rect(x,y,w,h)
  
  let i = 0;
  for (i = 0; i<20; i++) {
    noStroke();
    fill (255,255,50)
    rect(x + 10,y + 10,15)
    y = y + 30
  }
  pop();
}

function drawBackground (){
  let r = 25
  let g = 46
  let b = 97
  for (let i = 0; i <= height; i = i + 1) {
    stroke(r, g, b);
    line(0, i, 400, i);
    r = r + 93 / height;
    g = g - 42 / height;
    b = b - 23 / height;
  }
  noStroke();
  fill(220)
  ellipse(330,70,100)
  fill(170)
  ellipse(330,72,80)
  fill(220)
  ellipse(335,65,80)
  fill(170)
  ellipse(350,70, 30)
  ellipse(340,40, 20)
  ellipse(315,60, 20)
}