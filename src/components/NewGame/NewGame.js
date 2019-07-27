import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import myGames from '../../helpers/data/myGamesData';

import './NewGame.scss';

const defaultGame = {
  title: '',
  typeId: '',
  maker: '',
  minPlayers: '',
  maxPlayers: '',
};

class NewGame extends React.Component {
  state = {
    newGame: defaultGame,
  }

  formFieldStringState = (name, e) => {
    const tempGame = { ...this.state.newGame };
    tempGame[name] = e.target.value;
    this.setState({ newGame: tempGame });
  }

  titleChange = e => this.formFieldStringState('title', e);

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

  render() {
    const { newGame } = this.state;
    return (
      <div className="NewGame">
        <h1>Create a New Game</h1>
        <form onSubmit={this.submitGame}>
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
        {/* <div className="form-group">
          <label htmlFor="typeId">Select Type of Game</label>
          <input type="select" name="select" id="typeId">
            <option value="type1">Deck Building</option>
            <option value="type2">Cooperative</option>
            <option value="type3">Hidden Traitor</option>
            <option value="type4">Legacy</option>
            <option value="type5">Eurogame</option>
            <option value="type6">War Game</option>
            <option value="type7">Area Control</option>
            <option value="type8">Abstract Strategy</option>
            <option value="type9">Trivia</option>
            <option value="type10">Traditional</option>
          </input>
        </div> */}
        <button className="btn btn-warning">Add This Game</button>
      </form>
      </div>
    );
  }
}

export default NewGame;
