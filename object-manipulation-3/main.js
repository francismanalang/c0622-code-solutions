console.log('Lodash is loaded:', typeof _ !== 'undefined');

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
