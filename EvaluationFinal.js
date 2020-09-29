"use strict";

class Eights {
    constructor() {
        this.deck = [];
       
        this.one = [];
        this.two = [];
        this.discardPile = [];
        this.drawPile = [];

        const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }

    shuffle() {
        const deck = this.deck;
        let k = deck.length, i;

        while (k) {
            i = Math.floor(Math.random() * k--);

            [deck[k], deck[i]] = [deck[i], deck[k]];
        }

        return this;
    }

    deal() {
        return this.deck.shift();
    }

    Player() {
        this.ones = this.deck.shift();
        this.twos = this.deck.shift();


        this.one = this.one.concat(this.ones);
        this.two = this.two.concat(this.twos);

        this.one = this.one.concat(this.deck.shift());
        this.two = this.two.concat(this.deck.shift());

        this.one = this.one.concat(this.deck.shift());
        this.two = this.two.concat(this.deck.shift());

        this.one = this.one.concat(this.deck.shift());
        this.two = this.two.concat(this.deck.shift());

        this.one = this.one.concat(this.deck.shift());
        this.two = this.two.concat(this.deck.shift());


        
    }
    Hand() {
        this.discardPile = this.discardPile.concat(this.deck.shift());
        this.drawPile = this.deck;

    }

    isDone() {
        return one.hand.isEmpty() || two.hand.isEmpty();
    }
}

const deck1 = new Eights();
//console.log(deck1.deck);
deck1.shuffle();
//console.log(deck1.deck);
//deck1.deal();
//console.log(deck1.deck);
deck1.Player();
deck1.Hand();
////console.log(deck1.deck);
console.log(deck1.one);
console.log(deck1.two);
//console.log(Object.keys(deck1.deck));
console.log(deck1.discardPile);
console.log(deck1.drawPile);
