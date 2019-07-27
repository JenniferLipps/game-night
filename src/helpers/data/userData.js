import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseConfig.databaseURL;

const getUserInfo = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const userInfo = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          userInfo.push(res.data[fbKey]);
        });
      }
      resolve(userInfo);
    })
    .catch(err => console.error('no user from FB', err));
});

export default { getUserInfo };
