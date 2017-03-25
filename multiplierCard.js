var MultiplierCard = function(value, img, oneTimeUse) {
  // Card.call(this, value, img, oneTimeUse);
  Card.apply(this, [value, img, oneTimeUse]);
};

// inherit Card
MultiplierCard.prototype = Object.create(Card.prototype);

// correct the constructor pointer because it points to Card
MultiplierCard.prototype.constructor = MultiplierCard;

// replace the calculateDamage method set on Card.prototype
MultiplierCard.prototype.calculateDamage = function(attackValue){
  return attackValue * this.value;
}

var multiplierCardTest = new MultiplierCard(5, "hi.png", true);
multiplierCardTest.calculateDamage(5);