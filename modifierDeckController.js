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
}

modifierDeckController.prototype = {
  drawAndDiscardCard: function (){
    var topCard = this.currentDeck.drawCard();
    this.discardedCards.push(topCard);
    view.showACard(topCard);
    console.log("this.discardedCards deck:", this.discardedCards);
  },
  addBlessCard: function(){
    var blessCard = new MultiplierCard(2, "images/bless.png", true);
    this.currentDeck.addCard(blessCard);
    this.currentDeck.shuffle();
  },
  addCurseCard: function(){
    var curseCard = new MultiplierCard(0, "images/curse.png", true);
    this.currentDeck.addCard(curseCard);
    this.currentDeck.shuffle();
  }
}