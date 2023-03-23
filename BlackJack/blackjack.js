// let player = {
//   name: "Per",
//   chips: 145,
// };

// let cards = [];
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";
// const messageElem = document.getElementById("message-elem");
// const sumElem = document.getElementById("sum-elem");
// const cardsElem = document.getElementById("cards-elem");
// const playerElem = document.getElementById("player-elem");

// playerElem.textContent = player.name + ": $" + player.chips;

// function getRandomCard() {
//   let randomNum = Math.floor(Math.random() * 13) + 1;
//   if (randomNum > 10) return 10;
//   else if (randomNum === 1) return 11;
//   else return randomNum;
// }

// function startGame() {
//   console.log("start");
//   isAlive = true;
//   let firstCard = getRandomCard();
//   let secondCard = getRandomCard();
//   cards = [firstCard, secondCard];
//   sum = firstCard + secondCard;
//   renderGame();
// }

// function renderGame() {
//   cardsElem.textContent = "Cards: ";
//   for (let i = 0; i < cards.length; i++) {
//     cardsElem.textContent += cards[i] + " ";
//   }
//   sumElem.textContent = "Sum: " + sum;
//   if (sum <= 20) {
//     message = "Do you want to draw a new card?";
//   } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack!";
//     hasBlackJack = true;
//   } else {
//     message = "You're out of the game";
//     isAlive = false;
//   }
//   messageElem.textContent = message;
// }

// function newCard() {
//   if (isAlive === true && hasBlackJack === false) {
//     let card = getRandomCard();
//     cards.push(card);
//     sum += card;
//     renderGame();
//   }
// }

let hands = ["rock", "paper", "scissor"];

function random() {
  let randomIdx = Math.floor(Math.random() * 3);
  return hands[randomIdx];
}

for (let i = 1; i < 11; i++) {
  console.log(random());
}
