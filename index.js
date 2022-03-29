import displayDate from './modules/displayDate.js';
import { addBook, removeBook, checkLocalStorage } from './modules/utilityFunctions.js';
import * as Elements from './modules/constElements.js';

displayDate();

Elements.addBtn.addEventListener('click', addBook);
Elements.list.addEventListener('click', () => {
  Elements.booksList.parentElement.classList.remove('hide');
  Elements.author.parentElement.parentElement.classList.add('hide');
  Elements.contactInfo.classList.add('hide');
});

Elements.add.addEventListener('click', () => {
  Elements.author.parentElement.parentElement.classList.remove('hide');
  Elements.booksList.parentElement.classList.add('hide');
  Elements.contactInfo.classList.add('hide');
});

Elements.contact.addEventListener('click', () => {
  Elements.author.parentElement.parentElement.classList.add('hide');
  Elements.booksList.parentElement.classList.add('hide');
  Elements.contactInfo.classList.remove('hide');
});

Elements.booksList.addEventListener('click', (e) => {
  removeBook(e.target);
});

document.addEventListener('DOMContentLoaded', checkLocalStorage);
