// Testing
// {
	 // var h1 = document.querySelector("h1");
	 // h1.style.color = "pink";

	 // var body = document.querySelector("body");
	 // var isBlue = false;

	 // setInterval(function() {
	 // 	if(isBlue) {
	 // 		body.style.background = "white";
	 // 	} else {
	 // 		body.style.background = "#2498db";
	 // 	}
	 // 	isBlue = !isBlue;
	 // }, 1000);

	 var button = document.querySelector("button");
	 button.addEventListener("click", function() {
	 	console.log(drawTopCard(shuffleDeck(allCards)));
	 });

	// }


// create variable objects for each card
var allCards = [
];

function addCards(cardPool,value,count){
	var obj = {};
	for(var i = 0; i < count; i++) {
		obj["value"] = value;
		cardPool.push(obj);
	}
	return cardPool;
}

// initialize deck
function init(cardPool) {
	addCards(cardPool, 0, 1)
	addCards(cardPool, -2, 1);
	addCards(cardPool, -1, 5);
	addCards(cardPool, 0, 6);
	addCards(cardPool, 1, 5);
	addCards(cardPool, 2, 1);
	addCards(cardPool, "2x", 1);
	shuffleDeck(cardPool);
}

init(allCards);

// console.log("allCards:", allCards);

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

// console.log("shuffleDeck(allCards):", shuffleDeck(allCards));

function drawTopCard(shuffledPool) {
	var chosenCard = 0;
	chosenCard = shuffledPool[0];
	if(chosenCard["value"] === 0 || chosenCard["value"] === "2x" || shuffledPool.length === 0) {
		shuffledPool.length = 0;
		chosenCard;
		init(shuffledPool);
	}
	else {
		// console.log("shuffledPool1:", shuffledPool);
		shuffledPool.splice(0,1);
		// console.log("shuffledPool2:", shuffledPool);
		}
	return chosenCard;
}


console.log(drawTopCard(shuffleDeck(allCards)));