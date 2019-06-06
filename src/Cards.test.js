// @flow

import { List } from 'immutable';
import Cards from './Cards';

test('Card.generatedList doubles values of cards', () => {
  const list = Cards.generate(['a', 'b']);
  expect(list.size).toBe(4);
});

test('Card.generatedList contains a input value', () => {
  const symbol = 't';
  const list = Cards.generate([symbol]);
  const card = Cards.make({ symbol });
  expect(list).toContainEqual(card);
});

test('Card.toggle opens a closed card', () => {
  const card = Cards.make({ status: 'close', symbol: 'a' });
  const cards = List([card]);
  expect(Cards.toggle(0, cards).get(0, card).status).toBe('open');
});

test('Card.toggle closes a opened card', () => {
  const card = Cards.make({ status: 'open', symbol: 'a' });
  const cards = List([card]);
  expect(Cards.toggle(0, cards).get(0, card).status).toBe('close');
});

test('Cards.toggle does nothing with a disabled card', () => {
  const card = Cards.make({ status: 'disable', symbol: 'a' });
  const cards = List([card]);
  expect(Cards.toggle(0, cards).get(0, card).status).toBe('disable');
});

test('Cards.isOpen checks if opened card is open', () => {
  const card = Cards.make({ status: 'open', symbol: 'a' });
  expect(Cards.isOpen(card)).toBeTruthy();
});

test('Cards.isOpen checks if closed card is not open', () => {
  const card = Cards.make({ status: 'close', symbol: 'a' });
  expect(Cards.isOpen(card)).toBeFalsy();
});

test('Cards.isDisable checks if disabled card is disable', () => {
  const card = Cards.make({ status: 'disable', symbol: 'a' });
  expect(Cards.isDisable(card)).toBeTruthy();
});

test('Cards.isDisable checks if disabled card is not disable', () => {
  const card = Cards.make({ status: 'close', symbol: 'a' });
  expect(Cards.isDisable(card)).toBeFalsy();
});
