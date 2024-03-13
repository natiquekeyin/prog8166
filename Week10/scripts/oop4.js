// In OOP.. we have a concept of class

// To make the books permanent..we can use "localStorage"
let form = document.querySelector("#book-form");

class Book {
  constructor(t, a, i) {
    this.title = t;
    this.author = a;
    this.isbn = i;
  }

  addBookToList(book) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><button class="delete">X</button></td>`;
    document.querySelector("#book-list").appendChild(tr);
  }
  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
  showAlert(m, c) {
    let div = document.createElement("div");
    div.className = c;

    div.innerHTML = `<p>${m}</p>`;
    div.id = "note";
    let container = document.querySelector(".container");
    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector("#note").remove();
    }, 3000);
  }
  deleteBook(elemToDelete) {
    if (elemToDelete.className === "delete") {
      elemToDelete.parentElement.parentElement.remove();
      this.showAlert("Book deleted successfully", "success");
    } else {
      this.showAlert("Wrong area clicked! click on X", "error");
    }
  }
}

class Store {
  static addBook(book) {
    var books = Store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }
  static getBooks() {
    var books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static displayBooks() {
    var books = Store.getBooks();
    books.forEach((book) => {
      var objBook = new Book();
      objBook.addBookToList(book);
    });
  }
  static removeBook(elem) {
    // read the books from memory
    // filter the books and leave out the elem book passed as parameter...
  }
}

window.addEventListener("DOMContentLoaded", function (e) {
  Store.displayBooks();
  form.addEventListener("submit", function (e) {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;

    var book = new Book(title, author, isbn);

    if (book.title === "" || book.author === "" || book.isbn === "") {
      book.showAlert("No field should be empty", "error");
    } else {
      book.addBookToList(book);
      book.showAlert("Book added successfully", "success");
      book.clearFields();
      Store.addBook(book);
    }

    e.preventDefault();
  });

  this.document
    .querySelector("#data")
    .addEventListener("click", function (evt) {
      var book = new Book();
      book.deleteBook(evt.target);
      //   Store.removeBook(evt.target); YOu need to make this removeBooks();
    });

  e.preventDefault();
});
