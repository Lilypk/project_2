class Card {
    constructor(suits, cardValues) {
        this.suits = suits
        this.cardValues = cardValues

    }


}
class Deck {
    constructor() {
        this.deck = []
        this.makeDeck()
        this.shuffleDeck(this.deck)


    }
    makeDeck() {
        let suits = ['hearts', 'spades', 'clubs', 'diamonds']
        let cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < cardValues.length; j++) {

                let card = {
                    suit: suits[i],
                    value: cardValues[j],

                }

                this.deck.push(card)
            }

        }


    }
    shuffleDeck(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;


        while (0 !== currentIndex) {


            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1


            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }
        return array
    }
    dealDeck(deck) {
        let half = deck.length / 2
        let playerOneDeck = deck.splice(0, half)
        let playerTwoDeck = deck.splice(-half)
        return [playerOneDeck, playerTwoDeck]
    }

}
class Player {
    constructor(name, playerDeck) {
        this.name = []
        this.deck = playerDeck
        this.roundsWon = 0
    }
    getRemainingCards() {
        //how many cards do they have left
    }
    playCard() {
        let cardInPlay = this.deck.pop()
        return cardInPlay
    }
    giveThreeCards() {
    }
    receiveCardsForWinning() {
        //how the winning cards are given to the player
    }

}
class Game {
    constructor(playerOneName, playerTwoName) {
        let d = new Deck()
        let deckHalves = d.dealDeck(d.deck)
        this.playerOne = new Player(playerOneName, deckHalves[0])
        this.playerTwo = new Player(playerTwoName, deckHalves[1])
        
    }
    conductTurn() {
        //get cards from players
    }
    compareCards() {
        let p1Card = this.playerOne.cardInPlay
        let p2Card = this.playerTwo.cardInPlay
        if (p1Card.value > p2Card.value) {
            this.giveWinnerCards('playerOne', [p1Card,p2Card])
        } else if (p1Card.value < p2Card.value) {
            this.giveWinnerCards('playerTwo', [p1Card,p2Card])
        } else {
            //declareWar
        }

    }
    giveWinnerCards() {
        //how the winning cards get to the winner
    }
    declareWar() {
        //each player giveThreeCards
        //fourth card compareCards
        //if one is greater, giveWinnerCards
        //if they are equal, giveThreeCards, fourth card compareCards
    }
    gameEnd() {
        //one player has all 52 cards, they win
    }
}


let cardReady = new Card
console.log(cardReady)
let deckReady = new Deck
console.log(deckReady)
let gameReady = new Game('playerOne', 'playerTwo')
console.log(gameReady)
let playerReady = new Player


