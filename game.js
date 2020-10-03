class Card {
        constructor(suits, cardValues) {
            this.suits = suits;
            this.cardValues = cardValues;
            
        }
    }

class Deck {
            constructor() {
                this.deck = []
                this.makeDeck()
            }
            makeDeck() {
                let suits = ['hearts', 'spades', 'clubs', 'diamonds']
                let cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
                
                for (let i = 0; i < suits.length; i++) {
                    for (let j = 0; j < cardValues.length; j++) {
                      
                        let card = {
                           suit:suits[i],
                           value:cardValues[j],
                        
                        }
                        
                        this.deck.push(card)
                    }
                    
                }
                
               
            }
               

    }
    
  
    let deckReady = new Deck
    console.log(deckReady)
    
    
class Players {
    }
class Game {
    }
