// Entry point ot application. Gets all explicity information need
// Uses the JSON file

var drawButton = document.getElementById("drawButton");
//...
var cardImage = document.getElementById("imgClickAndChange");
var elements = {
  drawButton: drawButton,
  cardImage: cardImage
};

var view = new ModifierDeckView(elements);

var test2 = new Card(32, "images/bless.png", false);
var test3 = new Card(12, "images/curse.png", false);

var newModifierDeckController = new modifierDeckController([test2, test3],view);