import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import userInfo from '../../helpers/data/userData';

import './Profile.scss';

class Profile extends React.Component {
  state = {
    userName: '',
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
    const myUserName = this.state.userName;
    const myUserNameEdit = `/name/${myUserName.id}`;
    return (
      <div className="Profile">
        <h1>User Profile</h1>
        <div className="card-body">
            <h3>{myUserName.userName}</h3>
            <Link className="btn btn-warning" to={myUserNameEdit}>Edit User Name</Link>
        </div>
      </div>
    );
  }
}

export default Profile;
