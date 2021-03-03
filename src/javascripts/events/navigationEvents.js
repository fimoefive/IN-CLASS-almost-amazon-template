import 'firebase/auth';
import firebase from 'firebase/app';
import signOut from '../helpers/auth/signOut';
import { getAuthors } from '../helpers/data/authorData';
import { showAuthors, emptyAuthors } from '../components/authors';
import { getBooks, getSaleBooks } from '../helpers/data/bookData';
import { emptyBooks, showBooks } from '../components/books';
// import firebaseConfig from '../helpers/auth/apiKeys';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    getSaleBooks().then((saleBooksArray) => {
      if (saleBooksArray.length) {
        showBooks(saleBooksArray);
      } else {
        emptyBooks();
      }
    });
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    // Get ALL Books on click
    getBooks(firebase.auth().currentUser.uid).then((booksArray) => {
      if (booksArray.length) {
        showBooks(booksArray);
      } else {
        emptyBooks();
      }
    });
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  document.querySelector('#store').addEventListener('click', () => {
    // console.warn('All Authors');
    getAuthors(firebase.auth().currentUser.uid).then((authors) => {
      if (authors.length) {
        showAuthors(authors);
      } else {
        emptyAuthors();
      }
    });
  });
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting

  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
};

export default navigationEvents;
