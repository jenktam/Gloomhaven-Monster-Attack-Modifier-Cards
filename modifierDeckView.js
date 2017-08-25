/*
view: layer with the webpage that the user sees
*/
var ModifierDeckView = function(drawButton, cardImage, blessButton, curseButton) {
  this.drawButton = drawButton;
  this.cardImage = cardImage;
  this.blessButton = blessButton;
  this.curseButton = curseButton;
}

ModifierDeckView.prototype = {
  showACard: function(card){
    this.cardImage.src = card.img;
  },

  addDrawEventListener: function(fnc) {
    this.drawButton.addEventListener('click', () => {
      this.drawButton.classList.add('highlight')
      setTimeout( function() {
        this.drawButton.classList.remove('highlight')
      }, 100)

      fnc()

    });

  },

  addBlessCardEventListener: function(fnc){
    this.blessButton.addEventListener('click', fnc)
  },

  addCurseCardEventListener: function(fnc){
    this.curseButton.addEventListener('click', fnc)
  },

}

/*
elements: {
  drawButton: html element
  addBlessButton: html element
  addCurseButton: html element
  reshuffleButton: html element
  cardImage: html element
}

player reshuffles when gets a 2x or a null card

*/

