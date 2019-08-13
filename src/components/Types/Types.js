import React from 'react';
// import PropTypes from 'prop-types';
import gameShape from '../../helpers/theProps/myGameShape';

class Types extends React.Component {
  static propTypes = {
    gameType: gameShape.gameShape,
  }

  render() {
    const { gameType } = this.props;
    return (
      <div className="Types col-3">
        <div className="card">
          <div className="card-body">
            <h3>{gameType.type}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Types;
