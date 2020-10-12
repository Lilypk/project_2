class Card {
    constructor(suit, cardValues, score) {
        this.suit = suit
        this.cardValues = cardValues
        this.score = score
    }

}
class Deck {
    constructor() {
        this.mainDeck = []
        
       
    }
    makeDeck() {
        let suits = ['hearts', 'spades', 'clubs', 'diamonds']
        let cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < cardValues.length; j++) {

                let newCard = new Card(suits[i], cardValues[j], score[j])

                console.log(newCard)
                this.mainDeck.push(newCard)
            }
        }
        console.log(this.mainDeck)

    }
    
}
class War {
    constructor() {
        this.currentRound = 1
        this.currentCards = []
        this.playerOneDeck = []
        this.playerTwoDeck = []
    }
    shuffleDeck(deck) {
        //  console.log(deck)
        for (let i = 0; i < deck.length; i++) {
            const card = deck[i]
            const random = Math.floor(Math.random() * i)
            deck[i] = deck[random]
            deck[random] = card
        }
        // this.dealDeck(deck)
        // console.log(deck)
        let half = deck.length / 2
        this.playerOneDeck = deck.splice(0, half)
        this.playerTwoDeck = deck.splice(-half)
       
     }
    
}

let newDeck = new Deck()
newDeck.makeDeck()
let newGame = new War()

newGame.shuffleDeck(newDeck.mainDeck)
// console.log(newDeck)
//     shuffleDeck(array) {
//         var currentIndex = array.length, temporaryValue, randomIndex;


//         while (0 !== currentIndex) {


//             randomIndex = Math.floor(Math.random() * currentIndex)
//             currentIndex -= 1


//             temporaryValue = array[currentIndex]
//             array[currentIndex] = array[randomIndex]
//             array[randomIndex] = temporaryValue
//         }
//         return array
//     }
//     dealDeck(deck) {
//         let half = deck.length / 2
//         let playerOneDeck = deck.splice(0, half)
//         let playerTwoDeck = deck.splice(-half)
//         return [playerOneDeck, playerTwoDeck]
//     }
// }
// class Player {
//     constructor(name, playerDeck) {
//         this.name = name
//         this.deck = []

//     }
//     playCard() {
//         let pot = []
//         let cardInPlay1 = this.deck.shift()
//         let cardInPlay2= this.deck.shift()
//         console.log(cardInPlay1)
//         console.log(cardInPlay2)
//         return cardInPlay
//     }
//     giveThreeCards() {
//         // let warCards = this.deck.splice(this.deck.length - 3, 3)
//         // return warCards
//     }
//     receiveWinningCards(winningCards) {
//         // this.deck.unshift(...winningCards)
//     }
// }
// class Game {
//     constructor(playerOneName, playerTwoName) {
//         let d = new Deck()
//         let deckHalves = d.dealDeck(d.deck)
//         this.playerOne = new Player(playerOneName, deckHalves[0])
//         this.playerTwo = new Player(playerTwoName, deckHalves[1])
//         this.compareCards()
//         // this.playCard()

//     }

//     conductTurn() {
//         // get playCard from players 

//     }
//     compareCards() {

//         // let p1Card = this.playerOne.cardInPlay
//         // console.log(p1Card)
//         // let p2Card = this.playerTwo.cardInPlay
//         // if (p1Card.value > p2Card.value) {
//         //     this.giveWinnerCards('playerOne', [p1Card,p2Card])
//         // } else if (p1Card.value < p2Card.value) {
//         //     this.giveWinnerCards('playerTwo', [p1Card,p2Card])
//         // } else {
//         //     this.declareWar()
//         // }
//     }
//     giveWinnerCards(winnerName, winnerCards) {
//         // this[winnerName].receiveCardsForWinning[winnerCards]
//         // if(this.playerOne.deck.length == 0 || this.playerTwo.deck.length == 0) {
//         //     this.gameEnd()
//         // }
//     }
//     declareWar() {
//         // let p1WarCards = this.playerOne.warCards
//         // let p2WarCards = this.playerTwo.warCards
//         // //each player giveThreeCards
//         // //fourth card compareCards

//         //  if (p1WarCards.value > p2WarCards.value) {
//         //     this.giveWinnerCards('playerOne', [p1WarCards,p2WarCards])
//         // } else if (p1WarCards.value < p2WarCards.value) {
//         //     this.giveWinnerCards('playerTwo', [p1WarCards,p2WarCards])
//         // } else {
//         //     this.declareWar()
//         // }

//     }
//     gameEnd(winnerName) {
//         console.log(`The winner of the game is ${this[winnerName].name}!`)
//     }

// }





// // let cardReady = new Card
// // console.log(cardReady)
// // let deckReady = new Deck
// // console.log(deckReady)
// // let gameReady = new Game('playerOne', 'playerTwo')
// // console.log(gameReady)
// // let playerReady = new Player



