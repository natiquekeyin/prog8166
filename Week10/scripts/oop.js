let form = document.querySelector("#book-form");
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
      Store.addBook(book);
      book.showAlert("Book successfully added", "success");
      book.clearFields();
    }

    e.preventDefault();
  });

  document.querySelector("#data").addEventListener("click", function (evt) {
    var book = new Book();
    book.deleteBook(evt.target);
    Store.removeBook(book);
  });

  e.preventDefault();
});

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
      showAlert("Book deleted successfully", "success");
    } else {
      showAlert("Wrong area clicked! click on X", "error");
    }
  }
}

class Store {
  static addBook(book) {
    var books = Store.getBooks();
    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }
  static displayBooks() {
    var books = Store.getBooks();
    books.forEach((book) => {
      var objBook = new Book();
      objBook.addBookToList(book);
    });
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

  //   try completing this function..15 minutes class task! 15 minutes.. I will be back after 30 minutes..
  static removeBook() {
    // complete this!
  }
}

// books =[{"title":"Java"}]
