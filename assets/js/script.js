
// nba stats api
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

//sports news api

var playerContainer = document.getElementById("results-container")
var inputEl = document.getElementById("username");
var submitbtn = document.getElementById('btn')

var formSubmitHandler = function (event){
    event.preventDefault();
    
    var playerName = inputEl.value.trim();
    
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
        var newsName = document.createElement('h3');
        var newsUrl = document.createElement('p')

        newsName.textContent = data.articles[i].title;
        newsUrl.textContent = data.articles[i].url;

        playerContainer.append(newsName);
        playerContainer.append(newsUrl);
    
    }
    });
    
}
submitbtn.addEventListener('click',formSubmitHandler);
