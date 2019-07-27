import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import getMyGames from '../../helpers/data/myGamesData';
import allGameTypes from '../../helpers/data/gameTypesData';
import GameCard from '../GameCard/GameCard';

import './MyLibrary.scss';

class MyLibrary extends React.Component {
  state = {
    myGames: [],
    gameTypes: [],
  }

  getGames = () => {
    const { uid } = firebase.auth().currentUser;
    getMyGames.getMyGames(uid)
      .then(myGames => this.setState({ myGames }))
      .catch(err => console.error('no games in MyLib', err));
  }

  getGameTypes = () => {
    allGameTypes.getGameTypes()
      .then((gameTypes) => {
        this.setState({ gameTypes });
        this.getGames();
      })
      .catch(err => console.error('did not get types', err));
  }

  componentDidMount() {
    this.getGameTypes();
  }

  render() {
    const showAllMyGames = this.state.myGames.map((myGame) => {
      const myType = this.state.gameTypes.find(x => myGame.typeId === x.id);
      console.error(myType);
      return <GameCard
      key = {myGame.id}
      myGame = {myGame}
      myType = {myType || { type: '' }}
      />;
    });

    const gameTypesLink = '/gameTypes';

    return (
      <div className="MyLibrary col">
        <h1>My Library</h1>
        <Link className="btn btn-warning" to={gameTypesLink}>View All Types of Games</Link>
        <div className="gameCardDiv d-flex">
          { showAllMyGames }
        </div>
      </div>
    );
  }
}

export default MyLibrary;
