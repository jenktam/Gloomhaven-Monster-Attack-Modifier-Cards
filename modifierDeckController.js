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

  //executes all logic functions and renders them into the DOM using the modifierDeckView fns
  view.addDrawEventListener(self.drawAndDiscardCard.bind(self))

  view.addBlessCardEventListener(self.addBlessCard.bind(self))

  view.addCurseCardEventListener(self.addCurseCard.bind(self))
}

modifierDeckController.prototype = {
  drawAndDiscardCard: function (){
    var topCard = this.currentDeck.drawCard(); //draw topCard from currentDeck

    //as long as topCard is a not bless or curse card, add it to the discardedCards
    if(topCard.oneTimeUse === false) {
      this.discardedCards.push(topCard); //once topCard drawn push it to the discardedDeck
    }

    view.showACard(topCard); //then show the topCard in the DOM

    //put discarded cards back in currentDeck and reshuffle if
    //1)topCard is a 2x or a null card
    //2) this.currentDeck is empty
    if(topCard.type === "multiplier" || !this.currentDeck._cards.length) {
      this.currentDeck._cards = this.currentDeck._cards.concat(this.discardedCards);
      this.discardedCards = []; //reset discardedCards to empty array
      this.currentDeck.shuffle();
    }
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
  },
}
