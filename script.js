const myLibrary = [];

const showButton = document.querySelector("#showDialog");
const bookDialog = document.querySelector("#bookDialog");
const closeButton = document.querySelector("#closeDialog");
const body = document.querySelector("body");

// Prevent defaul submit action, add book to library, close dialog, reset form
bookDialog.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  bookDialog.close();
  form.reset();
});

showButton.addEventListener("click", () => {
  bookDialog.showModal();
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  bookDialog.close();
  form.reset();
});

// Close dialog when clicking outside of it

body.addEventListener("click", (e) => {
  if (e.target == bookDialog) {
    bookDialog.close();
    form.reset();
  }
});

class Book {
  constructor(title, author, pages, read) {
    this.title = '"' + title + '"';
    this.author = 'by: ' + author;
    this.pages = pages + " pages";
    this.read = read;



    this.info = function () {
      return (title + " by " + author + ", " + pages + " pages, " + read);
    };

  }
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#switch-1").checked;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}


function displayBooks() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.setAttribute("data-index", i);

    const title = document.createElement("p");
    title.textContent = book.title;
    bookDiv.appendChild(title);

    const author = document.createElement("p");
    author.textContent = book.author;
    bookDiv.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = book.pages;
    bookDiv.appendChild(pages);

    // const read = document.createElement("p");
    // read.textContent = (book.read == true) ? "read" : "not read yet";
    // bookDiv.appendChild(read);

    const toggleButton = document.createElement("button");
    toggleButton.classList.add("button");
    toggleButton.addEventListener("click", toggleRead);
    toggleButton.textContent = (book.read == true) ? "Read" : "Not read yet";
    bookDiv.appendChild(toggleButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button");
    deleteButton.addEventListener("click", deleteBook);
    deleteButton.textContent = "Delete";
    bookDiv.appendChild(deleteButton);

    bookDiv.style.backgroundColor = (book.read == true) ? "rgb(61, 145, 82)" : "rgb(173, 135, 95)";
    bookDiv.style.transition = "all 0.5s ease-in-out";

    container.appendChild(bookDiv);
  }
}

function deleteBook(e) {
  const bookIndex = e.target.parentElement.dataset.index;
  myLibrary.splice(bookIndex, 1);
  displayBooks();
}

function toggleRead(e) {
  const bookIndex = e.target.parentElement.dataset.index;
  const book = myLibrary[bookIndex];
  book.read = !book.read;
  displayBooks();
}

