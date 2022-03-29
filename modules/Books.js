class Books {
  constructor() {
    if (JSON.parse(localStorage.getItem('BOOKS_LIST')) != null) {
      this.BooksObject = JSON.parse(localStorage.getItem('BOOKS_LIST'));
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
    if (element.classList.contains('deleteBtn')) {
      element.parentElement.remove();
      this.BooksObject.splice(element.getAttribute('dat-id'), 1);
    }
    localStorage.setItem('BOOKS_LIST', JSON.stringify(this.BooksObject));
  }
}

export default new Books();
