var searchFormEl = document.querySelector('#search-form');

function searchFormSubmit(event) {
    event.preventDefault();
}

var apiKey = "e66890b07f2c3c2712ae08ab7c950f53";
var url = "";


//Handles search issue 
var searchInputVal = document.querySelector('#search-input').value;

  if (!searchInputVal) {
    console.error('Please enter a valid search term');
    return;
  }