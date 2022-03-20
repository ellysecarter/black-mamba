
//sports news api

var playerContainer = document.getElementById("results-container")
var inputEl = document.getElementById("username");
var submitbtn = document.getElementById('btn');
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
<<<<<<< HEAD
submitbtn.addEventListener('clicgitk',formSubmitHandler);
=======
submitbtn.addEventListener('click',formSubmitHandler);

>>>>>>> ab92c2c208855a76ad0c113b44de23056ec227b8
// test test test
// nba stats api test test test test
var statsContainer = document.getElementById("stats-container");
var statsInputEl = document.getElementById("username");
var statsSubmitBtn = document.getElementById('btn');

var statsSubmitHandler = function (event){
    event.preventDefault();

    var stats = statsInputEl.value.trim();

    if (username){
        statsContainer.textContent = "";
        inputEl.value = "";
    }

    fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=25&", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "b15a4fad3fmshcfa975c0b8052ecp142c44jsnf494d29e6230"
	}
        })
    .then(response => {
	        console.log(response);
    })
    .catch(err => {
	    console.error(err);
    });

    var maxlength = 3;
        if(data.length < 3){
            maxlength = data.length;
        }
        
        for (var i = 0; i < maxlength; i++){
        var firstnName = document.createElement('h4');
        var lastName = document.createElement('h4');
        var height_feet = document.createElement('a');
        var height_inches = document.createElement('a');
        var position = document.createElement('a');
        var teamName = document.createElement('a');
        var teamCity = document.createElement('a');
        var teamConference = document.createElement('a');

        fistName.textContent = data[i].first_name;
        lastName.textContent = data[i].last_name;
        height_feet.textContent = data[i].height_feet;
        height_inches.textCotent = data[i].height_inches;
        position.textContent = data[i].position;
        teamName.textContent = data.team[i].full_name;
        teamCity.textContent = data.team[i].city;
        teamConference.textContent = data.team[i].conference;
        
        statsContainer.append(fistName);
        statsContainer.append(lastName);
        statsContainer.append(height_feet);
        statsContainer.append(height_inches);
        statsContainer.append(position);
        statsContainer.append(teamName);
        statsContainer.append(teamCity);
        statsContainer.append(teamConference);
    }
}
statsSubmitBtn.addEventListener('click',statsSubmitHandler);



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
