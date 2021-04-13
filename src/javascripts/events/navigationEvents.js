// import 'firebase/auth';
import signOut from '../helpers/auth/signOut';
import { getBooks, getSaleBooks } from '../helpers/data/bookData';
import { getAuthors, getFavoriteAuthors } from '../helpers/data/authorData';
import { showBooks, emptyBooks } from '../components/books';
import { showAuthors, emptyAuthors, emptyFavoriteAuthor } from '../components/authors';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    // Get ALL Books on Click
    getBooks(uid).then((booksArray) => {
      if (booksArray.length) {
        showBooks(booksArray);
      } else {
        emptyBooks();
      }
    });
  });

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

  // ALL AUTHORS
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(uid).then((authorsArray) => {
      if (authorsArray.length) {
        showAuthors(authorsArray);
      } else {
        emptyAuthors();
      }
    });
  });

  // FAVORITE AUTHORS
  document.querySelector('#favorite-authors').addEventListener('click', () => {
    getFavoriteAuthors().then((favoritesArray) => {
      if (favoritesArray.length) {
        showAuthors(favoritesArray);
      } else {
        emptyFavoriteAuthor();
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
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
};

export default navigationEvents;
