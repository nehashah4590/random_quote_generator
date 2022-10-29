const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

fetch("https://api.quotable.io/random")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  
    quoteElement.textContent = data.content;
    authorElement.textContent = data.author;
  });


