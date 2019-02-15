class Game {
    constructor(cards, callbackUpdate) {
        this.openedCard = null;
        this.cards = cards;
        this.updated = callbackUpdate;

        this.updated();
    }

    getCards() {
        return this.cards;
    }

    onPress(index) {
        this.toggleCard(index);
        setTimeout(() => {
            this.compareCards(index);
        }, 1000);
    }
  
    toggleCard(index) {
        const card = this.cards[index];
        if (!card.isDeactivated()) {
            card.toggle();
            this.updated();
        }
    }
  
    compareCards(index) {
        if (this.openedCard === null) {
            this.openedCard = index;
            return;
        }
  
        if (index === this.openedCard) {
            this.openedCard = null;
            return;
        }

        const card = this.cards[index];
        const openedCard = this.cards[this.openedCard];
  
        if (card.isEqual(openedCard)){
            card.deactivate();
            openedCard.deactivate();
            this.openedCard = null;
        } else {
            card.close();
            openedCard.close();
            this.openedCard = null;
        }
        this.updated();
    }

}

export default Game;