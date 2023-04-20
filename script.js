const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const status = document.querySelector("#status");
const addBtn = document.querySelector(".addNewBook");
const library = document.querySelector(".library");
const form = document.querySelector("form");
let isClicked = true;

let myLibrary = [];

function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const newBook = new Book(
    author.value,
    title.value,
    pages.value,
    status.checked
  );
  myLibrary.push(newBook);
}

function createBookCard() {
  const bookCard = document.createElement("div");
  library.appendChild(bookCard);

  const bookTitle = document.createElement("h2");
  bookTitle.textContent = title.value;
  bookCard.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `by ${author.value}`;
  bookCard.appendChild(bookAuthor);

  const numberOfPages = document.createElement("p");
  numberOfPages.textContent = `${pages.value} pages`;
  bookCard.appendChild(numberOfPages);

  const statusBtn = document.createElement("button");
  if (status.checked) {
    statusBtn.textContent = "Read";
  } else {
    statusBtn.textContent = "Not Read";
  }
  bookCard.appendChild(statusBtn);
}

addBtn.addEventListener("click", () => {
  if (isClicked) {
    form.style.display = "block";
    isClicked = false;
  } else {
    form.style.display = "none";
    isClicked = true;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();

  let books = myLibrary;
  books.forEach((book) => console.log(book));

  createBookCard();
});
