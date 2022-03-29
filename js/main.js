const booksList = document.querySelector('.books__list');
const addBtn = document.querySelector('#submit');
const book = document.querySelector('#book');
const author = document.querySelector('#author');
const KEY = 'BOOKS_LIST';

const list = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');
const date = document.querySelector('#date');
const contactInfo = document.querySelector('.contact-info');

let BooksObject = [];

class Books {
  constructor() {
    if (JSON.parse(localStorage.getItem(KEY)) != null) {
      this.BooksObject = JSON.parse(localStorage.getItem(KEY));
    } else {
      this.BooksObject = [];
    }
  }

  add(book, author) {
    this.BooksObject.push({
      id: this.BooksObject.length,
      title: book.value,
      author: author.value,
    });
    localStorage.setItem('BOOKS_LIST', JSON.stringify(this.BooksObject));
  }

  remove(element) {
    const { id } = element.dataset;
    element.parentElement.remove();
    this.BooksObject.splice(this.BooksObject.findIndex((item) => item.id === parseInt(id, 10)), 1);
    localStorage.setItem('BOOKS_LIST', JSON.stringify(this.BooksObject));
  }
}

function loadContent() {
  booksList.innerHTML = '';
  BooksObject.forEach((obj) => {
    booksList.innerHTML += `<div class="book-container">
                    <div class="book">
                      <h4 class="text-1">"${obj.title}"</h4>
                      <h3 class="text-1">by ${obj.author}</h3>
                    </div>
                    <button type="button" onclick="removeBook(this)" class="btn" data-id="${obj.id}">Remove</button>
                </div>`;
  });
}

function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem(KEY)) != null) {
    BooksObject = JSON.parse(localStorage.getItem(KEY));
    loadContent();
  }
}

const books = new Books();

function addBook() {
  books.add(book, author);
  checkLocalStorage();
  loadContent();
  book.value = '';
  author.value = '';
  booksList.parentElement.classList.remove('hide');
  author.parentElement.parentElement.classList.add('hide');
  contactInfo.classList.add('hide');
}

/* eslint-disable */
function removeBook(element) {
  books.remove(element);
}
/* eslint-enable */

addBtn.addEventListener('click', addBook);
list.addEventListener('click', () => {
  booksList.parentElement.classList.remove('hide');
  author.parentElement.parentElement.classList.add('hide');
  contactInfo.classList.add('hide');
});

add.addEventListener('click', () => {
  author.parentElement.parentElement.classList.remove('hide');
  booksList.parentElement.classList.add('hide');
  contactInfo.classList.add('hide');
});

contact.addEventListener('click', () => {
  author.parentElement.parentElement.classList.add('hide');
  booksList.parentElement.classList.add('hide');
  contactInfo.classList.remove('hide');
});

const getDateTime = () => {
  const date = new Date();
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: 'true',
  };
  return date.toLocaleString('en-US', options);
};
date.innerHTML = `
<h4>
 ${getDateTime()}
</h4>
`;

document.addEventListener('DOMContentLoaded', checkLocalStorage);
