const myLibrary = [];






// let submitButton = document.querySelector(".button-submit");
// let showLibraryButton = document.querySelector(".show-library");


// function addBook() {
//   let book = {};
//   let title = document.querySelector("#title").value;
//   book.title = title;
//   book.author = document.querySelector("#author").value;
//   book.pages  = document.querySelector("#pages").value;
//   book.read = document.querySelector("input[name=read]:checked").value;
//   return(book);
// }

let myForm = document.querySelector("form");
let libraryContainer = document.querySelector(".library-container");



myForm.addEventListener("submit", function(e) {
  e.preventDefault();

  let newBookDiv = document.createElement("div");
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let readLower = document.querySelector("input[name=read]:checked").value;
  let read = readLower[0].toUpperCase() + readLower.slice(1);
  newBookDiv.className = "book-card";
    
  newBookDiv.innerHTML = 
  `<div class="book-row">
    <p class="book-info">Title:</p> <p>${title}</p>
  </div>
  <div class="book-row">
    <p class="book-info">Author:</p> <p>${author}</p>
  </div>
  <div class="book-row">
    <p class="book-info">Pages:</p> <p>${pages}</p>
  </div>
  <div class="book-row">
    <p class="book-info">Read:</p> <p>${read}</p>
  </div>`;

  libraryContainer.appendChild(newBookDiv);
  myLibrary.push()
})


// submitButton.addEventListener("click", () => {
//   const book = addBook();
//   let title = book.title;
//   let author = book.author;
//   let pages = book.pages;
//   let read = book.read;

// });


// showLibraryButton.addEventListener("click",  () => {
//   myLibrary.forEach((element) => console.log(element.title));

// });



