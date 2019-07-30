import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import ProfileDisplay from '../ProfileDisplay/ProfileDisplay';
import userInfo from '../../helpers/data/userData';

import './Profile.scss';

class Profile extends React.Component {
  state = {
    userName: [],
  }

  getUserName = () => {
    const { uid } = firebase.auth().currentUser;
    userInfo.getUserInfo(uid)
      .then(userName => this.setState({ userName }))
      .catch(err => console.error('no name in Profile', err));
  };

  componentDidMount() {
    this.getUserName();
  }

  render() {
    const showMyName = this.state.userName.map(myProfileName => (
      <ProfileDisplay
      key = {myProfileName.id}
      myProfileName = {myProfileName}
      />
    ));
    return (
      <div className="Profile">
        <h1>User Profile</h1>
        <div>{ showMyName }</div>
      </div>
    );
  }
}

export default Profile;
