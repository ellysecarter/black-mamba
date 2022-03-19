
// nba stats api test test test test
fetch("https://sportscore1.p.rapidapi.com/players/1/statistics?page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "sportscore1.p.rapidapi.com",
		"x-rapidapi-key": "b15a4fad3fmshcfa975c0b8052ecp142c44jsnf494d29e6230"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
// test test test
//sports news api

var playerContainer = document.getElementById("results-container")
var inputEl = document.getElementById("username");
var submitbtn = document.getElementById('btn')
var userArray = [];

var formSubmitHandler = function (event){
    event.preventDefault();
    
    var playerName = inputEl.value.trim();

    if (username){
        playerContainer.textContent = "";
        inputEl.value = "";
    }
    
    fetch('https://gnews.io/api/v4/search?q='+playerName+'&token=761d21cd3ee94c2d0b71ba65f6b3f22d')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var maxlength = 5;
        if(data.articles.length < 5){
            maxlength = data.articles.length;
        }
        
        for (var i = 0; i < maxlength; i++){
        var newsName = document.createElement('h4');
        var newsUrl = document.createElement('a')

        newsName.textContent = data.articles[i].title;
        newsUrl.textContent = data.articles[i].url;

        playerContainer.append(newsName);
        playerContainer.append(newsUrl);
    
    }
    });
    
    var user = inputEl.value.trim();
    userArray.push(user);
    localStorage.setItem("user",JSON.stringify(userArray));
}
submitbtn.addEventListener('click',formSubmitHandler);

// test test test



// recent searches section
var recentSearches = JSON.parse(localStorage.getItem("user"))
var showSearch = document.getElementById("search-list")
var clearBtn = document.getElementById("clear");

function displaySearches() {
    for (var i = 0; i < recentSearches.length; i++) {
        var entries = document.createElement("li");
        entries.textContent = recentSearches[i] + " ---- ";

        entries.setAttribute("style", "margin:auto; width:20%; ");
        showSearch.appendChild(entries);
    }

}

// clear recent search history from LS and remove from page
clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear("user", JSON.stringify(userArray));
    document.getElementById("search-list").style.display = "none";
    document.getElementById("clear").style.display = "none";
    })

displaySearches();
