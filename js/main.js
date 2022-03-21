const booksList = document.querySelector('.books__list');
const addBtn = document.querySelector('#submit');
const book = document.querySelector('#book');
const author = document.querySelector('#author');

let BooksObject = [{}];

function loadContent() {
  booksList.innerHTML = '';
  console.log(JSON.stringify(BooksObject));
  BooksObject.forEach(function (obj) {
    booksList.innerHTML += `<div>
                    <h4>${obj.title}</h4>
                    <h3>${obj.author}</h3>
                    <button>Remove</button>
                </div>`;
  });
}

function addNewBook() {
  BooksObject.push({ title: book.value, author: author.value });
  loadContent();
}

function removeBook() {}

function updateLocalStorage() {}

addBtn.addEventListener('click', addNewBook);

document.addEventListener('DOMContentLoaded', loadContent);
