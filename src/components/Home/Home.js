import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import userInfo from '../../helpers/data/userData';

import './Home.scss';
import CreateProfile from '../CreateProfile/CreateProfile';

class Home extends React.Component {
  state = {
    userName: '',
  }

  getUserName = () => {
    const { uid } = firebase.auth().currentUser;
    userInfo.getUserInfo(uid)
      .then((user) => {
        this.setState({ userName: user.userName || '' });
      })
      .catch(err => console.error('no name in Home', err));
  }

  componentDidMount() {
    this.getUserName();
  }

  saveNewUser = (saveUser) => {
    userInfo.postUser(saveUser)
      .then(() => this.getUserName())
      .catch(err => console.error('unable to create user', err));
  }

  render() {
    const userNameExists = this.state.userName;
    let renderData;

    if (userNameExists !== undefined || userNameExists !== '') {
      renderData = <h1>Welcome {this.state.userName}</h1>;
    }
    if (userNameExists === '') {
      renderData = <CreateProfile saveNewUser={this.saveNewUser}/>;
    }

    return (
      <div className="Home">
        { renderData }
      </div>
    );
  }
}

export default Home;
