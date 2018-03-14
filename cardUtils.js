var cardInfo = {
  width: 80,
  height: 125,
  stroke: 2
}

var gutter = 10

function makeCard(id, face, faceUp, matched) {
  if (faceUp === undefined) {
    faceUp = false
  }
  if (matched === undefined) {
    matched = false
  }
  return {id: id, face: face, faceUp: faceUp, matched: matched};
}
function makeDeck(numberOfCards) {
  var result = []
  for (f = 0, i = 0; i < numberOfCards; f++) {
    result.push(makeCard(i++, f, true))
    result.push(makeCard(i++, f, true))
  }
  return result;
}
function shuffled(arrayofcards) {
  shuffle(makeDeck)
}
function drawCard(card, x, y, cardWidth, cardHeight, cardStroke) {
  push();
  translate(x, y);
  if (card.faceUp) {
    fill("black")
    rect(0, 0, cardWidth, cardHeight, 8)
    textSize(60)
    fill('red')
    rect(0, 0, cardWidth, cardHeight / 8, 8)
    rect(cardWidth / 8 - 10, cardHeight / 2 + 48, cardWidth, cardHeight / 8, 8)
    text(card.face, cardWidth / 2 - 15, cardHeight / 2 + 20)
  } else {
    noStroke();
    fill('green')
    rect(0, 0, cardWidth, cardHeight, 8)
  }
  pop();
}

function drawDeck(arrOfCards) {
  const cols = Math.floor(canvasSize.width/ (cardInfo.width + gutter))
  arrOfCards.forEach(function(card) {
    var loc = cardLayout(card.id, cols)
    drawCard(card, loc.x, loc.y, cardInfo.width, cardInfo.height, cardInfo.stroke)
  })
}

function cardLayout(id, cardsPerRow) {
  var row = Math.floor(id/cardsPerRow)
  var index = id > cardsPerRow-1 ? id%cardsPerRow : id

  var x = (index * cardInfo.width) + (gutter * index)
  var y = (cardInfo.height * row) + (gutter * row)
  return {x: x , y: y}
}
