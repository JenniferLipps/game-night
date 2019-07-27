import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import './NewGame.scss';

const defaultGame = {
  title: '',
  typeId: '',
  maker: '',
  minPlayers: '',
  maxPlayers: '',
};

class NewGame extends React.Component {
  render() {
    return (
      <div className="NewGame">
        <h1>Create a New Game</h1>
        <Form>
        <FormGroup>
          <Label for="title">Game Title</Label>
          <Input
          type="text"
          id="title"
          placeholder="New Title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="maker">Maker</Label>
          <Input
          type="text"
          id="maker"
          placeholder="Produced the game"
          />
        </FormGroup>
        <FormGroup>
          <Label for="minPlayers">Minimum Players</Label>
          <Input
          type="text"
          id="minPlayers"
          placeholder="2"
          />
        </FormGroup>
        <FormGroup>
          <Label for="maxPlayers">Maximum Players</Label>
          <Input
          type="text"
          id="maxPlayers"
          placeholder="6"
          />
        </FormGroup>
        <FormGroup>
          <Label for="typeId">Select Type of Game</Label>
          <Input type="select" name="select" id="typeId">
            <option>type1</option>
            <option>type2</option>
            <option>type3</option>
            <option>type4</option>
            <option>type5</option>
            <option>type6</option>
            <option>type7</option>
            <option>type8</option>
            <option>type9</option>
            <option>type10</option>
          </Input>
        </FormGroup>
        <Button>Add This Game</Button>
      </Form>
      </div>
    );
  }
}

export default NewGame;
