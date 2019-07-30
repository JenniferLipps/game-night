import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import userInfo from '../../helpers/data/userData';

import './Home.scss';

class Home extends React.Component {
  state = {
    userName: [],
  }

  checkUserName = () => {
    const { uid } = firebase.auth().currentUser;
    userInfo.getUserInfo(uid)
      .then(userName => this.setState({ userName }))
      .catch(err => console.error('no name in Profile', err));
  };

  componentDidMount() {
    this.checkUserName();
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
