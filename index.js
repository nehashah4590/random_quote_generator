const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quoteElement.textContent = data[Math.floor((Math.random() * 1800) + 23)].text;
    
  });



   
