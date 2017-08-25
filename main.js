// Entry point ot application. Gets all explicity information need
// Uses the JSON file

/*
Model = card, desk, multiplierCard js files
* holds all the data objects

*/
var drawButton = document.getElementById("drawButton");
var highlightButton = document.getElementsByClassName('highlight')
var unhighlightButton = document.getElementsByClassName('unhighlight')
var cardImage = document.getElementById("imgClickAndChange");
var blessButton = document.getElementById('bless')
var curseButton = document.getElementById('curse')

var view = new ModifierDeckView(drawButton, cardImage, blessButton, curseButton);

// Create all cards from JSON file using an AJAX call
// separate to cardLoader Controller in the future
var modifierDeckController = new modifierDeckController(monstersDeck, view);


// var test2 = new Card(32, "images/bless.png", false);
// var test3 = new Card(12, "images/curse.png", false);
