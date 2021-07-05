var search = document.getElementById('search');
var mediaType = document.getElementById('mediaType');
var fetchButton = document.getElementById("searchButton");

function getApi(event) {
    event.preventDefault();
    console.log(search.value);
    var requestUrl = `https://www.loc.gov/` + mediaType.value + `/?q=` + search.value + `&fo=json`;  
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // Use the console to examine the response
            console.log(data);
            console.log(data.results[1].title)
            console.log(data.results[1].date)

        //     for (var i = 0; i < data.length; i++) {
        //       var userName = document.createElement('h2');
        //       var urlTitle = document.createElement('p');
        //       userName.textContent = data[i].login;
        //       urlTitle.textContent = data[i].url;
          });
      };
fetchButton.addEventListener('click', getApi);