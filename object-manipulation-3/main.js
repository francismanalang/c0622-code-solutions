console.log('Lodash is loaded:', typeof _ !== 'undefined');

// Create an array of objects that contain the player names and hand
// make a array of card suits and assign it to the variable suits
// make a array of card values and assign it to the variable values
// make an empty array and assign it to the variable deck
// make a for loop that iterates through the suits array
// make another for loop within the code block that iterates through the values array
// push an object into the deck array that contains the rank from the values array and a suit from the suits array
// shuffle the deck using the lodash _.shuffle function and assign it to the variable shuffled deck
// make an empty array and assign it to the variable playerScores
// make a for loop that iterates through the players array
// deal two cards to each player from the deck array and delete the card that was deleted to prevent players from having duplicated cards
// within the code block, make another for loop that iterates through the hand array within the players object
// write an if statement that converts the strings "Jack", "Queen", and "King" to have a value of 10
// write an else if statement that turns the string "Ace" to have a value of 11
// within the first for loop, push an object in the playerScore array that contains the score (total value of the hand) and the player name
// make null an assign it to the variable winner
// make the number 0 and assign it to the variable highestScore
// make a for loop that iterates through the playerScore array to find the highest score out of all four players
// write another if statement that checks if the highest score is equal to any of the player score
// When it finds the match, set the name of the player equal to the variable winner
// log the variable winner into the console

var players = [
  {
    name: 'Francis',
    hand: []
  },
  {
    name: 'Tarra',
    hand: []
  },
  {
    name: 'Fred',
    hand: []
  },
  {
    name: 'Alvin',
    hand: []
  }
];

var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var deck = [];

for (var i = 0; i < suits.length; i++) {
  for (var n = 0; n < values.length; n++) {
    deck.push({
      rank: values[n],
      suit: suits[i]
    });
  }
}

var shuffledDeck = _.shuffle(deck);
var playerScores = [];
for (var d = 0; d < players.length; d++) {
  players[d].hand.push(shuffledDeck[0]);
  shuffledDeck.splice(0, 1);
  players[d].hand.push(shuffledDeck[1]);
  shuffledDeck.splice(1, 1);
  for (var r = 0; r < players[d].hand.length; r++) {
    if (players[d].hand[r].rank === 'Jack' || players[d].hand[r].rank === 'Queen' || players[d].hand[r].rank === 'King') {
      players[d].hand[r].rank = 10;
    } else if (players[d].hand[r].rank === 'Ace') {
      players[d].hand[r].rank = 11;
    }
  }
  playerScores.push({
    score: players[d].hand[0].rank + players[d].hand[1].rank,
    name: players[d].name
  });
}

var winner = null;
var highestScore = 0;
for (var w = 0; w < playerScores.length; w++) {
  if (playerScores[w].score > highestScore) {
    highestScore = playerScores[w].score;
  }
  if (highestScore === playerScores[w].score) {
    winner = playerScores[w].name;
  }
}

console.log('Winner:', winner);
