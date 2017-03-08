// create variable objects for each card
var allCards = [
];

function addCards(cardPool,value,count, image){
	var obj = {};
	for(var i = 0; i < count; i++) {
		obj["value"] = value;
		obj["image"] = image;
		cardPool.push(obj);
	}
	return cardPool;
}

// initialize deck
function init(cardPool) {
	addCards(cardPool, "null", 1, "images/null.png");
	addCards(cardPool, -2, 1, "images/-2.png");
	addCards(cardPool, -1, 5, "images/-1.png");
	addCards(cardPool, 0, 6, "images/0.png");
	addCards(cardPool, 1, 5, "images/1.png");
	addCards(cardPool, 2, 1, "images/2.png");
	addCards(cardPool, "2x", 1, "images/2x.png");
	shuffleDeck(cardPool);
}

init(allCards);

// shuffle deck
function shuffleDeck(cardPool) {
	for(var i = cardPool.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = cardPool[i];
		cardPool[i] = cardPool[j];
		cardPool[j] = temp;
	}
	return cardPool;
}

function drawTopCard(shuffledPool, discardPool) {
	var chosenCard = 0;
	chosenCard = shuffledPool[0];
	if(chosenCard === undefined) {
		init(shuffledPool);
	}
	else if(chosenCard["value"] === "null" || chosenCard["value"] === "2x" || shuffledPool.length === 0) {
		shuffledPool.push.apply(shuffledPool,discardPool);
		discardPool.length = 0;
		shuffleDeck(shuffledPool);
		console.log("shuffledPool2:", JSON.stringify(shuffledPool));
	}
	else {
		shuffledPool.splice(0,1);
		if(!(chosenCard["value"] === "bless" || chosenCard["value"] === "curse")) {
			discardPool.push(chosenCard);
		}
		console.log("shuffledPool2:", JSON.stringify(shuffledPool));
	}
	return chosenCard;
}

var shuffledDeck = shuffleDeck(allCards);
var discardedCards = [];
var originalImage = document.getElementById("imgClickAndChange");

// Change card based on used click
var img = document.querySelector("img");
img.addEventListener("click", function() {
	var chosenCard = drawTopCard(shuffledDeck, discardedCards);
	console.log(chosenCard);
	originalImage.src = chosenCard["image"];
	console.log("discardedCards:", JSON.stringify(discardedCards));
});

// Add bless card
var bless = document.getElementById("bless");
bless.addEventListener("click", function() {
	addCards(allCards, "bless", 1, "images/bless.png");
	shuffleDeck(allCards);
	console.log("shuffledDeck:", JSON.stringify(shuffledDeck));
});

// Add curse card
var curse = document.getElementById("curse");
curse.addEventListener("click", function() {
	addCards(allCards, "curse", 1, "images/curse.png");
	shuffleDeck(allCards);
});
