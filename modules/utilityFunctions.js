import books from './Books.js';
import * as Elements from './constElements.js';

const uploadContent = () => {
  Elements.booksList.innerHTML = '';
  books.BooksObject.forEach((obj) => {
    Elements.booksList.innerHTML += `<div class="book-container">
                      <div class="book">
                        <h4 class="text-1">"${obj.title}"</h4>
                        <h3 class="text-1">by ${obj.author}</h3>
                      </div>
                      <button type="button" class="btn deleteBtn" data-id="${obj.id}">Remove</button>
                  </div>`;
  });
};

const checkLocalStorage = () => {
  if (JSON.parse(localStorage.getItem('BOOKS_LIST')) != null) {
    books.BooksObject = JSON.parse(localStorage.getItem('BOOKS_LIST'));
    uploadContent();
  }
};

const addBook = () => {
  books.add(Elements.book, Elements.author);
  checkLocalStorage();
  Elements.booksList.parentElement.classList.remove('hide');
  Elements.author.parentElement.parentElement.classList.add('hide');
  Elements.contactInfo.classList.add('hide');
};

const removeBook = (element) => {
  books.remove(element);
};

export { addBook, removeBook, checkLocalStorage };
