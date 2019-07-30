import React from 'react';
import userNameShape from '../../helpers/theProps/userNameShape';

class ProfileDisplay extends React.Component {
  static propTypes = {
    myProfileName: userNameShape.userNameShape,
  }

  render() {
    const { myProfileName } = this.props;
    return (
      <div className="ProfileDisplay">
        <div className="card">
          <div className="card-body">
            <h3>{myProfileName.userName}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDisplay;
