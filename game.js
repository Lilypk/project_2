class Card {
        constructor(suits, cardNames, cardValues) {
            this.suits = suit;
            this.cardNames = rank;
            this.cardValues = score;
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
                        var card = {
                           value: cardValues[j],
                           suit: suits[i]
                           
                        }
                    }
                    return deck
                }
            }
    }
    const deckReady = new Deck()
    console.log(deckReady.deck)

