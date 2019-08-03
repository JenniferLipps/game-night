import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseConfig.databaseURL;

const getUserInfoByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const userInfo = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          userInfo.push(res.data[fbKey]);
        });
      }
      resolve(userInfo[0]);
    })
    .catch(err => console.error('no user from FB', err));
});

const getUserInfoById = userId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users/${userId}.json`)
    .then((res) => {
      resolve(res.data);
    })
    .catch(err => reject(err));
});

const postUser = newUser => axios.post(`${baseUrl}/users.json`, newUser);

const putUserName = (saveUser, profileId) => axios.put(`${baseUrl}/users/${profileId}.json`, saveUser);

export default {
  getUserInfoById,
  postUser,
  putUserName,
  getUserInfoByUid,
};
