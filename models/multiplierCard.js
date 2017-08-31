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

MultiplierCard.prototype.causesReshuffle = function(){
  //cause reshuffle if oneTimeUse is false
  return !this.oneTimeUse;
}
