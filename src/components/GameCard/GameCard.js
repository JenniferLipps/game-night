import React from 'react';

import myGameShape from '../../helpers/theProps/myGameShape';

import './GameCard.scss';

class GameCard extends React.Component {
  static propTypes = {
    myGame: myGameShape.myGameShape,
  }

  render() {
    const { myGame } = this.props;
    return (
      <div className="GameCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{myGame.title}</h5>
            <div className="card-img"><img src={myGame.image} alt="..." className="img-fluid" /></div>
            <button className="btn btn-warning">Remove from My Library</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GameCard;
