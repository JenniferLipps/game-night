import React from 'react';
import allGameTypes from '../../helpers/data/gameTypesData';
import Types from '../Types/Types';

import './GameTypes.scss';

class GameTypes extends React.Component {
  state = {
    gameTypes: [],
  }

  getGameTypes = () => {
    allGameTypes.getGameTypes()
      .then(gameTypes => this.setState({ gameTypes }))
      .catch(err => console.error('did not get types', err));
  }

  componentDidMount() {
    this.getGameTypes();
  }

  render() {
    const displayGameTypes = this.state.gameTypes.map(gameType => (
      <Types
      key = {gameType.id}
      gameType = {gameType}
      />
    ));

    return (
      <div className="GameTypes">
        <h2>Game Types</h2>
        {/* <div className="gameTypesDiv"> */}
        <div className="d-flex flex-wrap">
        { displayGameTypes }
        </div>
      </div>
    );
  }
}

export default GameTypes;
