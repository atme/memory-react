import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const game = this.props.game;
    return (
      <div className="game">
        {game.getCards().map((card, i) => {
          let boxClass = ["card"];
          if(card.isOpened() || card.isDeactivated()) {
            boxClass.push('show');
          }

          if(card.isDeactivated()) {
            boxClass.push('disabled');
          }
          
          return (
            <div className={boxClass.join(' ')}
                 onClick={game.onPress.bind(game, i)}
            >
              <div className="flipper">
                <div className="card__front">?</div>
                <div className="card__back">{card.getValue()}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;