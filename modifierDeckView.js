/*
view: layer with the webpage that the user sees
*/
var ModifierDeckView = function(drawButton, cardImage) {
  this.drawButton = drawButton;
  this.cardImage = cardImage;
}

ModifierDeckView.prototype = {
  showACard: function(card){
    this.cardImage.src = card.img;
  },

  addDrawEventListener: function(fnc) {
    this.drawButton.addEventListener('click', fnc);
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

