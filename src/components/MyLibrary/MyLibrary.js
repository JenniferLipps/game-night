import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';

import getMyGames from '../../helpers/data/myGamesData';

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
    const singleGameLink = '/game/1234';
    return (
      <div className="MyLibrary">
        <h1>My Library</h1>
        <Link className="btn btn-info" to={singleGameLink}>Single Game</Link>
      </div>
    );
  }
}

export default MyLibrary;
