import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './CreateProfile.scss';

const defaultUser = {
  userName: '',
};

class CreateProfile extends React.Component {
  state = {
    newUser: defaultUser,
  }

  formFieldStringState = (name, e) => {
    const tempName = { ...this.state.newUser };
    tempName[name] = e.target.value;
    this.setState({ newUser: tempName });
  }

  nameChange = e => this.formFieldStringState('userName', e);

  submitUserName = (e) => {
    e.preventDefault();
    const saveUser = { ...this.state.newUser };
    saveUser.uid = firebase.auth().currentUser.uid;
    this.props.saveNewUser(saveUser);
  }

  render() {
    const { newUser } = this.state;

    return (
      <div className="CreateProfile">
        <form>
          <h1>Create a User Name</h1>
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
          <button className="btn btn-warning" onClick={this.submitUserName}>Create Profile</button>
        </form>
      </div>
    );
  }
}

export default CreateProfile;
