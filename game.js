class Card {
        constructor(suits, cardValues) {
            this.suits = suit;
            this.cardValues = value;
        }
    }

class Deck {
            constructor() {
                this.deck = []
            }
            makeDeck() {
                let suits = ['hearts', 'spades', 'clubs', 'diamonds']
                let cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
                for (let i = 0; i < suits.length; i++) {
                    for (let j = 0; j < cardValues.length; j++) {
                        let card = {
                           suit:suits[i],
                           value:cardValues[j]
                           
                        }
                        deck.push(card)
                    }
                    
                }
                return deck
            }
            
    }
    const deckReady = new Deck
    console.log(deckReady.deck)
    
    
class Players {
    }
class Game {
    }
