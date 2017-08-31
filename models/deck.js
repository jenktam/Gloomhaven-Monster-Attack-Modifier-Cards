var Deck = function() {
  this._cards = [];
};

Deck.prototype = {
  shuffle: function() {
    for(var i = this._cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
		  var temp = this._cards[i];
	  	this._cards[i] = this._cards[j];
		  this._cards[j] = temp;
    }
    // console.log("this._cards:", JSON.stringify(this._cards));
  },
  addCard: function(card) {
    this._cards.push(card);
  },
  drawCard: function() {
    var topCard = this._cards[0];
    this._cards = this._cards.splice(1);
    return topCard;
  }
};
