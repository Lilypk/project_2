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
        this.shuffle(this.deck)
        this.splitDeck(this.deck)
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
    shuffle(array) {
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
    splitDeck(deck) {
        let half = deck.length / 2
        let firstHalf = deck.splice(0, half)
        let secondHalf = deck.splice(-half)
        
        console.log(firstHalf,secondHalf)
    }
    
}

let deckReady = new Deck
console.log(deckReady)

class Players {
    constructor(name, playerDeck) {
        this.name = name
        this.playerDeck = playerDeck
    }
}




