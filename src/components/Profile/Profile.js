import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import userInfo from '../../helpers/data/userData';

import './Profile.scss';

class Profile extends React.Component {
  state = {
    myName: {},
  }

  componentDidMount() {
    const getUserName = () => {
      const { uid } = firebase.auth().currentUser;
      userInfo.getUserInfo(uid)
        .then(oneName => this.setState({ myName: oneName.data }))
        .catch(err => console.error('no name in Profile', err));
    };
  }

  render() {
    const { myName } = this.props;
    return (
      <div className="Profile">
        <h1>User Profile</h1>
        <div>{myName.userName}</div>
      </div>
    );
  }
}

export default Profile;
