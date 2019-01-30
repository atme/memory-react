const Status = {
    closed: 0,
    opened: 1,
    deactivated: 2
}

class Card {
    constructor(value) {
        this.status = Status.closed;
        this.value = value;
    }

    open () {
        this.status = Status.opened;
    }

    close() {
        this.status = Status.closed;
    }

    toggle() {
        if (this.isOpened()) {
            this.close();
        } else {
            this.open();
        }
    }

    isEqual(card) {
        return this.value === card.value;
    }

    isOpened() {
        return this.status === Status.opened;
    }

    isClosed() {
        return this.status === Status.closed;
    }

    deactivate() {
        this.status = Status.deactivated;
    }

    isDeactivated() {
        return this.status === Status.deactivated;
    }

    getValue() {
        return this.value;
    }
}

export default Card;