var userFormEl = document.querySelector('#user-form');
var PlayernameInputEl = document.querySelector('#playername');
//var teamNameInputEl = document.querySelector('#teamname');
var nameContainerEl = document.querySelector('#name-container');
//var teamContainerEl = document.querySelector('#team-container');
var nameSearchTerm = document.querySelector('#name-search-term')

var formSubmitHandler = function (event){
    event.preventDefault();

    var name = nameInputEl.value.trim();

    if(name){
        getPlayerStats(name);
        getTeamstats(name);
        
        containerEl.textContent = '';
        nameInputEl.value = '';
    } else{
        alert('please enter a Player name or a team name');
    }
};

var getPlayerStats = function (name){

    

    var displayname = function(name, searchTerm){
        if(name.length === 0){
            nameContainerEl.textContent = 'No Player or Team found';
            return;
        }
        repoSearchTerm.textContent = searchTerm;

        for(var i = 0; i < name.length; i++){
            
        }
    }



userFormEl.addEventListener('submit',formSubmitHandler);
}




fetch("https://sportscore1.p.rapidapi.com/sports/1/teams?page=1", {
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


fetch('https://gnews.io/api/v4/search?q=example&token=761d21cd3ee94c2d0b71ba65f6b3f22d')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });