function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent-organic");
  // So draw() only runs 1x instead of 60fps
  noLoop();
}

function draw() {
  background(220);
}
