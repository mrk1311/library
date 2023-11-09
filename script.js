const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = (read == "yes") ? "read" : "not read yet";



    this.info = function () {
      return (title + " by " + author + ", " + pages + " pages, " + read);
    };

  }
}

const showButton = document.querySelector("#showDialog");
const bookDialog = document.querySelector("#bookDialog");
const addBookButton = document.querySelector("#addBook");
const closeButton = document.querySelector("#closeDialog");

showButton.addEventListener("click", () => {
  bookDialog.showModal();
});

addBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  bookDialog.close();
});

closeButton.addEventListener("click", () => {
  bookDialog.close();
});


function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}

// TODO Prevent defaul submit action

function displayBooks() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.setAttribute("data-index", i);
    bookDiv.innerHTML = `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <p>${book.read}</p>
      <button class="delete">Delete</button>
      <button class="toggle">Toggle Read</button>
    `;
    container.appendChild(bookDiv);
  }
}
