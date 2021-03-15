const authorInfo = (authorObj) => {
  document.querySelector('#add-button').innerHTML += `<h2>${authorObj.first_name} ${authorObj.last_name}'s Books</h2>`;
};

export default authorInfo;
