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
        this.playerDeck = playerDeck
    }
    

}
class Game {
    constructor(playerOneName, playerTwoName) {
        let d = new Deck()
        let deckHalves = d.dealDeck(d.deck)
        this.playerOne = new Player(playerOneName, deckHalves[0]) 
        this.playerTwo = new Player(playerTwoName, deckHalves[1])
        }
}


let cardReady = new Card
console.log(cardReady)
let deckReady = new Deck
console.log(deckReady)
let gameReady = new Game('Lily', 'Computer') 
console.log(gameReady)
