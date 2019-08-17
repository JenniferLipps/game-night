import React from 'react';
import 'firebase/auth';

import userInfo from '../../helpers/data/userData';

import './EditProfile.scss';

const defaultUser = {
  userName: '',
  uid: '',
};

class EditProfile extends React.Component {
  state = {
    newUser: defaultUser,
  }

  componentDidMount() {
    const profileId = this.props.match.params.id;
    userInfo.getUserInfoById(profileId)
      .then(nameFromFb => this.setState({ newUser: nameFromFb }))
      .catch(err => console.error('no name in EditProfile', err));
  }

  nameChange = (e) => {
    const tempName = { ...this.state.newUser };
    tempName.userName = e.target.value;
    this.setState({ newUser: tempName });
  }

  submitUpdatedName = (e) => {
    e.preventDefault();
    const saveUser = { ...this.state.newUser };
    const profileId = this.props.match.params.id;
    console.error(profileId);
    userInfo.putUserName(saveUser, profileId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  render() {
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
            value={this.state.newUser.userName}
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
