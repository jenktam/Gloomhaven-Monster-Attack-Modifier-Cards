// 1)
// Figure out how many cards of each type in deck
// 1xnull
// 1x -2
// 5x -1
// 6x +0
// 5x +1
// 1x +2
// 1x double
// base deck total = 20;

// // create variables for card types

// Card Object
// {
// 	value: integer
// }

var allCards = [
	{
		value: 0
	},
	{
		value: 0
	}
];

function addCards(cardPool,value,count){
	var obj = {};
	for(var i = 0; i < count; i++) {
		obj["value"] = value;
		cardPool.push(obj);
	}
	return cardPool;
}

addCards(allCards, 0, 1)
addCards(allCards, -2, 1);
addCards(allCards, -1, 5);
addCards(allCards, 0, 6);
addCards(allCards, 1, 5);
addCards(allCards, 2), 1;
addCards(allCards, "2n", 1);
console.log(allCards);


var allCards = [
	{null: [0]},
	{minuteTwo: [-2]},
	{minusOne: [-1,-1,-1,-1,-1]},
	{zero: [0,0,0,0,0,0]},
	{plusOne: [1,1,1,1,1]},
	{plusTwo: [2,10, 123]}, //remove 10 in the future
	{double: [2]} //Update later. should be 2x
];

// generate random card from pile of cards
	// var randomJob = JobArray[Math.floor(Math.random() * JobArray.length)];

function getMaxDeckCardLength(arr) {
	var maxCardLength = 0;

	for(var i = 0; i < arr.length; i++) {
		var obj = arr[i];
		for(var key in obj) {
			var values = obj[key];
			maxCardLength += values.length; //should be 20
			// console.log("maxCardLength:", maxCardLength);
		}
	}
	return maxCardLength;
}

console.log("getMaxDeckCardLength(allCards):", getMaxDeckCardLength(allCards));

function addCardsToConsolidatedArray(arr) {
	var collection = [];
	//look inside array of objects and randomly generate card
	for(var i = 0; i < arr.length; i++) {
		var obj = arr[i];
		for(var key in obj) {
			var values = obj[key];
			for(var j = 0; j < values.length; j++) {
				randomCard = values[Math.floor(Math.random() * values.length)];
				collection.push(randomCard);
				// totalCardsLeft -= 1;
				// console.log("totalCardsLeft:", totalCardsLeft);
			}
			// console.log("values.length:", values.length);
			// maxCardLength += values.length; //should be 20
			// console.log("maxCardLength:", maxCardLength);
		}
	}
	return collection;
}

console.log("addCardsToConsolidatedArray(allCards):", addCardsToConsolidatedArray(allCards));




function shuffleDeck(arr) {
	var chosenCard = 0;
	var baseDeckLength = getMaxDeckCardLength(arr);
	var totalCardsLeft = baseDeckLength;
	var nonRandomizedArray = addCardsToConsolidatedArray(arr);
	var randomCollection = [];
	//look inside array of objects and randomly generate card
	for(var i = 0; i < nonRandomizedArray.length; i++) {
		chosenCard = nonRandomizedArray[Math.floor(Math.random() * nonRandomizedArray.length)];
		randomCollection.push(chosenCard);
		// console.log("randomCollection:", randomCollection);
		totalCardsLeft -= 1;
		chosenCard = randomCollection[0];
		// var deleted = remove(nonRandomizedArray, randomCollection);
		// console.log("deleted:", deleted);
		// console.log("nonRandomizedArray:", nonRandomizedArray);
	}
	// var deleted = remove(randomCollection);
	// // console.log(collection.length);
	// console.log("randomCollection:", randomCollection);
	// console.log("chosenCard:", chosenCard);
	return randomCollection;
}

var shuffledDeck = shuffleDeck(allCards);

function drawTopCard(shuffledDeck) {
	var chosenCard = 0;
	chosenCard = shuffledDeck[0];
	shuffledDeck.splice(0,1);
	return chosenCard;
}

console.log("shuffledDeck:", shuffledDeck);
console.log(drawTopCard(shuffledDeck));
console.log("shuffledDeck:", shuffledDeck);

// Remove chosen card from randomCollection that used will keep drawing from
// function remove(arr1, arr2) {
// 	return arr1.splice(arr2[0], 1);
// }

// console.log("remove(allCards):", remove(allCards));

/* create a function that will look at all of the cards within 
the number of cards left in the battle stack 
and choose a random card based on one drawn
*/

// de-increment cards and remove card that already drew

function randomizeCards(numCards) {

}


// Find designs or use overlay for cards an modifier numbers