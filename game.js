class Card {
    constructor(suits, cardValues) {
        this.suits = suits
        this.cardValues = cardValues
        this.distributeCards()
        }
    distributeCards() {
        let playerOne = []
        let playerTwo = []
        this.playerOne = deck.splice(0,26)
        this.playerTwo = deck.splice(0,26)
       
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
   
  
}

class Players {
    constructor(playerDeck) {
        this.name = []
        this.playerDeck = playerDeck
    }
    

}
let deckReady = new Deck
console.log(deckReady)
let cardReady = new Card
console.log(cardReady)



