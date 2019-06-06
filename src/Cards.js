// @flow

import { Record, List } from 'immutable';
import type { RecordFactory, RecordOf } from 'immutable';

type Status = 'open' | 'close' | 'disable';

type CardProps = { id: number, status: Status, symbol: string };
type Card = RecordOf<CardProps>;

const defaultValues: CardProps = { id: 0, status: 'close', symbol: 'a' };
const make: RecordFactory<CardProps> = Record(defaultValues);

const generate = (symbols: Array<string>): List<Card> => {
  const cards = List(symbols.concat(symbols)).sortBy(Math.random);
  return cards.map((symbol, id) => make({ id, symbol }));
};

const toggleCard = (card: Card) => {
  switch (card.status) {
    case 'open':
      return card.set('status', 'close');
    case 'close':
      return card.set('status', 'open');
    default:
      return card;
  }
};

const toggle = (i: number, cards: List<Card>): List<Card> => {
  const card = cards.get(i);
  if (card == null) {
    return cards;
  }

  return cards.set(i, toggleCard(card));
};

const isOpen = (card: Card) => card.status === 'open';

const isDisable = (card: Card) => card.status === 'disable';

function disable(card: Card): Card {
  if (this.symbol === card.symbol) {
    return card.set('status', 'disable');
  }
  return card;
}

function close(card: Card): Card {
  if (this.card1.equals(card) || this.card2.equals(card)) {
    return card.set('status', 'close');
  }
  return card;
}

export default {
  toggle, make, generate, isOpen, isDisable, disable, close,
};
export type { Card };
