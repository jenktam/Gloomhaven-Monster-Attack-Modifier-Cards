var Card = function(value, img, oneTimeUse) {
  this.value = value;
  this.img = img;
  this.oneTimeUse = oneTimeUse;
}

Card.prototype = {
  calculateDamage: function(attackValue) {
    return attackValue + this.value;
  },

  causesReshuffle: function(){
    return false;
  }
}
