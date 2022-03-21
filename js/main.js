const booksList = document.querySelector('.books__list');
const addBtn = document.querySelector('#submit');
const book = document.querySelector('#book');
const author = document.querySelector('#author');
const KEY = 'BOOKS_LIST';

let BooksObject = [];

function loadContent() {
  booksList.innerHTML = '';
  BooksObject.forEach((obj, index) => {
    booksList.innerHTML += `<div class="${index}">
                    <h4>${obj.title}</h4>
                    <h3>${obj.author}</h3>
                    <button type="button" onclick="removeBook(this.parentElement)" id="removeBtn">Remove</button>
                </div>`;
  });
}

function updateLocalStorage() {
  localStorage.setItem(KEY, JSON.stringify(BooksObject));
}

function addNewBook() {
  BooksObject.push({
    id: BooksObject.length,
    title: book.value,
    author: author.value,
  });
  updateLocalStorage();
  loadContent();
}
/* eslint-disable */

function removeBook(element) {
  const id = element.parentElement.className;
  element.remove();
  BooksObject.splice(parseInt(id), 1);
  updateLocalStorage();
}

/* eslint-enable */

function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem(KEY)) != null) {
    BooksObject = JSON.parse(localStorage.getItem(KEY));
    loadContent();
  }
}

addBtn.addEventListener('click', addNewBook);

document.addEventListener('DOMContentLoaded', checkLocalStorage);
