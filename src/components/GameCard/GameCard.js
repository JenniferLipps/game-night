import React from 'react';
import { Link } from 'react-router-dom';

import myGameShape from '../../helpers/theProps/myGameShape';

import './GameCard.scss';

class GameCard extends React.Component {
  static propTypes = {
    myGame: myGameShape.myGameShape,
  }

  render() {
    const { myGame, myType } = this.props;
    const mySingleGameLink = `/game/${myGame.id}`;
    return (
      <div className="GameCard col-4">
        <div className="card libraryCard">
          <div className="card-body">
            <h5 className="card-title">{myGame.title}</h5>
            <div className="card-img"><img src={myGame.image} alt="..." className="img-fluid" /></div>
            <Link className="btn btn-warning" to={mySingleGameLink}>View Game Info</Link>
            <div>{myType.type || ''}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameCard;
