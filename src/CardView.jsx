// @flow

import React from 'react';
import type { Card } from './Cards';

type CardProps = { card: Card, handleClick: Function };

function CardView(props: CardProps) {
  const { card, handleClick } = props;

  const classes = [
    'card',
    card.status !== 'close' ? 'show' : '',
    card.status === 'disable' ? 'disabled' : '',
  ].join(' ');

  return (
    <div className={classes} onClick={handleClick}>
      <div className="flipper">
        <div className="card__front">?</div>
        <div className="card__back">{card.symbol}</div>
      </div>
    </div>
  );
}

export default CardView;
