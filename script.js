const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const addBtn = document.querySelector(".addNewBook");
const form = document.querySelector("form");
let isClicked = true;

let myLibrary = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function addBookToLibrary() {
  const newBook = new Book(author.value, title.value, pages.value);
  myLibrary.push(newBook);
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
  console.log(myLibrary);
});
