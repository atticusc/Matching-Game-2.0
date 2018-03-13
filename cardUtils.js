var cardInfo= {width:80,height:125,stroke:2}

function makeCard(id,face,faceUp,matched){
    if(faceUp===undefined){faceUp=false}
     if(matched===undefined){matched=false}
    return {id:id,face:face,faceUp:faceUp,matched:matched};
        }
function makeDeck(numberOfCards){
    var result=[]
    for(f=0,i=0;i<numberOfCards;f++){
result.push (makeCard(i++,f,true))
result.push (makeCard(i++,f,true))
    }
    return result;
}
function shuffled(arrayofcards){
    shuffle(makeDeck)
}
function drawCard(card,x,y,cardWidth,cardHeight,cardStroke){
 push();
 translate(x,y);
 if(card.faceUp){
    fill("black")
    rect(0,0,cardWidth,cardHeight,8)
    textSize(60)
    fill('red')
    rect(0,0,cardWidth,cardHeight/8,8)
    rect(cardWidth/8-10,cardHeight/2+48,cardWidth,cardHeight/8,8)
    text(card.face,cardWidth/2-15,cardHeight/2+20)
 } else{
 noStroke();
 fill('green')
 rect(0,0,cardWidth,cardHeight,8)
 }
 pop();
}

function drawDeck(arrOfCards){
    console.log(arrOfCards.length)
    arrOfCards.forEach(function(card){
       var loc=cardLayout(card.id)
       drawCard(card,loc.x,loc.y,cardInfo.width,cardInfo.height,cardInfo.stroke)
   })
}
function cardLayout(id,cardsPerRow){
   
    var x,y;
    if(id<=4){
    x=id*cardInfo.width+10+id*10
    y=height/2;
    return{x:x,y:y}
    }else{
        x=id*cardInfo.width-400
        y=height/2+150;
        return{x:x,y:y}
    }
}
