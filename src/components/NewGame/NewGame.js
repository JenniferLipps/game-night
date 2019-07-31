import React from 'react';
import {
  // Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

import allGameTypes from '../../helpers/data/gameTypesData';
import myGames from '../../helpers/data/myGamesData';

import './NewGame.scss';

const defaultGame = {
  title: '',
  imageUrl: '',
  typeId: '',
  maker: '',
  minPlayers: '',
  maxPlayers: '',
};

class NewGame extends React.Component {
  state = {
    newGame: defaultGame,
    gameTypes: [],
  }

  getGameTypes = () => {
    allGameTypes.getGameTypes()
      .then(gameTypes => this.setState({ gameTypes }))
      .catch(err => console.error('did not get types', err));
  }

  componentDidMount() {
    this.getGameTypes();
  }

  formFieldStringState = (name, e) => {
    const tempGame = { ...this.state.newGame };
    tempGame[name] = e.target.value;
    this.setState({ newGame: tempGame });
  }

  titleChange = e => this.formFieldStringState('title', e);

  imageChange = e => this.formFieldStringState('imageUrl', e);

  makerChange = e => this.formFieldStringState('maker', e);

  changeMinPlayers = e => this.formFieldStringState('minPlayers', e);

  changeMaxPlayers = e => this.formFieldStringState('maxPlayers', e);

  submitGame = (e) => {
    e.preventDefault();
    const saveGame = { ...this.state.newGame };
    saveGame.uid = firebase.auth().currentUser.uid;
    myGames.postGame(saveGame)
      .then(() => this.props.history.push('/myLibrary'))
      .catch(err => console.error('unable to save game', err));
  }

  selectGameType = (e) => {
    e.preventDefault();
    const tempGame = { ...this.state.newGame };
    tempGame.typeId = e.target.id;
    this.setState({ newGame: tempGame });
  }

  render() {
    const { newGame } = this.state;
    const createDropdownItems = this.state.gameTypes.map(gameType => (
    <DropdownItem id={gameType.id} onClick={this.selectGameType}>{gameType.type}</DropdownItem>));

    return (
      <div className="NewGame">
        <h1>Create a New Game</h1>
        <form>
        <div className="form-group">
          <label htmlFor="title">Game Title</label>
          <input
          type="text"
          className="form-control"
          id="title"
          placeholder="New Title"
          value={newGame.title}
          onChange={this.titleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
          type="text"
          className="form-control"
          id="imageUrl"
          placeholder="your image link"
          value={newGame.image}
          onChange={this.imageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="maker">Maker</label>
          <input
          type="text"
          className="form-control"
          id="maker"
          placeholder="Produced the game"
          value={newGame.maker}
          onChange={this.makerChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="minPlayers">Minimum Players</label>
          <input
          type="text"
          className="form-control"
          id="minPlayers"
          placeholder="2"
          value={newGame.minPlayers}
          onChange={this.changeMinPlayers}
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxPlayers">Maximum Players</label>
          <input
          type="text"
          className="form-control"
          id="maxPlayers"
          placeholder="6"
          value={newGame.maxPlayers}
          onChange={this.changeMaxPlayers}
          />
        </div>
        <div className="form-group">
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Select Game Type
      </DropdownToggle>
      <DropdownMenu>
        { createDropdownItems }
      </DropdownMenu>
    </UncontrolledDropdown>
        </div>
        <button className="btn btn-warning" onClick={this.submitGame}>Add This Game</button>
      </form>
      </div>
    );
  }
}

export default NewGame;
