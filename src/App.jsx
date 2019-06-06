// @flow

import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './Cards';
import Card from './CardView';

function App() {
  const cardsInitial = Cards.generate(['🦋', '🐼', '🐠', '🐲', '🐘', '🦁']);
  const [cards, setCards] = useState(cardsInitial);

  const handleClick = (i) => {
    const openedCards = cards.filter(Cards.isOpen);
    if (openedCards.size < 2) {
      setCards(prevCards => Cards.toggle(i, prevCards));
    }
  };

  useEffect(() => {
    const openedCards = cards.filter(Cards.isOpen);
    const [card1, card2] = [openedCards.get(0), openedCards.get(1)];
    if (card1 == null || card2 == null) {
      return;
    }

    if (card1.symbol === card2.symbol) {
      const { symbol } = card1;
      setCards(cards.map(Cards.disable, { symbol }));
    } else {
      setTimeout(() => {
        setCards(cards.map(Cards.close, { card1, card2 }));
      }, 900);
    }
  }, [cards]);

  useEffect(() => {
    const disabledCards = cards.filter(Cards.isDisable);
    if (disabledCards.size === cards.size) {
      alert('Congratulation! You won!');
    }
  }, [cards]);

  return cards.map((card, i) => (
    <Card
      card={card}
      key={card.id}
      handleClick={() => handleClick(i)}
    />
  ));
}

export default App;
