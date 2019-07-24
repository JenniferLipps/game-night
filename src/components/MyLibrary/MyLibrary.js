import React from 'react';
import { Link } from 'react-router-dom';

import './MyLibrary.scss';

class MyLibrary extends React.Component {
  render() {
    const singleGameLink = '/game/1234';
    return (
      <div className="MyLibrary">
        <h1>My Library</h1>
        <Link className="btn btn-info" to={singleGameLink}>Single Game</Link>
      </div>
    );
  }
}

export default MyLibrary;
