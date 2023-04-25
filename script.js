const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const status = document.getElementById("status");

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

const library = document.querySelector(".library");
function createBookCard() {
  const bookCard = document.createElement("div");
  bookCard.classList.add("card");
  library.appendChild(bookCard);

  const bookTitle = document.createElement("h3");
  bookTitle.textContent = title.value;
  bookCard.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `by ${author.value}`;
  bookCard.appendChild(bookAuthor);

  const numberOfPages = document.createElement("p");
  numberOfPages.textContent = `${pages.value} Pages`;
  bookCard.appendChild(numberOfPages);

  const cardBtns = document.createElement("div");
  cardBtns.classList.add("card-btns");
  bookCard.appendChild(cardBtns);

  const statusBtn = document.createElement("button");
  if (status.checked) {
    statusBtn.textContent = "Read";
  } else {
    statusBtn.textContent = "Not Read";
  }
  cardBtns.appendChild(statusBtn);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  cardBtns.appendChild(removeBtn);
}

const popup = document.getElementById("popup");
function openPopUp() {
  popup.classList.add("open-popup");
}

function closePopUp() {
  popup.classList.remove("open-popup");
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();

  let books = myLibrary;
  books.forEach((book) => console.log(book));

  createBookCard();
});
