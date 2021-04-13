import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import logoutButton from '../components/buttons/logoutButton';
import navigationEvents from '../events/navigationEvents';
import { getBooks } from '../helpers/data/bookData';
import { showBooks, emptyBooks } from '../components/books';
// import { getAuthors } from '../helpers/data/authorData';
// import { showAuthors, emptyAuthors } from '../components/authors';

const startApp = (userObject) => {
  domBuilder(); // BUILD THE DOM
  domEvents(userObject.uid); // ADD THE EVENT LISTENTER TO THE DOM
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
  // getAuthors(userObject.uid).then((authors) => {
  //   if (authors.length) {
  //     showAuthors(authors);
  //   } else {
  //     emptyAuthors();
  //   }
  // });
};

export default startApp;
