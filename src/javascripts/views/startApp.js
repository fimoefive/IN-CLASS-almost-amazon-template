import { showAuthors, emptyAuthors } from '../components/authors';
import { showBooks, emptyBooks } from '../components/books';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { getBooks } from '../helpers/data/bookData';
import { getAuthors } from '../helpers/data/authorData';

const startApp = (userObject) => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(userObject.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // Putt all books on the DOM
  // console.warn(userObject.uid);
  getBooks(userObject.uid).then((booksArray) => {
    if (booksArray.length) {
      showBooks(booksArray);
    } else {
      emptyBooks();
    }
  });
  getAuthors(userObject.uid).then((authors) => {
    if (authors.length) {
      showAuthors(authors);
    } else {
      emptyAuthors();
    }
  });
};

export default startApp;
