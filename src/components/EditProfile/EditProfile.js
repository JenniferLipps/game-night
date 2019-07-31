import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import userInfo from '../../helpers/data/userData';

const defaultUser = {
  userName: '',
  uid: '',
};

class EditProfile extends React.Component {
  state = {
    newUser: defaultUser,
  }

  getUserName = () => {
    const { uid } = firebase.auth().currentUser;
    userInfo.getUserInfo(uid)
      .then(nameFromFb => this.setState({ newUser: nameFromFb.data }))
      .catch(err => console.error('no name in EditProfile', err));
  };

  componentDidMount() {
    this.getUserName();
  }

  formFieldStringState = (name, e) => {
    const tempName = { ...this.state.newUser };
    tempName[name] = e.target.value;
    this.setState({ newUser: tempName });
  }

  nameChange = e => this.formFieldStringState('newUser', e);

  submitUpdatedName = (e) => {
    e.preventDefault();
    const saveUser = { ...this.state.newUser };
    saveUser.uid = firebase.auth().currentUser.uid;
    userInfo.putUserName(saveUser)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  render() {
    const newUser = this.state;

    return (
      <div className="Profile">
        <h1>Edit Your User Name</h1>
            <form>
            <div className="form-group">
            <label htmlFor="userName">Create a User Name</label>
            <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Your Name"
            value={newUser.userName}
            onChange={this.nameChange}
            />
            </div>
          <button className="btn btn-warning" onClick={this.submitUpdatedName}>Update Name</button>
        </form>
          </div>
    );
  }
}

export default EditProfile;
