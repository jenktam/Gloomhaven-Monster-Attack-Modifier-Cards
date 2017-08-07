var Card = function(value, img, oneTimeUse) {
  this.value = value; 
  this.img = img;
  this.oneTimeUse = oneTimeUse;
}

Card.prototype = {
  calculateDamage: function(attackValue) {
    return attackValue + this.value;
  }
}

/*var test = new Card(1, "1.png", false);
var test1 = new Card(2, "2.png", false);*/