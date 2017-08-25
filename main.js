// Entry point ot application. Gets all explicity information need
// Uses the JSON file

/*
Model = card, desk, multiplierCard js files
holds all the data objects

*/
var drawButton = document.getElementById("drawButton");
//...
var cardImage = document.getElementById("imgClickAndChange");

var view = new ModifierDeckView(drawButton, cardImage);

var test2 = new Card(32, "images/bless.png", false);
var test3 = new Card(12, "images/curse.png", false);

var modifierDeckController = new modifierDeckController([test2, test3],view);
