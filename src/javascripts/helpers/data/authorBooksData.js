import { deleteAuthor, getSingleAuthor } from './authorData';
import { deleteBook, getAuthorBooks } from './bookData';

// DELETE AUTHOR AND ALL THEIR BOOKS
const deleteAuthorBooks = (authorId, uid) => new Promise((resolve, reject) => {
  getAuthorBooks(authorId).then((authorBooksArray) => {
    const deleteBooks = authorBooksArray.map((book) => deleteBook(book.firebaseKey));
    Promise.all(deleteBooks).then(() => resolve(deleteAuthor(authorId, uid)));
  }).catch((error) => reject(error));
});

const authorBookInfo = (authorId) => new Promise((resolve, reject) => {
  const author = getSingleAuthor(authorId);
  const authorBooks = getAuthorBooks(authorId);
  Promise.all([author, authorBooks])
    .then(([authorResponse, authorBooksResponse]) => resolve({ author: authorResponse, books: authorBooksResponse }))
    .catch((error) => reject(error));
});

export { deleteAuthorBooks, authorBookInfo };
