window.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#book-form");

  form.addEventListener("submit", function (e) {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;

    addBookToList(title, author, isbn);
    clearFields();

    e.preventDefault();
  });

  function addBookToList(t, a, i) {
    if (t === "" || a === "" || i === "") {
      showAlert("No field should be empty", "error");
    } else {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td><td><button class="delete">X</button></td>`;
      document.querySelector("#book-list").appendChild(tr);
      showAlert("Book succesfully added!!", "success");
    }
  }

  function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  function showAlert(m, c) {
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

  this.document
    .querySelector("#data")
    .addEventListener("click", function (evt) {
      deleteBook(evt.target);
    });

  function deleteBook(elemToDelete) {
    if (elemToDelete.className === "delete") {
      elemToDelete.parentElement.parentElement.remove();
      showAlert("Book deleted successfully", "success");
    } else {
      showAlert("Wrong area clicked! click on X", "error");
    }
  }
});
