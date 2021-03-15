// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `
    <div class="card">
      <div class="card-body" style="height: 180px; width: 18rem;">
      < href="#" id="author-name-title--${item.firebaseKey}'"><
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
      <hr>
      <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-auth-btn--${item.firebaseKey}">Edit Author</button>
      <button class="btn btn-danger" id="delete---${item.firebaseKey}">Delete Author</button>
      </div>
    </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
