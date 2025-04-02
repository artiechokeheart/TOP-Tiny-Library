const books = require("./data/books.json");

const myLibrary = [];

function Book(title, author, pages, status) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.addId = () => {
    let uuid = crypto.randomUUID();
    return uuid;
  };
  this.title = title;
  this.author = author;
  this.pages = pages;
  this[`read status`] = status;
  this.getInfo = () => {
    return `${this.title} by ${this.author}, ${pages} pages, ${
      this[`read status`]
    }`;
  };
}

function addBookToLibrary(title, author, pages, status = "not read") {
  const newBook = new Book(title, author, pages, status);
  newBook.id = newBook.addId();
  newBook.info = newBook.getInfo();
  delete newBook.addId;
  delete newBook.getInfo;

  myLibrary.push(newBook);
}

function addBookToLibraryFromJSON(books) {
  const addData = books.map((book) => {
    addBookToLibrary(book.title, book.author, book.pages, book.id, book.info);
  });
}

addBookToLibraryFromJSON(books);

console.log("updated library:", myLibrary);
