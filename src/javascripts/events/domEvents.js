import firebase from 'firebase/app';
import 'firebase/auth';
// import firebaseConfig from '../helpers/auth/apiKeys';
import { showBooks } from '../components/books';
import addBookForm from '../components/forms/addBookForm';
import { createBook, deleteBook } from '../helpers/data/bookData';

// import showBooks from '../components/books';
// import createAuthors from '../helpers/data/authorData';
// import showAuthors from '../components/authors';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const firebaseKey = e.target.id.split('--')[1];
        deleteBook(firebaseKey).then((booksArray) => showBooks(booksArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      // e.preventDefault();
      // const bookObject = {
      //   title: document.querySelector('#title').value,
      //   image: document.querySelector('#image').value,
      //   price: document.querySelector('#price').value,
      //   sale: document.querySelector('#sale').value,
      //   author_id: document.querySelector('#author').value,
      // };
      console.warn('CLICKED ADD BOOK BUTTON', e.target.id);
      addBookForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      console.warn(firebase.auth().currentUser.uid);
      e.preventDefault();
      const userId = firebase.auth().currentUser.uid;
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author').value,
        uid: userId
      };
      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
      // e.preventDefault();
      // const userId = firebase.auth().currentUser.uid;
      // const bookObject = {
      //   title: document.querySelector('#title').value,
      //   price: document.querySelector('#price').value,
      //   sale: document.querySelector('#sale').value,
      //   author_id: document.querySelector('#author').value,
      //   uid: userId
      // };
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
      // e.preventDefault();
      // const bookObject = {
      //   title: document.querySelector('#title').value,
      //   image: document.querySelector('#image').value,
      //   price: document.querySelector('#price').value,
      //   sale: document.querySelector('#sale').value,
      //   author_id: document.querySelector('#author').value,
      // };
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    // if (e.target.id.includes('add-auth-btn')) {
    //   e.preventDefault();
    //   const bookObject = {
    //     author_id: document.querySelector('#author').value,
    //   };
    //   console.warn('CLICKED ADD BOOK BUTTON', e.target.id);
    //   addBookForm();
    // }
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    // if (e.target.id.includes('submit-author')) {
    //   e.preventDefault();
    //   const authorObject = {
    //     author_id: document.querySelector('#author').value,
    //   };
    //   createAuthors(authorObject).then((authorsArray) => showAuthors(authorsArray));
    // }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
    // if (e.target.id.includes('update-author')) {
    //   e.preventDefault();
    //   const authorObject = {
    //     author_id: document.querySelector('#author').value
    //   }
  });
};

export default domEvents;
