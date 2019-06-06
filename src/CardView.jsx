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

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="flipper">
        <div className="card__front">?</div>
        <div className="card__back">{card.symbol}</div>
      </div>
    </div>
  );
}

export default CardView;
