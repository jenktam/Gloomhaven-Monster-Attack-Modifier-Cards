var ModifierDeckView = function(elements) {
  this.elements = elements;
}

ModifierDeckView.prototype = {
  showACard: function(card){
    var cardImage = elements["cardImage"];
    cardImage.src = card["img"];
  }
}

/*
elements: {
  drawButton: html element
  addBlessButton: html element
  addCurseButton: html element
  reshuffleButton: html element
  cardImage: html element
}

functions to implement:
showACard(Card)
*/

