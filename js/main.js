const booksList = document.querySelector('.books__list');
const addBtn = document.querySelector('#submit');
const book = document.querySelector('#book');
const author = document.querySelector('#author');

let BooksObject = [];

function loadContent() {
  booksList.innerHTML = '';
  BooksObject.forEach(function (obj, index) {
    booksList.innerHTML += `<div class="${index}">
                    <h4>${obj.title}</h4>
                    <h3>${obj.author}</h3>
                    <button type="button" onclick="removeBook(this.parentElement)" id="removeBtn">Remove</button>
                </div>`;
  });
}

function addNewBook() {
  BooksObject.push({ id: BooksObject.length, title: book.value, author: author.value });
  loadContent();
}

function removeBook(element) {
  let id = element.className;
  element.remove();
  BooksObject.splice(parseInt(id), 1);
}

function updateLocalStorage() {}

updateLocalStorage();

addBtn.addEventListener('click', addNewBook);

document.addEventListener('DOMContentLoaded', loadContent);
