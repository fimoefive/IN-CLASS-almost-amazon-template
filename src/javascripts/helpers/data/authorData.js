// API CALLS FOR AUTHORS
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE AUTHOR
// CREATE AUTHOR
const createAuthors = (authorObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, body)
        .then(() => {
          getAuthors().then((booksArray) => resolve(booksArray));
        });
    }).catch((error) => reject(error));
});
// UPDATE AUTHOR
const updateAuthors = () => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// SEARCH AUTHORS

export { getAuthors, createAuthors, updateAuthors };
