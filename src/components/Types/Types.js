import React from 'react';
import gameShape from '../../helpers/theProps/myGameShape';

import './Types.scss';

class Types extends React.Component {
  static propTypes = {
    gameType: gameShape.gameShape,
  }

  render() {
    const { gameType } = this.props;
    return (
      <div className="col-3">
        <div className="card boardGameTypes">
          <div className="card-body">
            <h3>{gameType.type}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Types;
