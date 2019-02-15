import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Game from './models/Game';
import generatePairOfCards from './helpers/generatePairOfCards';

const cards = generatePairOfCards([
    "🎃", "👾", "👽", "🤖", "👑", "🐷"
], true);

const update = function() {
    ReactDOM.render(<App game={this}/>, document.getElementById('root'));
};

new Game(cards, update);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
