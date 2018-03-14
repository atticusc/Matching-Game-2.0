
var sceneMap={
  "startScreen": startScreen,
  "inGame": inGame
}

var currentScene = "startScreen"
var canvasSize= {width:500,height:500}



function setup() {
  createCanvas(canvasSize.width,canvasSize.height);
  sceneMap[currentScene].draw();

}
function draw() {

}
function mousePressed(){
  sceneMap[currentScene].mousePressed();
}
function keyPressed(){
  sceneMap[currentScene].keyPressed();
}
