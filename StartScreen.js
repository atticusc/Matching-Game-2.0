var no_cards = 10
var startScreen = {};
startScreen.dKey = false;
startScreen.screenText = "Scene: StartScreen!"
startScreen.demoCard = makeCard(0, 0, true, false)
startScreen.demoDeck = makeDeck(no_cards)

startScreen.mousePressed = function() {
  currentScene = "inGame"
  drawDeck(startScreen.demoDeck)
}
startScreen.draw = function() {
  background('lightblue');
  if (startScreen.dKey === true) {
    fill("black");
    text("Well Done!", width / 2, height / 2 + 75);
  }
  drawDeck(startScreen.demoDeck)
}
startScreen.keyPressed = function() {
  console.log("hello")
  if (key === 'D') {
    startScreen.dKey = true;

  }
}
