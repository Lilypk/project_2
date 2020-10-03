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
                let cardNames = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace']
                let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]
                for (let i = 0; i < suits.length; i++) {
                    for (let j = 0; j < cardNames.length; j++) {
                        let card = {
                            suit:suits[i],
                            name:cardNames[j],
                            values:cardValues[j]
                        }
                    }
                }
            }
    }
    const deckReady = new Deck()
    console.log(deckReady.deck)

