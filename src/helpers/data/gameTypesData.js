import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseConfig.databaseURL;

const getGameTypes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gamesTypes.json`)
    .then((res) => {
      const gameTypes = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        gameTypes.push(res.data[fbKey]);
      });
      resolve(gameTypes);
    })
    .catch(err => console.error('no game types from FB', err));
});

export default { getGameTypes };
