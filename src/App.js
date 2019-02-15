import React from 'react';
import './App.css';

function App(props) {
    return props.game.getCards().map((card, i) => {
        return <Card game={props.game} card={card} index={i} key={i} />
    });
}

function Card(props) {
    const game = props.game;
    const card = props.card;
    const i = props.index;

    const boxClass = [
        "card",
        card.isOpened() || card.isDeactivated() ? 'show' : '',
        card.isDeactivated() ? 'disabled' : ''
    ];

    return (
      <div className={boxClass.join(' ')} onClick={game.onPress.bind(game, i)}>
        <div className="flipper">
          <div className="card__front">?</div>
          <div className="card__back">{card.getValue()}</div>
        </div>
      </div>
    );
}

export default App;