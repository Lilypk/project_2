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

                // console.log(newCard)
                this.mainDeck.push(newCard)
            }
        }
        // console.log(this.mainDeck)

    }
    
}
class War {
    constructor() {
        this.currentRound = 0
        this.currentCards = []
        this.playerOne = {
            playerDeck: [],
            cardsInPlay: []
        }
        this.playerTwo = {
            playerDeck: [],
            cardsInPlay: []
        }
       
    }
    shuffleDeck(deck) {
         console.log(deck)
        for (let i = 0; i < deck.length; i++) {
            const card = deck[i]
            const random = Math.floor(Math.random() * i)
            deck[i] = deck[random]
            deck[random] = card
        }
        
        let half = deck.length / 2
        
        this.playerOne.playerDeck = deck.splice(0, half)
        this.playerTwo.playerDeck = deck.splice(-half)
      
       
     }
    compareCards() {
        if (this.playerOne.playerDeck.length < 1 || this.playerTwo.playerDeck.length < 1) {
            
           console.log('end game')

        }
        else {
            this.playerOne.cardsInPlay.unshift(this.playerOne.playerDeck.shift())
            this.playerTwo.cardsInPlay.unshift(this.playerTwo.playerDeck.shift())
            
            if (this.playerOne.cardsInPlay[0].score > this.playerTwo.cardsInPlay[0].score) {
                console.log('Player one wins this round', `p1: ${this.playerOne.cardsInPlay[0].score}`, `p2: ${this.playerTwo.cardsInPlay[0].score}`)
                this.playerOne.playerDeck.push(this.playerOne.cardsInPlay.shift())
                this.playerOne.playerDeck.push(this.playerTwo.cardsInPlay.shift())
                console.log(this.playerOne.playerDeck, this.playerTwo.playerDeck)
            } else if (this.playerOne.cardsInPlay[0].score < this.playerTwo.cardsInPlay[0].score) {
                console.log('Player two wins this round', `p1: ${this.playerOne.cardsInPlay[0].score}`, `p2: ${this.playerTwo.cardsInPlay[0].score}`)
                this.playerTwo.playerDeck.push(this.playerTwo.cardsInPlay.shift())
                this.playerTwo.playerDeck.push(this.playerOne.cardsInPlay.shift())
                console.log(this.playerOne.playerDeck, this.playerTwo.playerDeck)
              
            } else {
                
                this.war()
                
            } 
        }
        
        console.log(this.currentRound++)
} 
war() {
    if (this.playerOne.playerDeck.length < 4 || this.playerTwo.playerDeck.length < 4) {
        //end
    }

    else {
        console.log('War is happening')
        this.playerOne.cardsInPlay.unshift(this.playerOne.playerDeck.splice(0, 4))
        this.playerTwo.cardsInPlay.unshift(this.playerTwo.playerDeck.splice(0, 4))
        if (this.playerOne.cardsInPlay[0].score > this.playerTwo.cardsInPlay[0].score) {
            console.log('Player one wins this round of war', `p1: ${this.playerOne.cardsInPlay[0].score}`, `p2: ${this.playerTwo.cardsInPlay[0].score}`)
            this.playerOne.playerDeck.push(this.playerOne.cardsInPlay.shift())
            this.playerOne.playerDeck.push(this.playerTwo.cardsInPlay.shift())

        } else if (this.playerOne.cardsInPlay[0].score < this.playerTwo.cardsInPlay[0].score) {
            console.log('Player two wins this round of war', `p1: ${this.playerOne.cardsInPlay[0].score}`, `p2: ${this.playerTwo.cardsInPlay[0].score}`)
            this.playerTwo.playerDeck.push(this.playerTwo.cardsInPlay.shift())
            this.playerTwo.playerDeck.push(this.playerOne.cardsInPlay.shift())
        } else {
            this.war()
        }
    
 
}
}
}

let newDeck = new Deck()
newDeck.makeDeck()
let newGame = new War()

newGame.shuffleDeck(newDeck.mainDeck)





