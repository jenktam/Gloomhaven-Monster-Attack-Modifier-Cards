/*
view:
* layer with the webpage that the user sees
* includes any actions that manipulate the DOM
*/

var ModifierDeckView = function(drawButton, cardImage, blessButton, curseButton, addedDiv) {
  this.drawButton = drawButton;
  this.cardImage = cardImage;
  this.blessButton = blessButton;
  this.curseButton = curseButton;
  this.addedDiv = addedDiv;
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
    this.blessButton.addEventListener('click', () => {

      fnc() //add bless card

      this.addedDiv.textContent = 'Bless card added!' //add text
      this.addedDiv.style.textShadow = "1px 2px 3px black";
      this.addedDiv.style.background = "#951515";

      // set timer to remove text after 1/2 second
      setTimeout( () => {
        this.addedDiv.innerText = ''
        this.addedDiv.style.background = "white"
        this.addedDiv.style.boxShadow = "none"
    }, 500)

    })
  },

  addCurseCardEventListener: function(fnc){
    this.curseButton.addEventListener('click', () => {

      fnc() //add bless card

      this.addedDiv.textContent = 'Curse card added!' //add text
      this.addedDiv.style.textShadow = "1px 2px 3px black";
      this.addedDiv.style.background = "#951515";

      // set timer to remove text after 1/2 second
      setTimeout( () =>{
        this.addedDiv.innerText = '';
        this.addedDiv.style.background = "white"
        this.addedDiv.style.boxShadow = "none"
      }, 500)

    })
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

