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
      .then(oneGame => this.setState({ myGame: oneGame.data }))
      .catch(err => console.error('cannot get single game', err));
  }

  render() {
    const { myGame } = this.state;
    return (
      <div className="SingleGame">
        <h3>{myGame.title}</h3>
        <div><img src={myGame.image} alt={myGame.title} className="img-fluid" /></div>
        {/* <div>{myType.type}</div> */}
        <h3>Produced by {myGame.maker}</h3>
        <h5>Minimum players: {myGame.minPlayers}</h5>
        <h5>Maximum players: {myGame.maxPlayers}</h5>
      </div>
    );
  }
}

export default SingleGame;
