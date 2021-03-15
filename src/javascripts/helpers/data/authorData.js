import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;

// GET AUTHORS
const getAuthors = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// GET SINGLE AUTHOR
const getSingleAuthor = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${authorId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// GET FAVORITE AUTHORS
const getFavoriteAuthors = (uid) => new Promise((resolve, reject) => {
  getAuthors(uid).then((authorArray) => {
    const favorites = authorArray.filter((author) => author.favorite === true);
    resolve(favorites);
  }).catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuthor = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => getAuthors(uid).then((authors) => resolve(authors)))
    .catch((error) => reject(error));
});

// CREATE AUTHOR
const createAuthors = (authorObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, body)
        .then(() => {
          getAuthors(uid).then((authors) => resolve(authors));
        });
    }).catch((error) => reject(error));
});

// UPDATE AUTHOR
const updateAuthor = () => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// SEARCH AUTHORS
const searchAuthors = (searchValue) => new Promise((resolve, reject) => {
  getAuthors().then((authorsArray) => {
    const search = authorsArray.filter((author) => author.name.toLowercase().includes(searchValue));
    resolve(search);
  }).catch((error) => reject(error));
});

export {
  getAuthors, getSingleAuthor, getFavoriteAuthors,
  createAuthors, deleteAuthor,
  updateAuthor, searchAuthors
};
