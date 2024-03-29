import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseConfig.databaseURL;

const getMyGames = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/games.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const myGames = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          myGames.push(res.data[fbKey]);
        });
      }
      resolve(myGames);
    })
    .catch(err => console.error('no games from FB', err));
});

const mySingleGame = myGameId => axios.get(`${baseUrl}/games/${myGameId}.json`);

const postGame = newGame => axios.post(`${baseUrl}/games.json`, newGame);

const deleteMyGame = myGameId => axios.delete(`${baseUrl}/games/${myGameId}.json`);

export default {
  getMyGames,
  mySingleGame,
  postGame,
  deleteMyGame,
};
