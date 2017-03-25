var modifierDeckController = function(startingCardArray){
  this.discardedCards = new Deck();
  this.currentDeck = new Deck();

  var self = this;

  function initializeDeck(startingCardArray) {
    startingCardArray.forEach(function(card){
      self.currentDeck.addCard(card);
    });
  }

  initializeDeck(startingCardArray);
}

var test2 = new Card(32, "1.png", false);
var test3 = new Card(12, "22.png", false);

var newModifierDeckController = new modifierDeckController([test2, test3]);