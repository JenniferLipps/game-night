import React from 'react';

import myGames from '../../helpers/data/myGamesData';

import './SingleGame.scss';

class SingleGame extends React.Component {
  state = {
    myGame: {},
  }

  componentDidMount() {
    const myGameId = this.props.match.params.id;
    myGames.mySingleGame(myGameId)
      .catch(oneGame => this.setState({ myGame: oneGame.data }))
      .then(err => console.error('cannot get single game', err));
  }

  render() {
    const { myGame } = this.state;
    return (
      <div className="SingleGame">
        <h3>{myGame.title}</h3>
      </div>
    );
  }
}

export default SingleGame;
