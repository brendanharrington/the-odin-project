const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  };

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();

  this.info = function() {
    return `${this.title} by ${this.author}, ${pages} pages, ${this.read ? 'read' : 'not read yet'}`;
  };
};

const books = [
  new Book('A Tale of Two Cities', 'Charles Dickens', 416, false),
  new Book('The Little Prince', 'Antoine de Saint-Exupéry', 96, false),
  new Book('The Alchemist', 'Paulo Coelho', 163, false),
  new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 223, false),
  new Book('And Then There Were None', 'Agatha Christie', 272, false),
  new Book('Dream of the Red Chamber', 'Cao Xueqin', 329, false),
  new Book('The Hobbit', 'J.R.R. Tolkien', 310, false),
  new Book('Alice\'s Adventures in Wonderland', 'Lewis Carroll', 192, false)
];

// books.forEach(book => console.log(book.info()))

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');

  books.forEach(book => {
    container.innerHTML += `<p>${book.info()}</p>`
  })
})