window.addEventListener("DOMContentLoaded", function () {
  let x = document.querySelector("#item3");

  x.addEventListener("click", function () {
    document.querySelector("#pic1").src =
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXxlbnwwfHwwfHx8MA%3D%3D";

    x.innerHTML = "<strong>You clicked me!!!</strong>";
  });

  this.document.querySelector("#btn1").addEventListener("click", getTemp);

  function addDateModified() {
    document.getElementById("item3").innerHTML =
      "This document was last modified " + document.lastModified;
  }

  function getTemp() {
    let temp = prompt("What's the temperature today?", "degrees F");
    if (temp < 32) {
      document.write("<p>It may snow today!</p>");
    }
  }
});
