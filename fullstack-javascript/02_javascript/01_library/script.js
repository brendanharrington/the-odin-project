const myLibrary = [
  new Book('A Tale of Two Cities', 'Charles Dickens', 416, false),
  new Book('The Little Prince', 'Antoine de Saint-Exupéry', 96, false),
  new Book('The Alchemist', 'Paulo Coelho', 163, false),
  new Book(
    "Harry Potter and the Philosopher's Stone",
    'J.K. Rowling',
    223,
    false
  ),
  new Book('And Then There Were None', 'Agatha Christie', 272, false),
  new Book('Dream of the Red Chamber', 'Cao Xueqin', 329, false),
  new Book('The Hobbit', 'J.R.R. Tolkien', 310, false),
  new Book("Alice's Adventures in Wonderland", 'Lewis Carroll', 192, false),
];

const container = document.getElementById('container');
const tableBody = document.querySelector('tbody');
const addBtn = document.getElementById('add-btn');

const dialog = document.querySelector('dialog');
const createBtn = document.getElementById('create-btn');
const closeBtn = document.getElementById('close-btn');
const form = document.querySelector('form');

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();

  this.info = function () {
    return `${this.title} by ${this.author}, ${pages} pages, ${
      this.read ? 'read' : 'not read yet'
    }`;
  };
}

const updateDisplay = () => {
  tableBody.innerHTML = '';

  myLibrary.forEach((book) => {
    tableBody.innerHTML += `<tr>
        <th scope="row">${book.title}</th>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read ? '&#10003;' : '&#10007;'}</td>
        <td><button class="remove-btn" value="${book.id}">remove</button></td>
        <td><button class="mark-btn" value="${book.id}">mark as ${
      book.read ? 'unread' : 'read'
    }</button></td>
      </tr>`;
  });

  const removeBtns = document.querySelectorAll('.remove-btn');
  const markBtns = document.querySelectorAll('.mark-btn');

  removeBtns.forEach((button) => {
    button.addEventListener('click', () => {
      const index = myLibrary.findIndex((book) => book.id === button.value);
      const book = myLibrary[index];

      if (
        window.confirm(`Do you want to remove ${book.title} from the list?`)
      ) {
        myLibrary.splice(index, 1);
        updateDisplay();
      }
    });
  });

  markBtns.forEach((button) => {
    button.addEventListener('click', () => {
      const index = myLibrary.findIndex((book) => book.id === button.value);
      myLibrary[index].read = !myLibrary[index].read;
      updateDisplay();
    });
  });
};

const addBookToLibrary = (newBook) => {
  const { title, author, pages, read } = newBook;
  myLibrary.push(new Book(title, author, pages, read));
  updateDisplay();
};

updateDisplay();

addBtn.addEventListener('click', () => {
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  addBookToLibrary({
    title: event.target.title.value,
    author: event.target.author.value,
    pages: event.target.pages.value,
    read: event.target.read.value === 'true' ? true : false,
  });

  event.target.title.value = '';
  event.target.author.value = '';
  event.target.pages.value = '';
  event.target.read.value = '';

  dialog.close();
});
