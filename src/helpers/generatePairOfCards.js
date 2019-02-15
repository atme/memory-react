import Card from "../models/Card";

function generatePairOfCards(values, hasToShuffle) {
    hasToShuffle = (hasToShuffle === true); //always false if not true

    let cards = values.concat(values);
    if (hasToShuffle) {
        cards = shuffle(cards);
    }

    return cards.map((value) => {
        return new Card(value);
    });
}

function shuffle(values) {
    const length = values.length;
    for (let i = 0; i < length; i++) {
        const position = getRandomInt(length);

        const temp = values[i];
        values[i] = values[position];
        values[position] = temp;
    }
    return values;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default generatePairOfCards;