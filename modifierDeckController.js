/*
Controller: performs all the logic for the app
*/

var modifierDeckController = function(startingCardArray,view){
  this.discardedCards = [];
  this.currentDeck = new Deck();

  var self = this;

  function initializeDeck(startingCardArray) {
    startingCardArray.forEach(function(card){
      self.currentDeck.addCard(card);
    });
  }

  initializeDeck(startingCardArray);
  self.currentDeck.shuffle() //then shuffle existing deck

  view.addDrawEventListener(self.drawAndDiscardCard.bind(self))

  view.addBlessCardEventListener(self.addBlessCard.bind(self))

  view.addCurseCardEventListener(self.addCurseCard.bind(self))
}

modifierDeckController.prototype = {
  drawAndDiscardCard: function (){
    var topCard = this.currentDeck.drawCard();
    console.log("topCard", topCard)
    this.discardedCards.push(topCard);
    view.showACard(topCard);

    //add some type of visual cue when cards switch here?
    this.drawButton.style.color = "red"

    //make sure bless and curse cards are removed after drawn
    console.log("this.discardedCards deck:", this.discardedCards);
  },
  addBlessCard: function(){
    var blessCard = new MultiplierCard(2, "images/bless.png", true);
    this.currentDeck.addCard(blessCard);
    this.currentDeck.shuffle();
    console.log("bless card added")
  },
  addCurseCard: function(){
    var curseCard = new MultiplierCard(0, "images/curse.png", true);
    this.currentDeck.addCard(curseCard);
    this.currentDeck.shuffle();
    console.log("curse card added")
  }
}
