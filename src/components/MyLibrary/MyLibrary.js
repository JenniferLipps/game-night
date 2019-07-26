import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import getMyGames from '../../helpers/data/myGamesData';
import GameCard from '../GameCard/GameCard';

import './MyLibrary.scss';

class MyLibrary extends React.Component {
  state = {
    myGames: [],
  }

  getGames = () => {
    const { uid } = firebase.auth().currentUser;
    getMyGames.getMyGames(uid)
      .then(myGames => this.setState({ myGames }))
      .catch(err => console.error('no games in MyLib', err));
  }

  componentDidMount() {
    this.getGames();
  }

  render() {
    const showAllMyGames = this.state.myGames.map(myGame => (
      <GameCard
      key = {myGame.id}
      myGame = {myGame}
      />
    ));
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
